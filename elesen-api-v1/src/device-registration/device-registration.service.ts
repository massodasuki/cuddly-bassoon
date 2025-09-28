import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeviceRegistrationDto } from './dto/create-device-registration.dto';
import { UpdateDeviceRegistrationDto } from './dto/update-device-registration.dto';
import { DeviceRegistration } from './entities/device-registration.entity';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';

@Injectable()
export class DeviceRegistrationService {
  constructor(
    @InjectRepository(DeviceRegistration)
    private readonly deviceRepository : Repository<DeviceRegistration>
  ){}

  async create(dto : CreateDeviceRegistrationDto) : Promise<DeviceRegistration>{
    const registration = this.deviceRepository.create(dto);
    return this.deviceRepository.save(registration);
  }

  // async findAll() : Promise<DeviceRegistration[]> {
  //   return this.deviceRepository.find();
  // }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit = 10, page = 1 } = paginationQuery;
  
    const [data, total] = await this.deviceRepository.findAndCount({
        take: limit,
        skip: (page - 1) * limit
      });
  
      return {
        data,
        total,
        page,
        pageSize: limit,
        totalPages: Math.ceil(total / limit),
      };
    }
  

  async findOne(id: string): Promise<DeviceRegistration> {
    const deviceRegistration = await this.deviceRepository.findOne({ where: { id } });
    if (!deviceRegistration) {
      throw new NotFoundException(`DeviceRegistration with ID ${id} not found`);
    }
    return deviceRegistration;
  }

  async update(id: string, dto: UpdateDeviceRegistrationDto): Promise<DeviceRegistration> {
    const deviceRegistration = await this.findOne(id);
    const updated = this.deviceRepository.merge(deviceRegistration, dto);
    return this.deviceRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const result = await this.deviceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`DeviceRegistration with ID ${id} not found`);
    }
  }
}
