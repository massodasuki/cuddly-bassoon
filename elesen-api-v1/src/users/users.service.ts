// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import * as bcrypt from 'bcryptjs'
import { UUID } from 'crypto'
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto'
import { Entities } from './entities/entities.entity'

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByUsername (username: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { username } })
  }

  async findById (id: UUID): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } })
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  async getUserWithProfile (id: UUID) {
    return this.userRepo.findOne({
      where: { id },
      relations: [
        'profile',
        'profile.gender',
        'profile.race',
        'profile.religion',
        'profile.marital_status',
        'roles',
      ],
    })
  }

  async getNelayanWithProfile (id: UUID) {
    return this.userRepo.findOne({
      where: { id },
      relations: [
        // 'financial',
        // 'fishingActivity',
        // 'pengkalan',
        'profile',
        'profile.gender',
        'profile.race',
        'profile.religion',
        'profile.marital_status',
        'roles',
        'kesalahan',
        'vessel',
        'darat_base_jetties',
        'jetty',
        'fishing_log',
        
        // 'pentadbirHartas',
        // 'pentadbirHartas.vessel'
      ],
    })
  }

  async createUser (username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = this.userRepo.create({ username, password: hashedPassword })
    return this.userRepo.save(user)
  }

  // async getAllUsers(): Promise<User[]> {
  //   return this.userRepo.find();
  // }

  async findAll (paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1 } = paginationQuery

    const [data, total] = await this.userRepo.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    })

    return {
      data,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    }
  }

  async update (username: string, dto: UpdateUserDto): Promise<User> {
    const existing = await this.userRepo.findOne({ where: { username } })

    if (!existing) {
      throw new NotFoundException(`Vessel with id ${username} not found`)
    }

    // Shallow merge or customize deeply as needed
    const updated = this.userRepo.merge(existing, dto)
    return this.userRepo.save(updated)
  }

  async softDelete (username: string): Promise<void> {
    const user = await this.userRepo.findOneBy({ username })
    if (user) {
      await this.userRepo.softRemove(user)
    }
  }

  // async getUsersByRoleLevel (level: number): Promise<User[]> {
  //   return this.userRepo
  //     .createQueryBuilder('user')
  //     .leftJoinAndSelect('user.roles', 'role')
  //     .where('role.level = :level', { level })
  //     .getMany()
  // }

  async getUsersWhereEntityIdNull (
    paginationQuery: PaginationQueryDto,
  ): Promise<{
    data: User[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const { page = 1, limit = 10 } = paginationQuery
    const pageSize = limit
    const skip = (page - 1) * pageSize

    const [data, total] = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('user.entity_id IS NULL')
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  async getUsersByRoleLevel (
    level: number,
    paginationQuery: PaginationQueryDto,
  ): Promise<{
    data: User[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const { page = 1, limit = 10 } = paginationQuery
    const pageSize = limit
    const skip = (page - 1) * pageSize

    const [data, total] = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('role.level = :level', { level })
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  async getUsersByRoleLevelAndId (
    level: number,
    id : string,
    page = 1,
    pageSize = 10,
  ): Promise<{
    data: User[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const skip = (page - 1) * pageSize

    const [data, total] = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('role.level = :level', { level })
      .andWhere('user.id = :id', { id })
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  async getUsersByRoleLevelAndUsername (
    level: number,
    username: string,
    paginationQuery: PaginationQueryDto,
  ): Promise<{
    data: User[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const { page = 1, limit = 10 } = paginationQuery
    const pageSize = limit
    const skip = (page - 1) * pageSize

    const [data, total] = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('role.level = :level', { level })
      .andWhere('user.username = :username', { username })
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  async findAllMinimalUsersWhereEntityIdNull (
    paginationQuery: PaginationQueryDto,
    lesen?: string,
  ): Promise<{
    data: { id: string; name: string; username: string; start_date: Date; end_date: Date; district: string, entity : Entities }[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }> {
    const { page = 1, limit = 10 } = paginationQuery
    const pageSize = limit
    const skip = (page - 1) * pageSize

    let roleName: string | undefined
    if (lesen === 'MARIN') {
      roleName = 'NELAYAN LAUT'
    } else if (lesen === 'DARAT') {
      roleName = 'NELAYAN DARAT'
    }

    let query = this.userRepo
      .createQueryBuilder('user')
      .leftJoin('user.roles', 'role')
      .select(['user.id', 'user.name', 'user.username', 'user.start_date', 'user.end_date', 'user.district', 'user.entity_id'])
      .where('user.entity_id IS NULL')

    if (roleName) {
      query = query.andWhere('LOWER(role.name) LIKE LOWER(:roleName)', { roleName: `%${roleName}%` })
    }

    const [data, total] = await query
      .skip(skip)
      .take(pageSize)
      .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    return {
      data,
      total,
      page,
      pageSize,
      totalPages,
    }
  }

  // Get user detail by vessels

  async getUsersByVessel (vesselNo: string): Promise<User[]> {
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.entity', 'entity') // ✅ use 'entity' (singular)
      .leftJoin('entity.vessels', 'vessel')
      .where('vessel.vessel_no = :vesselNo', { vesselNo })
      .getMany() // ✅ fetch the result
  }
}
