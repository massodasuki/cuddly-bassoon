import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';
import { LpiEnginesEntity } from '../entities/lpi-engines.entity';
import { LpiEquipmentItemsEntity } from '../entities/lpi-equipment-items.entity';
import { LpiEquipmentsEntity } from '../entities/lpi-equipments.entity';
import { LpiFishingEquipmentsEntity } from '../entities/lpi-fishing-equipments.entity';
import { LpiFishingGearsEntity } from '../entities/lpi-fishing-gears.entity';
import { LpiInlandFishingEquipmentItemsEntity } from '../entities/lpi-inland-fishing-equipment-items.entity';
import { LpiInlandFishingEquipmentsEntity } from '../entities/lpi-inland-fishing-equipments.entity';
import { LpiInspectionDetailsEntity } from '../entities/lpi-inspection-details.entity';
import { LpiInspectionItemsEntity } from '../entities/lpi-inspection-items.entity';
import { LpiInspectionsEntity } from '../entities/lpi-inspections.entity';
import { LpiNavigationsEntity } from '../entities/lpi-navigations.entity';
import { LpiSafetyEquipmentsEntity } from '../entities/lpi-safety-equipments.entity';
import { LpiSailingEquipmentsEntity } from '../entities/lpi-sailing-equipments.entity';
import { LpiVesselsEntity } from '../entities/lpi-vessels.entity';

@Injectable()
export class LpiFormService {
  constructor(
    @InjectRepository(LpiEnginesEntity)
    private enginesRepository: Repository<LpiEnginesEntity>,
    @InjectRepository(LpiEquipmentItemsEntity)
    private equipmentItemsRepository: Repository<LpiEquipmentItemsEntity>,
    @InjectRepository(LpiEquipmentsEntity)
    private equipmentsRepository: Repository<LpiEquipmentsEntity>,
    @InjectRepository(LpiFishingEquipmentsEntity)
    private fishingEquipmentsRepository: Repository<LpiFishingEquipmentsEntity>,
    @InjectRepository(LpiFishingGearsEntity)
    private fishingGearsRepository: Repository<LpiFishingGearsEntity>,
    @InjectRepository(LpiInlandFishingEquipmentItemsEntity)
    private inlandFishingEquipmentItemsRepository: Repository<LpiInlandFishingEquipmentItemsEntity>,
    @InjectRepository(LpiInlandFishingEquipmentsEntity)
    private inlandFishingEquipmentsRepository: Repository<LpiInlandFishingEquipmentsEntity>,
    @InjectRepository(LpiInspectionDetailsEntity)
    private inspectionDetailsRepository: Repository<LpiInspectionDetailsEntity>,
    @InjectRepository(LpiInspectionItemsEntity)
    private inspectionItemsRepository: Repository<LpiInspectionItemsEntity>,
    @InjectRepository(LpiInspectionsEntity)
    private inspectionsRepository: Repository<LpiInspectionsEntity>,
    @InjectRepository(LpiNavigationsEntity)
    private navigationsRepository: Repository<LpiNavigationsEntity>,
    @InjectRepository(LpiSafetyEquipmentsEntity)
    private safetyEquipmentsRepository: Repository<LpiSafetyEquipmentsEntity>,
    @InjectRepository(LpiSailingEquipmentsEntity)
    private sailingEquipmentsRepository: Repository<LpiSailingEquipmentsEntity>,
    @InjectRepository(LpiVesselsEntity)
    private vesselsRepository: Repository<LpiVesselsEntity>,
  ) {}

   async createWithFiles(dto: CreateLpiFormDto) {
    // Insert into each table
    if (dto.engines) {
      await this.enginesRepository.save(dto.engines);
    }
    if (dto.equipmentItems) {
      await this.equipmentItemsRepository.save(dto.equipmentItems);
    }
    if (dto.equipments) {
      await this.equipmentsRepository.save(dto.equipments);
    }
    if (dto.fishingEquipments) {
      await this.fishingEquipmentsRepository.save(dto.fishingEquipments);
    }
    if (dto.fishingGears) {
      await this.fishingGearsRepository.save(dto.fishingGears);
    }
    if (dto.inlandFishingEquipmentItems) {
      await this.inlandFishingEquipmentItemsRepository.save(dto.inlandFishingEquipmentItems);
    }
    if (dto.inlandFishingEquipments) {
      await this.inlandFishingEquipmentsRepository.save(dto.inlandFishingEquipments);
    }
    if (dto.inspectionDetails) {
      await this.inspectionDetailsRepository.save(dto.inspectionDetails);
    }
    if (dto.inspectionItems) {
      await this.inspectionItemsRepository.save(dto.inspectionItems);
    }
    if (dto.inspections) {
      await this.inspectionsRepository.save(dto.inspections);
    }
    if (dto.navigations) {
      await this.navigationsRepository.save(dto.navigations);
    }
    if (dto.safetyEquipments) {
      await this.safetyEquipmentsRepository.save(dto.safetyEquipments);
    }
    if (dto.sailingEquipments) {
      await this.sailingEquipmentsRepository.save(dto.sailingEquipments);
    }
    if (dto.vessels) {
      await this.vesselsRepository.save(dto.vessels);
    }
    return { message: 'LPI form data inserted successfully' };
  }

  async createLpiForm(dto: CreateLpiFormDto) {
    // Insert into each table
    if (dto.engines) {
      await this.enginesRepository.save(dto.engines);
    }
    if (dto.equipmentItems) {
      await this.equipmentItemsRepository.save(dto.equipmentItems);
    }
    if (dto.equipments) {
      await this.equipmentsRepository.save(dto.equipments);
    }
    if (dto.fishingEquipments) {
      await this.fishingEquipmentsRepository.save(dto.fishingEquipments);
    }
    if (dto.fishingGears) {
      await this.fishingGearsRepository.save(dto.fishingGears);
    }
    if (dto.inlandFishingEquipmentItems) {
      await this.inlandFishingEquipmentItemsRepository.save(dto.inlandFishingEquipmentItems);
    }
    if (dto.inlandFishingEquipments) {
      await this.inlandFishingEquipmentsRepository.save(dto.inlandFishingEquipments);
    }
    if (dto.inspectionDetails) {
      await this.inspectionDetailsRepository.save(dto.inspectionDetails);
    }
    if (dto.inspectionItems) {
      await this.inspectionItemsRepository.save(dto.inspectionItems);
    }
    if (dto.inspections) {
      await this.inspectionsRepository.save(dto.inspections);
    }
    if (dto.navigations) {
      await this.navigationsRepository.save(dto.navigations);
    }
    if (dto.safetyEquipments) {
      await this.safetyEquipmentsRepository.save(dto.safetyEquipments);
    }
    if (dto.sailingEquipments) {
      await this.sailingEquipmentsRepository.save(dto.sailingEquipments);
    }
    if (dto.vessels) {
      await this.vesselsRepository.save(dto.vessels);
    }
    return { message: 'LPI form data inserted successfully' };
  }
}