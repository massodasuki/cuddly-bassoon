import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBankAccountsEntity } from './user_bank_accounts.entity';
import { CreateUserBankAccountsDto } from './dto/create-user_bank_accounts.dto';
import { UpdateUserBankAccountsDto } from './dto/update-user_bank_accounts.dto';

@Injectable()
export class UserBankAccountsService {
  constructor(
    @InjectRepository(UserBankAccountsEntity)
    private userBankAccountsRepository: Repository<UserBankAccountsEntity>,
  ) {}

  findAll(): Promise<UserBankAccountsEntity[]> {
    return this.userBankAccountsRepository.find();
  }

  async findOne(id: string): Promise<UserBankAccountsEntity> {
    const entity = await this.userBankAccountsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`UserBankAccountsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createUserBankAccountsDto: CreateUserBankAccountsDto): Promise<UserBankAccountsEntity> {
    const entity = this.userBankAccountsRepository.create(createUserBankAccountsDto);
    return this.userBankAccountsRepository.save(entity);
  }

  async update(id: string, updateUserBankAccountsDto: UpdateUserBankAccountsDto): Promise<UserBankAccountsEntity> {
    await this.userBankAccountsRepository.update(id, updateUserBankAccountsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userBankAccountsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<UserBankAccountsEntity[]> {
    return this.userBankAccountsRepository.find({
      where: { application_id: applicationId }
    });
  }
}