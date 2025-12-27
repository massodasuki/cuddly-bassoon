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
           fishery_type: dto.jenisIkan,
           owner_health: dto.kesihatanPemilik,
           vessel_condition: dto.vesel_keadaan,
           vessel_originality: dto.vesel_ketulenan,
           hull_type: dto.vesel_jenisKulit,
           vessel_type: dto.vesel_statusKulit,
           inspection_date: new Date(dto.pemeriksaan_tarikhMula.replace(/(\d{4}-\d{2}-\d{2})\s+(\d{2})\s*:\s*(\d{2})\s*:\s*(\d{2}\.\d+)/, '$1T$2:$3:$4')),
           end_date: dto.pemeriksaan_tarikhTamat ? new Date(dto.pemeriksaan_tarikhTamat) : undefined,
           location: dto.pemeriksaan_lokasi,
           attandane_form: dto.pemeriksaanImg_borangKehadiran,
           vessel_picture: dto.veselImg_keseluruhan, 
           owner_inspector_picture: dto.pemeriksaanImg_PemeriksaDanPemilik,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.inspection_deleted_by,
           created_at: new Date(),
         });
         const savedInspection = await queryRunner.manager.save(inspection);

         // Create vessel record
         const vessel = this.vesselsRepository.create({
           width_marker_nail: dto.pakuPenandaLebar ? 1 : 0,
           width_marker_nail_comment: dto.pakuPenandaLebarKomen,
           pilot_house_paint_true: dto.rumahKemudi_diCatBetul ? 1 : 0,
           pilot_house_paint_bright: dto.rumahKemudi_diCatTerang? 1 : 0,
           pilot_house_has_zone_code: dto.rumahKemudi_adaKodZon? 1 : 0,
           pilot_house_alphabet: dto.rumahKemudi_hurufKodZon,
           pilot_house_on_roof: dto.rumahKemudi_diBumbung ? 1 : 0,
           pilot_house_comment: dto.rumahKemudi_komen,
           iron_hammer_marker: dto.tandaPenukulBesi_bahagianHaluan ? 1 : 0,
           iron_hammer_alphabet: dto.tandaPenukulBesi_hurufKodTanda ? 1 : 0,
           iron_hammer_comment: dto.tandaPenukulBesi_komen,
           registration_number_is_punch: dto.noPendaftaranVesel_diTebuk ? 1 : 0,
           registration_number_is_paint: dto.noPendaftaranVesel_diCat ? 1 : 0,
           registration_number_comment: dto.noPendaftaranVesel_komen,
           tinplate: dto.tinPlate ? 1 : 0,
           tinplate_no: dto.noTinPlate,
           tinplate_path: dto.tinplate_path,
           has_qr_code: dto.QR_diPasang,
           qr_code_is_working: dto.QR_berfungsi,
           qr_picture_path: dto.QRImg,
           qr_picture_comment: dto.QR_komen,
           has_white_stripes: dto.pukatTundaBerlesen_jalurPutih ? 1 : 0,
           white_stripes_is_bright: dto.pukatTundaBerlesen_diCat ? 1 : 0,
           net_drum_quantity: dto.pukatTundaBerlesen_jumlahNetDrum,
           pukat_tunda_comment: dto.pukatTundaBerlesen_komen,
           length_udv: dto.UDV_panjangMeter,
           width_udv: dto.UDV_lebarMeter,
           depth_udv: dto.UDV_dalamMeter,
           grt_total: dto.UDV_muatanGRT,
           gt_amount: dto.UDV_muatanGT,
           ugv_a: dto.UGV_A_semasaDiperiksa,
           ugv_b: dto.UGV_B_semasaDiperiksa,
           ugv_c: dto.UGV_C_semasaDiperiksa,
           ugv_d: dto.UGV_D_semasaDiperiksa,
           ugv_e: dto.UGV_E_semasaDiperiksa,
           ugv_f: dto.UGV_F_semasaDiperiksa,
           ugv_g: dto.UGV_G_semasaDiperiksa,
           vessel_picture_left_path: dto.veselImg_kiri,
           vessel_picture_right_path: dto.veselImg_kanan,
           vessel_picture_front_path: dto.veselImg_depan,
           vessel_picture_back_path: dto.veselImg_hadapan,
           vessel_picture_overall_path: dto.veselImg_keseluruhan,
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
            generator_picture_path: dto.generatorImg_semasaDiperiksa,
            engine_number: dto.engine_number,
            brand: dto.engine_brand_field,
            model: dto.engine_model_field,
            turbo: dto.enjinAdaTurbo_semasaDiperiksa,
            serial_no: dto.engine_serial_no,
            power_hp: dto.enjinKuasaKuda_semasaDiperiksa,
            power_kw: dto.engine_power_kw,
            cylinders: dto.engine_cylinders,
            stroke: dto.engine_stroke,
            displacement: dto.engine_displacement,
            fuel_type_code_id: dto.fuel_type_code_id,
            condition_code_id: dto.condition_code_id,
            is_main_engine: dto.is_main_engine,
            is_functional: dto.is_functional,
            is_compliant: dto.is_compliant,

            generator_picture_path_additional: dto.generatorImg_tambahan,

            engine_overall_picture_path: dto.engine_overall_picture_path,
            engine_plate_picture_path: dto.engine_plate_picture_path,
            engine_brand_additional: dto.engine_brand_additional,
            engine_model_additional: dto.engine_model_additional,
            engine_has_turbo_additional: dto.engine_has_turbo_additional,
            turbo_hp_additional: dto.turbo_hp_additional,
            engine_no_additional: dto.engine_no_additional,
            has_pev_additional: dto.has_pev_additional,
            pev_no_additional: dto.pev_no_additional,


            remarks: dto.engine_remarks,
            engine_brand: dto.enjinJenama_semasaDiperiksa,
            engine_model: dto.enjinModel_semasaDiperiksa,
            engine_has_turbo: dto.engine_has_turbo,
            turbo_hp: dto.engine_turbo_hp,
            engine_no: dto.enjinNombor_semasaDiperiksa,
            has_pev: dto.enjinAdaPEV_semasaDiperiksa ? 1 : 0,
            pev_no: dto.enjinNomborPEV_semasaDiperiksa,
            engine_picture_path: dto.enjinImg_semasaDiperiksa,
            engine_no_picture_path: dto.enjinNomborImg_semasaDiperiksa,
            pev_no_picture_path: dto.enjinNomborPEVImg_semasaDiperiksa,
            turbo_picture_path: dto.enjinTurboImg_semasaDiperiksa,
            
            
            engine_picture_path_additional: dto.enjinImg_tambahan,
            engine_no_picture_path_additional: dto.enjinNomborImg_tambahan,
            pev_no_picture_path_additional: dto.enjinNomborPEVImg_tambahan,
            turbo_picture_path_additional: dto.enjinTurboImg_tambahan,
            
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
           jacket_status: dto.jaketKeselamatan_status ? 1 : 0,
           jacket_quantity: dto.jaketKeselamatan_kuantiti || 0,
           jacket_condition: dto.jaketKeselamatan_keadaan ? 1 : 0,
           jacket_picture_path: dto.jaketKeselamatanImg,
           bouya_status: dto.boyaKeselamatan_status ? 1 : 0,
           bouya_quantity: dto.boyaKeselamatan_kuantiti || 0,
           bouya_condition: dto.boyaKeselamatan_keadaan ? 1 : 0,
           fire_extinguisher_status: dto.alatPemadamApi_status ? 1 : 0,
           fire_extinguisher_quantity: dto.alatPemadamApi_kuantiti || 0,
           fire_extinguisher_condition: dto.alatPemadamApi_keadaan ? 1 : 0,
           fire_extinguisher_picture_path: dto.alatPemadamApiImg,
           wireless_radio_status: dto.wirelessRadio_status  ? 1 : 0,
           wireless_radio_quantity: dto.wirelessRadio_kuantiti || 0,
           wireless_radio_condition: dto.wirelessRadio_keadaan ? 1 : 0,
           safety_raft: dto.rakitKeselamatan_status  ? 1 : 0,
           safety_raft_quantity: dto.rakitKeselamatan_kuantiti || 0,
           safety_raft_condition: dto.rakitKeselamatan_keadaan ? 1 : 0,
           raft_picture_path: dto.rakitKeselamatanImg,
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
           shipping_lights_status: dto.wirelessRadio_status  ? 1 : 0,
           shipping_lights_quantity: parseInt(dto.wirelessRadio_kuantiti) || 0,
           shipping_lights_condition: dto.wirelessRadio_keadaan  ? 1 : 0,
           mtu_status: dto.mtu_status  ? 1 : 0,
           mtu_quantity: dto.mtu_kuantiti || 0,
           mtu_condition: dto.mtu_keadaan  ? 1 : 0,
           mtu_serial_no : dto.mtu_serialNo,
           ais_status: dto.ais_status ? 1 : 0,
           ais_quantity: dto.ais_kuantiti || 0,
           ais_condition: dto.ais_keadaan ? 1 : 0,
           ais_serial_no : dto.ais_serialNo,
           gps_status: dto.gps_status ? 1 : 0,
           gps_quantity: dto.gps_kuantiti,
           gps_condition: dto.gps_keadaan ? 1 : 0,
           gps_serial_no : dto.gps_serialNo
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
           shipping_lights_status: dto.lampuPelayaran_status ? 1 : 0,
           shipping_lights_quantity: dto.lampuPelayaran_kuantiti || 0,
           shipping_lights_condition: dto.lampuPelayaran_keadaan ? 1 : 0,
           shipping_lights_picture_path: dto.shipping_lights_picture_path,
           ems_status: dto.ems_status,
           ems_quantity: dto.ems_quantity,
           ems_condition: dto.ems_condition,
           ems_picture_path: dto.ems_picture_path,
           mtu_status: dto.mtu_status ? 1 : 0,
           mtu_serial_no: dto.mtu_kuantiti,
           mtu_active: dto.mtu_keadaan ? 1 : 0,
           mtu_picture_path: dto.mtu_picture_path,
           ais_status: dto.ais_status ? 1 : 0,
           ais_serial_no: dto.ais_kuantiti,
           ais_active: dto.ais_keadaan  ? 1 : 0,
           ais_picture_path: dto.ais_picture_path,
           gps_status: dto.gps_status ? 1 : 0,
           gps_serial_no: dto.gps_serialNo,
           gps_condition: dto.gps_keadaan ? 1 : 0,
           created_by: dto.createdBy,
           updated_by: dto.updatedBy,
           deleted_by: dto.navigation_deleted_by,
           created_at: new Date(),
         });
         await queryRunner.manager.save(navigation);

         // Create fishing equipment record
         const fishingEquipment = this.fishingEquipmentsRepository.create({
           has_echo_sounder: dto.alatTangkapIkan_echoSounder ? 1 : 0,
           has_sonar: dto.alatTangkapIkan_sonar ? 1 : 0,
           has_net_hauler: dto.alatTangkapIkan_netHauler ? 1 : 0,
           has_power_block: dto.alatTangkapIkan_powerBlock ? 1 : 0,
           has_rsw: dto.alatTangkapIkan_rsw ? 1 : 0,
           fish_compartment_quantity: dto.alatTangkapIkan_jumlahPetakIkan,
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
           has_echo_sounder: dto.alatTangkapIkan_echoSounder ? 1 : 0,
           has_sonar: dto.alatTangkapIkan_sonar ? 1 : 0,
           has_net_hauler: dto.alatTangkapIkan_netHauler ? 1 : 0,
           has_power_block: dto.alatTangkapIkan_powerBlock ? 1 : 0,
           fish_compartment_quantity: dto.alatTangkapIkan_jumlahPetakIkan || 0,
           has_rsw: dto.alatTangkapIkan_rsw ? 1 : 0,
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
           jenis_kulit: dto.jenisKulitVesel,
           jenis_vesel: dto.vesel_statusKulit,
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
        fishery_type: dto.jenisIkan,
        owner_health: dto.kesihatanPemilik,
        vessel_condition: dto.vesel_keadaan,
        vessel_originality: dto.vesel_ketulenan,
        hull_type: dto.jenisKulitVesel,
        vessel_type: dto.vessel_type,
        inspection_date: new Date(dto.pemeriksaan_tarikhMula.replace(/(\d{4}-\d{2}-\d{2})\s+(\d{2})\s*:\s*(\d{2})\s*:\s*(\d{2}\.\d+)/, '$1T$2:$3:$4')),
        end_date: dto.pemeriksaan_tarikhTamat ? new Date(dto.pemeriksaan_tarikhTamat) : undefined,
        location: dto.pemeriksaan_lokasi,
        attandane_form: dto.pemeriksaanImg_borangKehadiran,
        vessel_picture: dto.pemeriksaanImg_veselKeseluruhan,
        owner_inspector_picture: dto.pemeriksaanImg_PemeriksaDanPemilik,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.inspection_deleted_by,
        created_at: new Date(),
      });
      const savedInspection = await queryRunner.manager.save(inspection);

      const vessel = this.vesselsRepository.create({
        width_marker_nail: dto.pakuPenandaLebar ? 1 : 0,
        width_marker_nail_comment: dto.pakuPenandaLebarKomen,
        pilot_house_paint_true: dto.rumahKemudi_ditebuk ? 1 : 0,
        pilot_house_paint_bright: dto.rumahKemudi_diCatTerang,
        pilot_house_has_zone_code: dto.rumahKemudi_adaKodZon,
        pilot_house_alphabet: dto.rumahKemudi_hurufKodZon,
        pilot_house_on_roof: dto.rumahKemudi_diBumbung ? 1 : 0,
        pilot_house_comment: dto.rumahKemudi_komen,
        iron_hammer_marker: dto.tandaPenukulBesi_bahagianHaluan,
        iron_hammer_alphabet: dto.tandaPenukulBesi_hurufKodTanda,
        iron_hammer_comment: dto.tandaPenukulBesi_komen,
        registration_number_is_punch: dto.noPendaftaranVesel_diTebuk ? 1 : 0,
        registration_number_is_paint: dto.noPendaftaranVesel_diCat ? 1 : 0,
        registration_number_comment: dto.noPendaftaranVesel_komen,
        tinplate: dto.tinPlate ? 1 : 0,
        tinplate_no: dto.noTinPlate,
        tinplate_path: dto.tinplate_path,
        has_qr_code: dto.QR_diPasang ? 1 : 0,
        qr_code_is_working: dto.QR_berfungsi ? 1 : 0,
        qr_picture_path: dto.QRImg,
        qr_picture_comment: dto.QR_komen,
        has_white_stripes: dto.pukatTundaBerlesen_jalurPutih ? 1 : 0,
        white_stripes_is_bright: dto.pukatTundaBerlesen_diCat ? 1 : 0,
        net_drum_quantity: dto.pukatTundaBerlesen_jumlahNetDrum,
        pukat_tunda_comment: dto.pukatTundaBerlesen_komen,
        length_udv: dto.UDV_panjangMeter,
        width_udv: dto.UDV_lebarMeter,
        depth_udv: dto.UDV_dalamMeter,
        grt_total: dto.UDV_muatanGRT,
        gt_amount: dto.UDV_muatanGT,
        ugv_a: dto.UGV_A_semasaDiperiksa,
        ugv_b: dto.UGV_B_semasaDiperiksa,
        ugv_c: dto.UGV_C_semasaDiperiksa,
        ugv_d: dto.UGV_D_semasaDiperiksa,
        ugv_e: dto.UGV_E_semasaDiperiksa,
        ugv_f: dto.UGV_F_semasaDiperiksa,
        ugv_g: dto.UGV_G_semasaDiperiksa,
        vessel_picture_left_path: dto.veselImg_kiri,
        vessel_picture_right_path: dto.veselImg_kanan,
        vessel_picture_front_path: dto.veselImg_depan,
        vessel_picture_back_path: dto.veselImg_hadapan,
        vessel_picture_overall_path: dto.veselImg_keseluruhan,
        full_inspection_lpi_id: savedInspection.id,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.vessel_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(vessel);

      const engine = this.enginesRepository.create({
        
        generator_picture_path: dto.generatorImg_semasaDiperiksa,
        engine_number: dto.engine_number,
        brand: dto.engine_brand_field,
        model: dto.engine_model_field,
        turbo: dto.enjinAdaTurbo_semasaDiperiksa,
        serial_no: dto.engine_serial_no,
        power_hp: dto.enjinKuasaKuda_semasaDiperiksa,
        power_kw: dto.engine_power_kw,
        cylinders: dto.engine_cylinders,
        stroke: dto.engine_stroke,
        displacement: dto.engine_displacement,
        fuel_type_code_id: dto.fuel_type_code_id,
        condition_code_id: dto.condition_code_id,
        is_main_engine: dto.is_main_engine,
        is_functional: dto.is_functional,
        is_compliant: dto.is_compliant,

        generator_picture_path_additional: dto.generatorImg_tambahan,

        engine_overall_picture_path: dto.engine_overall_picture_path,
        engine_plate_picture_path: dto.engine_plate_picture_path,
        engine_brand_additional: dto.engine_brand_additional,
        engine_model_additional: dto.engine_model_additional,
        engine_has_turbo_additional: dto.engine_has_turbo_additional,
        turbo_hp_additional: dto.turbo_hp_additional,
        engine_no_additional: dto.engine_no_additional,
        has_pev_additional: dto.has_pev_additional,
        pev_no_additional: dto.pev_no_additional,


        remarks: dto.engine_remarks,
        engine_brand: dto.enjinJenama_semasaDiperiksa,
        engine_model: dto.enjinModel_semasaDiperiksa,
        engine_has_turbo: dto.engine_has_turbo,
        turbo_hp: dto.engine_turbo_hp,
        engine_no: dto.enjinNombor_semasaDiperiksa,
        has_pev: dto.enjinAdaPEV_semasaDiperiksa ? 1 : 0,
        pev_no: dto.enjinNomborPEV_semasaDiperiksa,
        engine_picture_path: dto.enjinImg_semasaDiperiksa,
        engine_no_picture_path: dto.enjinNomborImg_semasaDiperiksa,
        pev_no_picture_path: dto.enjinNomborPEVImg_semasaDiperiksa,
        turbo_picture_path: dto.enjinTurboImg_semasaDiperiksa,
        
        
        engine_picture_path_additional: dto.enjinImg_tambahan,
        engine_no_picture_path_additional: dto.enjinNomborImg_tambahan,
        pev_no_picture_path_additional: dto.enjinNomborPEVImg_tambahan,
        turbo_picture_path_additional: dto.enjinTurboImg_tambahan,
        
        full_inspection_lpi_id: savedInspection.id,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.engine_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(engine);

      const safetyEquipment = this.safetyEquipmentsRepository.create({
        jacket_status: dto.jaketKeselamatan_status  ? 1 : 0,
        jacket_quantity: dto.jaketKeselamatan_kuantiti || 0,
        jacket_condition: dto.jaketKeselamatan_keadaan  ? 1 : 0,
        jacket_picture_path: dto.jaketKeselamatanImg,
        bouya_status: dto.boyaKeselamatan_status  ? 1 : 0,
        bouya_quantity: dto.boyaKeselamatan_kuantiti || 0,
        bouya_condition: dto.boyaKeselamatan_keadaan  ? 1 : 0,
        fire_extinguisher_status: dto.alatPemadamApi_status  ? 1 : 0,
        fire_extinguisher_quantity:dto.alatPemadamApi_kuantiti || 0,
        fire_extinguisher_condition: dto.alatPemadamApi_keadaan  ? 1 : 0,
        fire_extinguisher_picture_path: dto.alatPemadamApiImg,
        wireless_radio_status: dto.wirelessRadio_status  ? 1 : 0,
        wireless_radio_quantity: dto.wirelessRadio_kuantiti || 0,
        wireless_radio_condition: dto.wirelessRadio_keadaan  ? 1 : 0,
        safety_raft: dto.rakitKeselamatan_status  ? 1 : 0,
        safety_raft_quantity: dto.rakitKeselamatan_kuantiti || 0,
        safety_raft_condition: dto.rakitKeselamatan_keadaan  ? 1 : 0,
        raft_picture_path: dto.rakitKeselamatanImg,
        full_inspection_lpi_id: savedInspection.id,
        lpi_inspection_id: savedInspection.id,
        created_by: dto.createdBy,
        updated_by: dto.updatedBy,
        deleted_by: dto.safety_deleted_by,
        created_at: new Date(),
      });
      await queryRunner.manager.save(safetyEquipment);

      const fishingEquipment = this.fishingEquipmentsRepository.create({
        has_echo_sounder: dto.alatTangkapIkan_echoSounder ? 1 : 0,
        has_sonar: dto.alatTangkapIkan_sonar ? 1 : 0,
        has_net_hauler: dto.alatTangkapIkan_netHauler ? 1 : 0,
        has_power_block: dto.alatTangkapIkan_powerBlock ? 1 : 0,
        has_rsw: dto.alatTangkapIkan_rsw ? 1 : 0,
        fish_compartment_quantity: dto.alatTangkapIkan_jumlahPetakIkan,
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