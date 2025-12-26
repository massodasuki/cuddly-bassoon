import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { randomUUID } from 'crypto';
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
    private dataSource: DataSource,
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

       const queryRunner = this.dataSource.createQueryRunner();
       await queryRunner.connect();
       await queryRunner.startTransaction();

       try {
         // Create main inspection record
         const inspection = this.inspectionsRepository.create({
           id: randomUUID(),
           inspection_id: dto.inspection_id,
           remarks: dto.remarks,
           fishery_type: dto.fishery_type,
           owner_health: dto.owner_health,
           vessel_condition: dto.keadaanVeselSemasa,
           vessel_originality: dto.vessel_originality,
           hull_type: dto.jenisKulitVesel,
           vessel_type: dto.vessel_type,
           inspection_date: new Date(dto.tarikhPemeriksaan.replace(/(\d{4}-\d{2}-\d{2})\s+(\d{2})\s*:\s*(\d{2})\s*:\s*(\d{2}\.\d+)/, '$1T$2:$3:$4')),
           end_date: dto.end_date ? new Date(dto.end_date) : undefined,
           location: dto.kodZon,
           attandane_form: dto.tandaTanganPembantuImg,
           vessel_picture: dto.veselKeseluruhanImg,
           owner_inspector_picture: dto.tandatanganPegawaiImg,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.inspection_deleted_by,
           created_at: new Date(),
         });
         const savedInspection = await queryRunner.manager.save(inspection);

         // Create vessel record
         const vessel = this.vesselsRepository.create({
           width_marker_nail: dto.pakuPenandaLebar ? 1 : 0,
           width_marker_nail_comment: dto.width_marker_nail_comment,
           pilot_house_paint_true: dto.rumahKemudi_ditebuk ? 1 : 0,
           pilot_house_paint_bright: dto.pilot_house_paint_bright,
           pilot_house_has_zone_code: dto.pilot_house_has_zone_code,
           pilot_house_alphabet: dto.kodZon,
           pilot_house_on_roof: dto.rumahKemudi_diBumbung ? 1 : 0,
           pilot_house_comment: dto.pilot_house_comment,
           iron_hammer_marker: dto.iron_hammer_marker,
           iron_hammer_alphabet: dto.iron_hammer_alphabet,
           iron_hammer_comment: dto.iron_hammer_comment,
           registration_number_is_punch: dto.noVesel_ditebuk ? 1 : 0,
           registration_number_is_paint: dto.noVesel_dicat ? 1 : 0,
           registration_number_comment: dto.registration_number_comment,
           tinplate: dto.tinPlate ? 1 : 0,
           tinplate_no: dto.noTinPlate,
           tinplate_path: dto.tinplate_path,
           has_qr_code: dto.has_qr_code,
           qr_code_is_working: dto.qr_code_is_working,
           qr_picture_path: dto.qr_picture_path,
           qr_picture_comment: dto.qr_picture_comment,
           has_white_stripes: dto.jalurPutih ? 1 : 0,
           white_stripes_is_bright: dto.pukatTundaBerlesen_dicat ? 1 : 0,
           net_drum_quantity: dto.net_drum_quantity,
           pukat_tunda_comment: dto.pukat_tunda_comment,
           length_udv: dto.panjangMeter_semasaDiperiksa,
           width_udv: dto.lebarMeter_semasaDiperiksa,
           depth_udv: dto.kedalamanMeter_semasaDiperiksa,
           grt_total: dto.muatanGRT_semasaDiperiksa,
           gt_amount: dto.gt_amount,
           ugv_a: dto.ugv_a,
           ugv_b: dto.ugv_b,
           ugv_c: dto.ugv_c,
           ugv_d: dto.ugv_d,
           ugv_e: dto.ugv_e,
           ugv_f: dto.ugv_f,
           ugv_g: dto.ugv_g,
           vessel_picture_left_path: dto.vessel_picture_left_path,
           vessel_picture_right_path: dto.vessel_picture_right_path,
           vessel_picture_front_path: dto.vessel_picture_front_path,
           vessel_picture_back_path: dto.vessel_picture_back_path,
           vessel_picture_overall_path: dto.veselKeseluruhanImg,
           full_inspection_lpi_id: savedInspection.id,
           lpi_inspection_id: savedInspection.id,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.vessel_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(vessel);

         // Create engine record
         const engine = this.enginesRepository.create({
           engine_number: dto.engine_number,
           brand: dto.engine_brand_field,
           model: dto.engine_model_field,
           turbo: dto.engine_turbo,
           serial_no: dto.engine_serial_no,
           power_hp: dto.kuasaKuda_semasaDiperiksa,
           power_kw: dto.engine_power_kw,
           cylinders: dto.engine_cylinders,
           stroke: dto.engine_stroke,
           displacement: dto.engine_displacement,
           fuel_type_code_id: dto.fuel_type_code_id,
           condition_code_id: dto.condition_code_id,
           is_main_engine: dto.is_main_engine,
           is_functional: dto.is_functional,
           is_compliant: dto.is_compliant,
           engine_overall_picture_path: dto.engine_overall_picture_path,
           engine_plate_picture_path: dto.engine_plate_picture_path,
           remarks: dto.engine_remarks,
           engine_brand: dto.jenama_semasaDiperiksa,
           engine_model: dto.model_semasaDiperiksa,
           engine_has_turbo: dto.engine_has_turbo,
           turbo_hp: dto.engine_turbo_hp,
           engine_no: dto.noEnjin_semasaDiperiksa,
           has_pev: dto.isNoPEV ? 1 : 0,
           pev_no: dto.noPEV,
           engine_picture_path: dto.enjinImg,
           engine_no_picture_path: dto.noEnjinImg,
           pev_no_picture_path: dto.pev_no_picture_path,
           turbo_picture_path: dto.turboImg,
           generator_picture_path: dto.generatorImg,
           engine_brand_additional: dto.engine_brand_additional,
           engine_model_additional: dto.engine_model_additional,
           engine_has_turbo_additional: dto.engine_has_turbo_additional,
           turbo_hp_additional: dto.turbo_hp_additional,
           engine_no_additional: dto.engine_no_additional,
           has_pev_additional: dto.has_pev_additional,
           pev_no_additional: dto.pev_no_additional,
           engine_picture_path_additional: dto.engine_picture_path_additional,
           engine_no_picture_path_additional: dto.engine_no_picture_path_additional,
           pev_no_picture_path_additional: dto.pev_no_picture_path_additional,
           turbo_picture_path_additional: dto.turbo_picture_path_additional,
           generator_picture_path_additional: dto.generator_picture_path_additional,
           full_inspection_lpi_id: savedInspection.id,
           lpi_inspection_id: savedInspection.id,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.engine_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(engine);

         // Create safety equipment record
         const safetyEquipment = this.safetyEquipmentsRepository.create({
           jacket_status: dto.pelampungKeselamatan_status === 'Ada' ? 1 : 0,
           jacket_quantity: parseInt(dto.pelampungKeselamatan_kuantiti) || 0,
           jacket_condition: dto.pelampungKeselamatan_keadaan === 'Baik' ? 1 : 0,
           jacket_picture_path: dto.jacket_picture_path,
           bouya_status: dto.boyaKeselamatan_status === 'Ada' ? 1 : 0,
           bouya_quantity: parseInt(dto.boyaKeselamatan_kuantiti) || 0,
           bouya_condition: dto.boyaKeselamatan_keadaan === 'Baik' ? 1 : 0,
           fire_extinguisher_status: dto.alatPemadamApi_status === 'Ada' ? 1 : 0,
           fire_extinguisher_quantity: parseInt(dto.alatPemadamApi_kuantiti) || 0,
           fire_extinguisher_condition: dto.alatPemadamApi_keadaan === 'Baik' ? 1 : 0,
           fire_extinguisher_picture_path: dto.fire_extinguisher_picture_path,
           wireless_radio_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
           wireless_radio_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
           wireless_radio_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
           safety_raft: dto.rakitKeselamatan_status === 'Ada' ? 1 : 0,
           safety_raft_quantity: parseInt(dto.rakitKeselamatan_kuantiti) || 0,
           safety_raft_condition: dto.rakitKeselamatan_keadaan === 'Baik' ? 1 : 0,
           raft_picture_path: dto.raft_picture_path,
           full_inspection_lpi_id: savedInspection.id,
           lpi_inspection_id: savedInspection.id,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.safety_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(safetyEquipment);

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
           shipping_lights_picture_path: dto.shipping_lights_picture_path,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.sailing_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(sailingEquipment);

         // Create navigation record
         const navigation = this.navigationsRepository.create({
           lpi_inspection_id: savedInspection.id,
           shipping_lights_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
           shipping_lights_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
           shipping_lights_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
           shipping_lights_picture_path: dto.shipping_lights_picture_path,
           ems_status: dto.ems_status,
           ems_quantity: dto.ems_quantity,
           ems_condition: dto.ems_condition,
           ems_picture_path: dto.ems_picture_path,
           mtu_status: dto.mtu_status === 'Ada' ? 1 : 0,
           mtu_serial_no: dto.mtu_kuantiti,
           mtu_active: dto.mtu_keadaan === 'Baik' ? 1 : 0,
           mtu_picture_path: dto.mtu_picture_path,
           ais_status: dto.ais_status === 'Ada' ? 1 : 0,
           ais_serial_no: dto.ais_kuantiti,
           ais_active: dto.ais_keadaan === 'Baik' ? 1 : 0,
           ais_picture_path: dto.ais_picture_path,
           gps_status: dto.GPS ? 1 : 0,
           gps_serial_no: '1',
           gps_condition: 1,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.navigation_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(navigation);

         // Create fishing equipment record
         const fishingEquipment = this.fishingEquipmentsRepository.create({
           has_echo_sounder: dto.echoSounder ? 1 : 0,
           has_sonar: dto.sonar ? 1 : 0,
           has_net_hauler: dto.netHouler ? 1 : 0,
           has_power_block: dto.powerBlock ? 1 : 0,
           has_rsw: dto.RSW ? 1 : 0,
           fish_compartment_quantity: dto.fish_compartment_quantity,
           full_inspection_lpi_id: savedInspection.id,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.fishing_equip_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(fishingEquipment);

         // Create fishing gears record
         const fishingGears = this.fishingGearsRepository.create({
           lpi_inspection_id: savedInspection.id,
           has_echo_sounder: dto.echoSounder ? 1 : 0,
           has_sonar: dto.sonar ? 1 : 0,
           has_net_hauler: dto.netHouler ? 1 : 0,
           has_power_block: dto.powerBlock ? 1 : 0,
           fish_compartment_quantity: dto.fish_compartment_quantity || 0,
           has_rsw: dto.RSW ? 1 : 0,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.fishing_gears_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(fishingGears);

         // Create inland fishing equipments record
         const inlandFishing = this.inlandFishingEquipmentsRepository.create({
           full_inspection_lpi_id: savedInspection.id,
           main_equipment_cm_id: dto.peralatan_utama,
           extra_equipment_1_cm_id: dto.peralatan_tambahan,
           extra_equipment_2_cm_id: dto.extra_equipment_2_cm_id,
           extra_equipment_3_cm_id: dto.extra_equipment_3_cm_id,
           extra_equipment_4_cm_id: dto.extra_equipment_4_cm_id,
           extra_equipment_5_cm_id: dto.extra_equipment_5_cm_id,
           remarks: dto.peralatan_dijumpai,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.inland_fishing_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(inlandFishing);

         // Create inland fishing equipment items record
         const inlandFishingItems = this.inlandFishingEquipmentItemsRepository.create({
           full_inspection_lpi_id: savedInspection.id,
           equipment_id: dto.peralatan_utama,
           type: 'main',
           quantity: 1,
           condition: 1,
           position: dto.position,
           remarks: dto.peralatan_dijumpai,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.inland_item_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(inlandFishingItems);

         // Create inspection details record
         const inspectionDetails = this.inspectionDetailsRepository.create({
           full_inspection_lpi_id: savedInspection.id,
           keadaan_vesel: dto.keadaan_vesel,
           ketulinan_vesel: dto.ketulinan_vesel,
           jenis_kulit: dto.jenis_kulit,
           jenis_vesel: dto.jenis_vesel,
           tarikh_pemeriksaan: dto.tarikh_pemeriksaan ? new Date(dto.tarikh_pemeriksaan) : undefined,
           lokasi: dto.lokasi,
           borang_kehadiran: dto.borang_kehadiran,
           gambar_vesel_semak: dto.gambar_vesel_semak,
           gambar_pemeriksa_pemilik: dto.gambar_pemeriksa_pemilik,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.inspection_details_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(inspectionDetails);

         // Create inspection items record
         const inspectionItems = this.inspectionItemsRepository.create({
           inspection_id: savedInspection.id,
           kumpulan_peralatan: dto.kumpulan_peralatan,
           nama_peralatan: dto.peralatan_utama,
           kuantiti: dto.kuantiti,
           catatan: dto.catatan,
           display_order: dto.display_order,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.inspection_items_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(inspectionItems);

         // Create equipment items record
         const equipmentItems = this.equipmentItemsRepository.create({
           lpi_inspection_id: savedInspection.id,
           group_id: dto.group_id,
           equipment_id: dto.peralatan_utama,
           quantity: 1,
           note: dto.peralatan_dijumpai,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.equipment_items_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(equipmentItems);

         // Create equipment record
         const equipment = this.equipmentsRepository.create({
           main_equipment_id: dto.peralatan_utama,
           additional_equipment_id: dto.peralatan_tambahan,
           lpi_inspection_id: savedInspection.id,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.equipments_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(equipment);

         // Similarly for other repositories, but for brevity, assuming they are optional or similar
         // You can add more as needed

         await queryRunner.commitTransaction();
         return dto;
       } catch (error) {
         await queryRunner.rollbackTransaction();
         throw error;
       } finally {
         await queryRunner.release();
       }
  }

  async createLpiForm(dto: CreateLpiFormDto) {
    // Similar to createWithFiles but without files
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const inspection = this.inspectionsRepository.create({
        id: randomUUID(),
        inspection_id: dto.inspection_id,
        remarks: dto.remarks,
        fishery_type: dto.fishery_type,
        owner_health: dto.owner_health,
        vessel_condition: dto.keadaanVeselSemasa,
        vessel_originality: dto.vessel_originality,
        hull_type: dto.jenisKulitVesel,
        vessel_type: dto.vessel_type,
        inspection_date: new Date(dto.tarikhPemeriksaan.replace(/(\d{4}-\d{2}-\d{2})\s+(\d{2})\s*:\s*(\d{2})\s*:\s*(\d{2}\.\d+)/, '$1T$2:$3:$4')),
        end_date: dto.end_date ? new Date(dto.end_date) : undefined,
        location: dto.kodZon,
        attandane_form: dto.tandaTanganPembantuImg,
        vessel_picture: dto.veselKeseluruhanImg,
        owner_inspector_picture: dto.tandatanganPegawaiImg,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.inspection_deleted_by,
        created_at: new Date(),
      });
      const savedInspection = await queryRunner.manager.save(inspection);

      const vessel = this.vesselsRepository.create({
        width_marker_nail: dto.pakuPenandaLebar ? 1 : 0,
        width_marker_nail_comment: dto.width_marker_nail_comment,
        pilot_house_paint_true: dto.rumahKemudi_ditebuk ? 1 : 0,
        pilot_house_paint_bright: dto.pilot_house_paint_bright,
        pilot_house_has_zone_code: dto.pilot_house_has_zone_code,
        pilot_house_alphabet: dto.kodZon,
        pilot_house_on_roof: dto.rumahKemudi_diBumbung ? 1 : 0,
        pilot_house_comment: dto.pilot_house_comment,
        iron_hammer_marker: dto.iron_hammer_marker,
        iron_hammer_alphabet: dto.iron_hammer_alphabet,
        iron_hammer_comment: dto.iron_hammer_comment,
        registration_number_is_punch: dto.noVesel_ditebuk ? 1 : 0,
        registration_number_is_paint: dto.noVesel_dicat ? 1 : 0,
        registration_number_comment: dto.registration_number_comment,
        tinplate: dto.tinPlate ? 1 : 0,
        tinplate_no: dto.noTinPlate,
        tinplate_path: dto.tinplate_path,
        has_qr_code: dto.has_qr_code,
        qr_code_is_working: dto.qr_code_is_working,
        qr_picture_path: dto.qr_picture_path,
        qr_picture_comment: dto.qr_picture_comment,
        has_white_stripes: dto.jalurPutih ? 1 : 0,
        white_stripes_is_bright: dto.pukatTundaBerlesen_dicat ? 1 : 0,
        net_drum_quantity: dto.net_drum_quantity,
        pukat_tunda_comment: dto.pukat_tunda_comment,
        length_udv: dto.panjangMeter_semasaDiperiksa,
        width_udv: dto.lebarMeter_semasaDiperiksa,
        depth_udv: dto.kedalamanMeter_semasaDiperiksa,
        grt_total: dto.muatanGRT_semasaDiperiksa,
        gt_amount: dto.gt_amount,
        ugv_a: dto.ugv_a,
        ugv_b: dto.ugv_b,
        ugv_c: dto.ugv_c,
        ugv_d: dto.ugv_d,
        ugv_e: dto.ugv_e,
        ugv_f: dto.ugv_f,
        ugv_g: dto.ugv_g,
        vessel_picture_left_path: dto.vessel_picture_left_path,
        vessel_picture_right_path: dto.vessel_picture_right_path,
        vessel_picture_front_path: dto.vessel_picture_front_path,
        vessel_picture_back_path: dto.vessel_picture_back_path,
        vessel_picture_overall_path: dto.veselKeseluruhanImg,
        full_inspection_lpi_id: savedInspection.id,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.vessel_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(vessel);

      const engine = this.enginesRepository.create({
        engine_number: dto.engine_number,
        brand: dto.engine_brand_field,
        model: dto.engine_model_field,
        turbo: dto.engine_turbo,
        serial_no: dto.engine_serial_no,
        power_hp: dto.kuasaKuda_semasaDiperiksa,
        power_kw: dto.engine_power_kw,
        cylinders: dto.engine_cylinders,
        stroke: dto.engine_stroke,
        displacement: dto.engine_displacement,
        fuel_type_code_id: dto.fuel_type_code_id,
        condition_code_id: dto.condition_code_id,
        is_main_engine: dto.is_main_engine,
        is_functional: dto.is_functional,
        is_compliant: dto.is_compliant,
        engine_overall_picture_path: dto.engine_overall_picture_path,
        engine_plate_picture_path: dto.engine_plate_picture_path,
        remarks: dto.engine_remarks,
        engine_brand: dto.jenama_semasaDiperiksa,
        engine_model: dto.model_semasaDiperiksa,
        engine_has_turbo: dto.engine_has_turbo,
        turbo_hp: dto.engine_turbo_hp,
        engine_no: dto.noEnjin_semasaDiperiksa,
        has_pev: dto.isNoPEV ? 1 : 0,
        pev_no: dto.noPEV,
        engine_picture_path: dto.enjinImg,
        engine_no_picture_path: dto.noEnjinImg,
        pev_no_picture_path: dto.pev_no_picture_path,
        turbo_picture_path: dto.turboImg,
        generator_picture_path: dto.generatorImg,
        engine_brand_additional: dto.engine_brand_additional,
        engine_model_additional: dto.engine_model_additional,
        engine_has_turbo_additional: dto.engine_has_turbo_additional,
        turbo_hp_additional: dto.turbo_hp_additional,
        engine_no_additional: dto.engine_no_additional,
        has_pev_additional: dto.has_pev_additional,
        pev_no_additional: dto.pev_no_additional,
        engine_picture_path_additional: dto.engine_picture_path_additional,
        engine_no_picture_path_additional: dto.engine_no_picture_path_additional,
        pev_no_picture_path_additional: dto.pev_no_picture_path_additional,
        turbo_picture_path_additional: dto.turbo_picture_path_additional,
        generator_picture_path_additional: dto.generator_picture_path_additional,
        full_inspection_lpi_id: savedInspection.id,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.engine_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(engine);

      const safetyEquipment = this.safetyEquipmentsRepository.create({
        jacket_status: dto.pelampungKeselamatan_status === 'Ada' ? 1 : 0,
        jacket_quantity: parseInt(dto.pelampungKeselamatan_kuantiti) || 0,
        jacket_condition: dto.pelampungKeselamatan_keadaan === 'Baik' ? 1 : 0,
        jacket_picture_path: dto.jacket_picture_path,
        bouya_status: dto.boyaKeselamatan_status === 'Ada' ? 1 : 0,
        bouya_quantity: parseInt(dto.boyaKeselamatan_kuantiti) || 0,
        bouya_condition: dto.boyaKeselamatan_keadaan === 'Baik' ? 1 : 0,
        fire_extinguisher_status: dto.alatPemadamApi_status === 'Ada' ? 1 : 0,
        fire_extinguisher_quantity: parseInt(dto.alatPemadamApi_kuantiti) || 0,
        fire_extinguisher_condition: dto.alatPemadamApi_keadaan === 'Baik' ? 1 : 0,
        fire_extinguisher_picture_path: dto.fire_extinguisher_picture_path,
        wireless_radio_status: dto.lampuPelayaran_status === 'Ada' ? 1 : 0,
        wireless_radio_quantity: parseInt(dto.lampuPelayaran_kuantiti) || 0,
        wireless_radio_condition: dto.lampuPelayaran_keadaan === 'Baik' ? 1 : 0,
        safety_raft: dto.rakitKeselamatan_status === 'Ada' ? 1 : 0,
        safety_raft_quantity: parseInt(dto.rakitKeselamatan_kuantiti) || 0,
        safety_raft_condition: dto.rakitKeselamatan_keadaan === 'Baik' ? 1 : 0,
        raft_picture_path: dto.raft_picture_path,
        full_inspection_lpi_id: savedInspection.id,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.safety_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(safetyEquipment);

      const fishingEquipment = this.fishingEquipmentsRepository.create({
        has_echo_sounder: dto.echoSounder ? 1 : 0,
        has_sonar: dto.sonar ? 1 : 0,
        has_net_hauler: dto.netHouler ? 1 : 0,
        has_power_block: dto.powerBlock ? 1 : 0,
        has_rsw: dto.RSW ? 1 : 0,
        fish_compartment_quantity: dto.fish_compartment_quantity,
        full_inspection_lpi_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.fishing_equip_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(fishingEquipment);

      const equipment = this.equipmentsRepository.create({
        main_equipment_id: dto.peralatan_utama,
        additional_equipment_id: dto.peralatan_tambahan,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.equipments_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(equipment);

      await queryRunner.commitTransaction();
      return dto;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}