import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceRegistrationEntity } from './device-registration.entity';
import { CreateDeviceRegistrationDto } from './dto/create-device-registration.dto';
import { UpdateDeviceRegistrationDto } from './dto/update-device-registration.dto';

@Injectable()
export class DeviceRegistrationService {
  constructor(
    @InjectRepository(DeviceRegistrationEntity)
    private deviceRegistrationRepository: Repository<DeviceRegistrationEntity>,
  ) {}

  findAll(): Promise<DeviceRegistrationEntity[]> {
    return this.deviceRegistrationRepository.find();
  }

  async findOne(id: string): Promise<DeviceRegistrationEntity> {
    const entity = await this.deviceRegistrationRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`DeviceRegistrationEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createDeviceRegistrationDto: CreateDeviceRegistrationDto): Promise<DeviceRegistrationEntity> {
    const entity = this.deviceRegistrationRepository.create(createDeviceRegistrationDto);
    return this.deviceRegistrationRepository.save(entity);
  }

  async update(id: string, updateDeviceRegistrationDto: UpdateDeviceRegistrationDto): Promise<DeviceRegistrationEntity> {
    await this.deviceRegistrationRepository.update(id, updateDeviceRegistrationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.deviceRegistrationRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<DeviceRegistrationEntity[]> {
    return this.deviceRegistrationRepository.find({
      where: { application_id: applicationId }
    });
  }
}