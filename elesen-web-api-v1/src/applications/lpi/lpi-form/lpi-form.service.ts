import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';
import { ImageUploadService } from './image-upload.service';
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
    private readonly imageUploadService: ImageUploadService,
  ) {}

   async createWithFiles(dto: CreateLpiFormDto, files: { [key: string]: Express.Multer.File[] }): Promise<any> {
       console.log('Creating LPI form with files:', { dto: dto, files });

       // Upload files
       const allFiles: Express.Multer.File[] = [];
       Object.values(files).forEach(fileArray => {
         if (fileArray) allFiles.push(...fileArray);
       });
       const uploadedFiles = await this.imageUploadService.uploadImages(allFiles, dto.applicationId);

       // Update dto with uploaded paths
       Object.keys(uploadedFiles).forEach(fieldname => {
         if (dto.hasOwnProperty(fieldname)) {
           (dto as any)[fieldname] = uploadedFiles[fieldname];
         }
       });

    // Create main inspection record
    const inspection = this.inspectionsRepository.create({
      vessel_condition: dto.keadaanVeselSemasa,
      hull_type: dto.jenisKulitVesel,
      inspection_date: new Date(dto.tarikhPemeriksaan),
      location: dto.kodZon,
      vessel_picture: dto.veselKeseluruhanImg,
      owner_inspector_picture: dto.tandatanganPegawaiImg,
      attandane_form: dto.tandaTanganPembantuImg,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    const savedInspection = await this.inspectionsRepository.save(inspection);

    // Create vessel record
    const vessel = this.vesselsRepository.create({
      registration_number_is_punch: dto.noVesel_ditebuk ? 1 : 0,
      registration_number_is_paint: dto.noVesel_dicat ? 1 : 0,
      tinplate: dto.tinPlate ? 1 : 0,
      tinplate_no: dto.noTinPlate,
      width_marker_nail: dto.pakuPenandaLebar ? 1 : 0,
      pilot_house_paint_true: dto.rumahKemudi_ditebuk ? 1 : 0,
      pilot_house_on_roof: dto.rumahKemudi_diBumbung ? 1 : 0,
      pilot_house_alphabet: dto.kodZon,
      has_white_stripes: dto.jalurPutih ? 1 : 0,
      white_stripes_is_bright: dto.pukatTundaBerlesen_dicat ? 1 : 0,
      length_udv: dto.panjangMeter_semasaDiperiksa,
      width_udv: dto.lebarMeter_semasaDiperiksa,
      depth_udv: dto.kedalamanMeter_semasaDiperiksa,
      grt_total: dto.muatanGRT_semasaDiperiksa,
      vessel_picture_overall_path: dto.veselKeseluruhanImg,
      lpi_inspection_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.vesselsRepository.save(vessel);

    // Create engine record
    const engine = this.enginesRepository.create({
      engine_brand: dto.jenama_semasaDiperiksa,
      engine_model: dto.model_semasaDiperiksa,
      power_hp: dto.kuasaKuda_semasaDiperiksa,
      engine_no: dto.noEnjin_semasaDiperiksa,
      engine_picture_path: dto.enjinImg,
      engine_no_picture_path: dto.noEnjinImg,
      turbo_picture_path: dto.turboImg,
      generator_picture_path: dto.generatorImg,
      has_pev: dto.isNoPEV ? 1 : 0,
      pev_no: dto.noPEV,
      full_inspection_lpi_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.enginesRepository.save(engine);

    // Create safety equipment record
    const safetyEquipment = this.safetyEquipmentsRepository.create({
      jacket_status: dto.pelampungKeselamatan_status === 'Ada' ? 1 : 0,
      jacket_quantity: parseInt(dto.pelampungKeselamatan_kuantiti) || 0,
      jacket_condition: dto.pelampungKeselamatan_keadaan === 'Baik' ? 1 : 0,
      bouya_status: dto.boyaKeselamatan_status === 'Ada' ? 1 : 0,
      bouya_quantity: parseInt(dto.boyaKeselamatan_kuantiti) || 0,
      bouya_condition: dto.boyaKeselamatan_keadaan === 'Baik' ? 1 : 0,
      fire_extinguisher_status: dto.alatPemadamApi_status === 'Ada' ? 1 : 0,
      fire_extinguisher_quantity: parseInt(dto.alatPemadamApi_kuantiti) || 0,
      fire_extinguisher_condition: dto.alatPemadamApi_keadaan === 'Baik' ? 1 : 0,
      wireless_radio_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
      wireless_radio_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
      wireless_radio_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
      safety_raft: dto.rakitKeselamatan_status === 'Ada' ? 1 : 0,
      safety_raft_quantity: parseInt(dto.rakitKeselamatan_kuantiti) || 0,
      safety_raft_condition: dto.rakitKeselamatan_keadaan === 'Baik' ? 1 : 0,
      full_inspection_lpi_id: savedInspection.id,
      lpi_inspection_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.safetyEquipmentsRepository.save(safetyEquipment);

    // Create sailing equipment record
    const sailingEquipment = this.sailingEquipmentsRepository.create({
      full_inspection_lpi_id: savedInspection.id,
      shipping_lights_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
      shipping_lights_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
      shipping_lights_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
      mtu_status: dto.mtu_status === 'Ada' ? 1 : 0,
      mtu_quantity: parseInt(dto.mtu_kuantiti) || 0,
      mtu_condition: dto.mtu_keadaan === 'Baik' ? 1 : 0,
      ais_status: dto.ais_status === 'Ada' ? 1 : 0,
      ais_quantity: parseInt(dto.ais_kuantiti) || 0,
      ais_condition: dto.ais_keadaan === 'Baik' ? 1 : 0,
      gps_status: dto.GPS ? 1 : 0,
      gps_quantity: 1,
      gps_condition: 1,
      mtu_ais_picture_path: dto.MTUImg || dto.AISImg,
      shipping_lights_picture_path: '',
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.sailingEquipmentsRepository.save(sailingEquipment);

    // Create navigation record
    const navigation = this.navigationsRepository.create({
      lpi_inspection_id: savedInspection.id,
      shipping_lights_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
      shipping_lights_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
      shipping_lights_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
      mtu_status: dto.mtu_status === 'Ada' ? 1 : 0,
      mtu_serial_no: dto.mtu_kuantiti,
      mtu_active: dto.mtu_keadaan === 'Baik' ? 1 : 0,
      ais_status: dto.ais_status === 'Ada' ? 1 : 0,
      ais_serial_no: dto.ais_kuantiti,
      ais_active: dto.ais_keadaan === 'Baik' ? 1 : 0,
      gps_status: dto.GPS ? 1 : 0,
      gps_serial_no: '1',
      gps_condition: 1,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.navigationsRepository.save(navigation);

    // Create fishing equipment record
    const fishingEquipment = this.fishingEquipmentsRepository.create({
      has_echo_sounder: dto.echoSounder ? 1 : 0,
      has_sonar: dto.sonar ? 1 : 0,
      has_net_hauler: dto.netHouler ? 1 : 0,
      has_power_block: dto.powerBlock ? 1 : 0,
      has_rsw: dto.RSW ? 1 : 0,
      full_inspection_lpi_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.fishingEquipmentsRepository.save(fishingEquipment);

    // Create inland fishing equipments record
    const inlandFishing = this.inlandFishingEquipmentsRepository.create({
      full_inspection_lpi_id: savedInspection.id,
      main_equipment_cm_id: dto.peralatan_utama,
      extra_equipment_1_cm_id: dto.peralatan_tambahan,
      remarks: dto.peralatan_dijumpai,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.inlandFishingEquipmentsRepository.save(inlandFishing);

    // Create inspection details record
    const inspectionDetails = this.inspectionDetailsRepository.create({
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.inspectionDetailsRepository.save(inspectionDetails);

    // Create inspection items record
    const inspectionItems = this.inspectionItemsRepository.create({
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.inspectionItemsRepository.save(inspectionItems);

    // Create equipment record
    const equipment = this.equipmentsRepository.create({
      main_equipment_id: dto.peralatan_utama,
      additional_equipment_id: dto.peralatan_tambahan,
      lpi_inspection_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.equipmentsRepository.save(equipment);

    // Similarly for other repositories, but for brevity, assuming they are optional or similar
    // You can add more as needed

    return dto;
  }

  async createLpiForm(dto: CreateLpiFormDto) {
    // Similar to createWithFiles but without files
    const inspection = this.inspectionsRepository.create({
      vessel_condition: dto.keadaanVeselSemasa,
      hull_type: dto.jenisKulitVesel,
      inspection_date: new Date(dto.tarikhPemeriksaan),
      location: dto.kodZon,
      vessel_picture: dto.veselKeseluruhanImg,
      owner_inspector_picture: dto.tandatanganPegawaiImg,
      attandane_form: dto.tandaTanganPembantuImg,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    const savedInspection = await this.inspectionsRepository.save(inspection);

    const vessel = this.vesselsRepository.create({
      registration_number_is_punch: dto.noVesel_ditebuk ? 1 : 0,
      registration_number_is_paint: dto.noVesel_dicat ? 1 : 0,
      tinplate: dto.tinPlate ? 1 : 0,
      tinplate_no: dto.noTinPlate,
      width_marker_nail: dto.pakuPenandaLebar ? 1 : 0,
      pilot_house_paint_true: dto.rumahKemudi_ditebuk ? 1 : 0,
      pilot_house_on_roof: dto.rumahKemudi_diBumbung ? 1 : 0,
      pilot_house_alphabet: dto.kodZon,
      has_white_stripes: dto.jalurPutih ? 1 : 0,
      white_stripes_is_bright: dto.pukatTundaBerlesen_dicat ? 1 : 0,
      length_udv: dto.panjangMeter_semasaDiperiksa,
      width_udv: dto.lebarMeter_semasaDiperiksa,
      depth_udv: dto.kedalamanMeter_semasaDiperiksa,
      grt_total: dto.muatanGRT_semasaDiperiksa,
      vessel_picture_overall_path: dto.veselKeseluruhanImg,
      lpi_inspection_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.vesselsRepository.save(vessel);

    const engine = this.enginesRepository.create({
      engine_brand: dto.jenama_semasaDiperiksa,
      engine_model: dto.model_semasaDiperiksa,
      power_hp: dto.kuasaKuda_semasaDiperiksa,
      engine_no: dto.noEnjin_semasaDiperiksa,
      engine_picture_path: dto.enjinImg,
      engine_no_picture_path: dto.noEnjinImg,
      turbo_picture_path: dto.turboImg,
      generator_picture_path: dto.generatorImg,
      has_pev: dto.isNoPEV ? 1 : 0,
      pev_no: dto.noPEV,
      full_inspection_lpi_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.enginesRepository.save(engine);

    const safetyEquipment = this.safetyEquipmentsRepository.create({
      jacket_status: dto.pelampungKeselamatan_status === 'Ada' ? 1 : 0,
      jacket_quantity: parseInt(dto.pelampungKeselamatan_kuantiti) || 0,
      jacket_condition: dto.pelampungKeselamatan_keadaan === 'Baik' ? 1 : 0,
      bouya_status: dto.boyaKeselamatan_status === 'Ada' ? 1 : 0,
      bouya_quantity: parseInt(dto.boyaKeselamatan_kuantiti) || 0,
      bouya_condition: dto.boyaKeselamatan_keadaan === 'Baik' ? 1 : 0,
      fire_extinguisher_status: dto.alatPemadamApi_status === 'Ada' ? 1 : 0,
      fire_extinguisher_quantity: parseInt(dto.alatPemadamApi_kuantiti) || 0,
      fire_extinguisher_condition: dto.alatPemadamApi_keadaan === 'Baik' ? 1 : 0,
      wireless_radio_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
      wireless_radio_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
      wireless_radio_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
      safety_raft: dto.rakitKeselamatan_status === 'Ada' ? 1 : 0,
      safety_raft_quantity: parseInt(dto.rakitKeselamatan_kuantiti) || 0,
      safety_raft_condition: dto.rakitKeselamatan_keadaan === 'Baik' ? 1 : 0,
      full_inspection_lpi_id: savedInspection.id,
      lpi_inspection_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.safetyEquipmentsRepository.save(safetyEquipment);

    const fishingEquipment = this.fishingEquipmentsRepository.create({
      has_echo_sounder: dto.echoSounder ? 1 : 0,
      has_sonar: dto.sonar ? 1 : 0,
      has_net_hauler: dto.netHouler ? 1 : 0,
      has_power_block: dto.powerBlock ? 1 : 0,
      has_rsw: dto.RSW ? 1 : 0,
      full_inspection_lpi_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.fishingEquipmentsRepository.save(fishingEquipment);

    const equipment = this.equipmentsRepository.create({
      main_equipment_id: dto.peralatan_utama,
      additional_equipment_id: dto.peralatan_tambahan,
      lpi_inspection_id: savedInspection.id,
      created_by: dto.createdBy,
      updated_by: dto.updatedBy,
      created_at: new Date(),
    });
    await this.equipmentsRepository.save(equipment);

    return dto;
  }
}