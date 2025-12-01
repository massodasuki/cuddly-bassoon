import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { CreateDaratVeselLpiFormDto } from './dto/create-darat-vesel-lpi-form.dto';
import { ImageUploadService } from './image-upload.service';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratApplicationLogEntity } from '../darat-application-logs/darat-application-logs.entity';
import { DaratInspectionEquipmentEntity } from '../darat-inspection-equipments/darat-inspection-equipments.entity';
import { DaratUserEquipmentEntity } from '../darat-user-equipments/darat-user-equipments.entity';
import { DaratVesselEngineEntity } from '../darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratVesselHullHistorieEntity } from '../darat-vessel-hull-histories/darat-vessel-hull-histories.entity';
import { DaratVesselHistorieEntity } from '../darat-vessel-histories/darat-vessel-histories.entity';
import { DaratTemporaryPinEntity } from '../darat-temporary-pins/darat-temporary-pins.entity';
import { DaratVesselEngineHistorieEntity } from '../darat-vessel-engine-histories/darat-vessel-engine-histories.entity';
 
@Injectable()
export class DaratVeselLpiFormService {
  constructor(
    @InjectRepository(DaratVeselLpiFormEntity)
    private readonly mainInspectionRepo: Repository<DaratVeselLpiFormEntity>,
    
    // Core repositories
    @InjectRepository(DaratApplicationEntity)
    private readonly applicationRepo: Repository<DaratApplicationEntity>,
    @InjectRepository(DaratVesselEntity)
    private readonly vesselRepo: Repository<DaratVesselEntity>,
    
    // Supporting repositories
    @InjectRepository(DaratApplicationLogEntity)
    private readonly applicationLogRepo: Repository<DaratApplicationLogEntity>,
    @InjectRepository(DaratInspectionEquipmentEntity)
    private readonly inspectionEquipmentRepo: Repository<DaratInspectionEquipmentEntity>,
    @InjectRepository(DaratUserEquipmentEntity)
    private readonly userEquipmentRepo: Repository<DaratUserEquipmentEntity>,
    @InjectRepository(DaratTemporaryPinEntity)
    private readonly temporaryPinRepo: Repository<DaratTemporaryPinEntity>,
    
    // Vessel-related repositories
    @InjectRepository(DaratVesselEngineEntity)
    private readonly vesselEngineRepo: Repository<DaratVesselEngineEntity>,
    @InjectRepository(DaratVesselEngineHistorieEntity)
    private readonly vesselEngineHistoryRepo: Repository<DaratVesselEngineHistorieEntity>,
    @InjectRepository(DaratVesselHullEntity)
    private readonly vesselHullRepo: Repository<DaratVesselHullEntity>,
    @InjectRepository(DaratVesselHullHistorieEntity)
    private readonly vesselHullHistoryRepo: Repository<DaratVesselHullHistorieEntity>,
    @InjectRepository(DaratVesselHistorieEntity)
    private readonly vesselHistoryRepo: Repository<DaratVesselHistorieEntity>,
    
    private readonly imageUploadService: ImageUploadService,
  ) {}

  findAll(): Promise<DaratVeselLpiFormEntity[]> {
    return this.mainInspectionRepo.find();
  }

  async findOne(id: string): Promise<DaratVeselLpiFormEntity> {
    const entity = await this.mainInspectionRepo.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  async create(createDto: CreateDaratVeselLpiFormDto): Promise<DaratVeselLpiFormEntity> {
    const entity = this.mainInspectionRepo.create(createDto as any);
    const savedEntity = await this.mainInspectionRepo.save(entity);
    return Array.isArray(savedEntity) ? savedEntity[0] : savedEntity;
  }

  /**
   * Main method for creating vessel inspection with file uploads
   * Simplified to delegate work to focused helper methods
   */
  async createWithFiles(createDto: CreateDaratVeselLpiFormDto, files: { [key: string]: Express.Multer.File[] }): Promise<any> {
    console.log('Creating LPI form with files:', { dto: createDto, files });

    // Validate required fields
    this.validateRequiredFields(createDto);

    // Upload and process files
    const uploadedFiles = await this.processFileUploads(createDto, files);

    // Transform flat DTO to structured format
    const transformedData = this.transformDtoData(createDto, uploadedFiles);

    // Create main inspection record
    const mainInspection = await this.createMainInspection(transformedData);

    // Create related records
    await this.createRelatedRecords(transformedData, mainInspection.id);

    // Return enriched response
    return this.buildEnrichedResponse(transformedData, mainInspection);
  }

  /**
   * Validate required fields for inspection creation
   */
  private validateRequiredFields(createDto: CreateDaratVeselLpiFormDto): void {
    if (!createDto.applicationId) {
      throw new BadRequestException('Application ID is required for inspection creation');
    }
  }

  /**
   * Process and upload all files
   */
  private async processFileUploads(createDto: CreateDaratVeselLpiFormDto, files: { [key: string]: Express.Multer.File[] }): Promise<{ [key: string]: string }> {
    // Flatten files array for upload
    const allFiles: Express.Multer.File[] = [];
    Object.values(files).forEach(fileArray => {
      if (fileArray) allFiles.push(...fileArray);
    });

    console.log('Processing files:', allFiles.map(f => ({ fieldname: f.fieldname, originalname: f.originalname })));

    // Upload images using service
    const uploadedFiles = await this.imageUploadService.uploadImages(allFiles, createDto.applicationId);
    console.log('Uploaded files:', uploadedFiles);

    return uploadedFiles;
  }

  /**
   * Transform flat DTO data into structured format for easier processing
   */
  private transformDtoData(createDto: CreateDaratVeselLpiFormDto, uploadedFiles: { [key: string]: string }) {
    return {
      // Core identifiers
      ...createDto,
      
      // Vessel registration info
      vesselRegistration: {
        noPendaftaranVesel: {
          diTebuk: createDto.noVesel_ditebuk,
          diCat: createDto.noVesel_dicat,
          diBumbung: createDto.noVesel_diBumbung,
        },
        tandaPenukulBesi: {
          tandaBahagianLaluan: createDto.tandaBahagianLaluan,
          hurufKodTanda: createDto.hurufKodTanda,
        },
        tinPlate: {
          isPresent: createDto.tinPlate,
          number: createDto.noTinPlate,
        },
        pakuPenandaLebar: createDto.pakuPenandaLebar,
      },

      // Steering house info
      rumahKemudi: {
        diTebuk: createDto.rumahKemudi_ditebuk,
        kodZon: createDto.kodZon,
        diBumbung: createDto.rumahKemudi_diBumbung,
      },

      // Trawl net info
      pukatTundaBerlesen: {
        jalurPutih: createDto.jalurPutih,
        diCat: createDto.pukatTundaBerlesen_dicat,
      },

      // Vessel dimensions
      dimensions: {
        panjang: {
          dalamLesen: createDto.panjangMeter_dalamLesen,
          semasaDiperiksa: createDto.panjangMeter_semasaDiperiksa,
        },
        lebar: {
          dalamLesen: createDto.lebarMeter_dalamLesen,
          semasaDiperiksa: createDto.lebarMeter_semasaDiperiksa,
        },
        kedalaman: {
          dalamLesen: createDto.kedalamanMeter_dalamLesen,
          semasaDiperiksa: createDto.kedalamanMeter_semasaDiperiksa,
        },
        muatanGRT: {
          dalamLesen: createDto.muatanGRT_dalamLesen,
          semasaDiperiksa: createDto.muatanGRT_semasaDiperiksa,
        },
      },

      // Engine information
      engine: {
        dalamLesen: {
          jenama: createDto.jenama_dalamLesen,
          model: createDto.model_dalamLesen,
          kuasaKuda: createDto.kuasaKuda_dalamLesen,
          noEnjin: createDto.noEnjin_dalamLesen,
        },
        semasaDiperiksa: {
          jenama: createDto.jenama_semasaDiperiksa,
          model: createDto.model_semasaDiperiksa,
          kuasaKuda: createDto.kuasaKuda_semasaDiperiksa,
          noEnjin: createDto.noEnjin_semasaDiperiksa,
        },
        images: {
          enjinImg: uploadedFiles['enjinImg'] || createDto.enjinImg,
          noEnjinImg: uploadedFiles['noEnjinImg'] || createDto.noEnjinImg,
          penandaEnjinImg: uploadedFiles['penandaEnjinImg'] || createDto.penandaEnjinImg,
          turboImg: uploadedFiles['turboImg'] || createDto.turboImg,
          generatorImg: uploadedFiles['generatorImg'] || createDto.generatorImg,
        },
      },

      // Safety equipment
      safetyEquipment: {
        pelampungKeselamatan: {
          status: createDto.pelampungKeselamatan_status,
          quantity: createDto.pelampungKeselamatan_kuantiti,
          condition: createDto.pelampungKeselamatan_keadaan,
        },
        boyaKeselamatan: {
          status: createDto.boyaKeselamatan_status,
          quantity: createDto.boyaKeselamatan_kuantiti,
          condition: createDto.boyaKeselamatan_keadaan,
        },
        alatPemadamApi: {
          status: createDto.alatPemadamApi_status,
          quantity: createDto.alatPemadamApi_kuantiti,
          condition: createDto.alatPemadamApi_keadaan,
        },
        rakitKeselamatan: {
          status: createDto.rakitKeselamatan_status,
          quantity: createDto.rakitKeselamatan_kuantiti,
          condition: createDto.rakitKeselamatan_keadaan,
        },
        lampuPelayaran: {
          status: createDto.lampuPelayaran_status,
          quantity: createDto.lampuPelayaran_kuantiti,
          condition: createDto.lampuPelayaran_keadaan,
        },
        mtu: {
          status: createDto.mtu_status,
          quantity: createDto.mtu_kuantiti,
          condition: createDto.mtu_keadaan,
        },
        ais: {
          status: createDto.ais_status,
          quantity: createDto.ais_kuantiti,
          condition: createDto.ais_keadaan,
        },
      },

      // Fishing equipment
      fishingEquipment: {
        GPS: createDto.GPS,
        echoSounder: createDto.echoSounder,
        radar: createDto.radar,
        satNavigation: createDto.satNavigation,
        sonar: createDto.sonar,
        fishFinder: createDto.fishFinder,
        radioWireless: createDto.radioWireless,
        ATUR: createDto.ATUR,
        netHouler: createDto.netHouler,
        powerBlock: createDto.powerBlock,
        netDrum: createDto.netDrum,
        RSW: createDto.RSW,
        CCTV: createDto.CCTV,
      },

      // Equipment details
      equipment: [
        {
          nama: createDto.peralatan_utama,
          jenisPeralatan: 'Utama',
          panjangMeter: createDto.sizeMataPukat?.toString() || '',
        },
        {
          nama: createDto.peralatan_tambahan,
          jenisPeralatan: 'Tambahan',
          panjangMeter: '',
        },
        {
          nama: createDto.peralatan_dijumpai,
          jenisPeralatan: 'Dijumpai',
          panjangMeter: '',
        },
      ],

      // Vessel condition
      vesselCondition: {
        keadaanSemasa: createDto.keadaanVeselSemasa,
        vesel: createDto.veselAsal ? 'Asal' : 'Bukan Asal',
        jenisKulit: createDto.jenisKulitVesel,
        veselBaharu: createDto.veselBaru,
      },

      // PEV information
      pev: {
        isNoPEV: createDto.isNoPEV,
        noPEV: createDto.noPEV,
      },

      // Officer certification
      certification: {
        diSokong: createDto.permohonan_diSokong,
        tarikhPemeriksaan: createDto.permohonan_tarikhPemeriksaan,
        images: {
          tandaTanganPembantuImg: uploadedFiles['tandaTanganPembantuImg'] || createDto.tandaTanganPembantuImg,
          tandatanganPegawaiImg: uploadedFiles['tandatanganPegawaiImg'] || createDto.tandatanganPegawaiImg,
        },
      },

      // Owner certification
      ownerCertification: {
        jenisPermohonan: createDto.jenisPermohonan,
        tarikhPemeriksaan: createDto.perakuanPemilik_tarikhPemeriksaan,
        images: {
          tandaTanganEmpunyaVeselImg: uploadedFiles['tandaTanganEmpunyaVeselImg'] || createDto.tandaTanganEmpunyaVeselImg,
        },
      },

      // Image paths
      images: {
        veselKeseluruhanImg: uploadedFiles['veselKeseluruhanImg'] || createDto.veselKeseluruhanImg,
        veselKiriImg: uploadedFiles['veselKiriImg'] || '',
        veselKananImg: uploadedFiles['veselKananImg'] || '',
        veselHadapanImg: uploadedFiles['veselHadapanImg'] || '',
        veselBelakangImg: uploadedFiles['veselBelakangImg'] || '',
      },
    };
  }

  /**
   * Create main inspection record
   */
  private async createMainInspection(transformedData: any): Promise<DaratVeselLpiFormEntity> {
    const entity = this.mainInspectionRepo.create({
      vessel_id: transformedData.vesselId,
      application_id: transformedData.applicationId,
      user_id: transformedData.userId,
      inspected_by: transformedData.createdBy,
      vessel_registration_number: transformedData.noVesel,
      inspection_date: new Date(transformedData.tarikhPemeriksaan),
      valid_date: new Date(transformedData.ownerCertification.tarikhPemeriksaan),
      inspection_location: transformedData.rumahKemudi.kodZon,
      is_support: transformedData.certification.diSokong ? 1 : 0,
      inspection_summary: transformedData.equipment.length > 0 ? transformedData.equipment[0].jenisPeralatan : '',
      vessel_condition: transformedData.vesselCondition.keadaanSemasa,
      vessel_origin: transformedData.vesselCondition.vesel,
      hull_type: transformedData.vesselCondition.jenisKulit,
      drilled: transformedData.vesselRegistration.noPendaftaranVesel.diTebuk ? 1 : 0,
      brightly_painted: transformedData.vesselRegistration.noPendaftaranVesel.diCat ? 1 : 0,
      vessel_registration_remarks: transformedData.vesselRegistration.tinPlate.number,
      length: transformedData.dimensions.panjang.semasaDiperiksa,
      width: transformedData.dimensions.lebar.semasaDiperiksa,
      depth: transformedData.dimensions.kedalaman.semasaDiperiksa,
      engine_model: transformedData.engine.semasaDiperiksa.model,
      engine_brand: transformedData.engine.semasaDiperiksa.jenama,
      horsepower: transformedData.engine.semasaDiperiksa.kuasaKuda,
      engine_number: transformedData.engine.semasaDiperiksa.noEnjin,
      safety_jacket_status: transformedData.safetyEquipment.pelampungKeselamatan.status === 'Ada' ? 1 : 0,
      safety_jacket_quantity: parseInt(transformedData.safetyEquipment.pelampungKeselamatan.quantity) || 0,
      safety_jacket_condition: transformedData.safetyEquipment.pelampungKeselamatan.condition,
      vessel_image_path: transformedData.images.veselKeseluruhanImg,
      engine_image_path: transformedData.engine.images.enjinImg,
      engine_number_image_path: transformedData.engine.images.noEnjinImg,
      safety_jacket_image_path: transformedData.safetyEquipment.mtu.status ? transformedData.images.veselKiriImg : '',
      inspector_owner_image_path: transformedData.certification.images.tandatanganPegawaiImg,
      overall_image_path: transformedData.ownerCertification.images.tandaTanganEmpunyaVeselImg,
      attendance_form_path: transformedData.certification.images.tandaTanganPembantuImg,
      vessel_roof: transformedData.vesselRegistration.noPendaftaranVesel.diBumbung ? 1 : 0,
      width_marker_nail: transformedData.vesselRegistration.pakuPenandaLebar ? 1 : 0,
      is_no_pev: transformedData.pev.isNoPEV ? 1 : 0,
      no_pev: transformedData.pev.noPEV,
      is_approved: 0,
      is_active: 1,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    try {
      return await this.mainInspectionRepo.save(entity);
    } catch (error) {
      this.handleRepositoryError(error);
    }
  }

  /**
   * Create all related records for the inspection
   */
  private async createRelatedRecords(transformedData: any, inspectionId: string): Promise<void> {
    // Create application log
    await this.createApplicationLog(transformedData);

    // Create inspection equipment records
    await this.createInspectionEquipmentRecords(transformedData, inspectionId);

    // Create user equipment records
    await this.createUserEquipmentRecords(transformedData);

    // Create temporary pin
    await this.createTemporaryPin(transformedData);

    // Create vessel engine records
    const vesselEngineHistories = await this.createVesselEngineHistories(transformedData);

    // Create vessel engine records
    const vesselEngine = await this.createVesselEngine(transformedData);

    // Create vessel hull records
    const vesselHull = await this.createVesselHull(transformedData);

    // Create vessel history records
    await this.createVesselHistoryRecords(transformedData, vesselEngine?.id, vesselHull?.id);
  }

  /**
   * Create application log entry
   */
  private async createApplicationLog(transformedData: any): Promise<void> {
    const log = this.applicationLogRepo.create({
      application_id: transformedData.applicationId,
      remarks: `LPI Form inspection completed for vessel ${transformedData.noVesel}`,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      is_active: 1,
      created_at: new Date(),
    });

    await this.applicationLogRepo.save(log);
  }

  /**
   * Create inspection equipment records
   */
  private async createInspectionEquipmentRecords(transformedData: any, inspectionId: string): Promise<void> {
    // Create main equipment records
    for (const equipment of transformedData.equipment) {
      if (equipment.nama) {
        const inspectionEquipment = this.inspectionEquipmentRepo.create({
          application_id: transformedData.applicationId,
          user_id: transformedData.userId,
          inspection_id: inspectionId,
          name: equipment.nama,
          type: equipment.jenisPeralatan,
          quantity: 1,
          condition: 'Ada',
          is_approved: 1,
          is_active: 1,
          created_by: transformedData.createdBy,
          updated_by: transformedData.updatedBy,
          created_at: new Date(),
        });

        await this.inspectionEquipmentRepo.save(inspectionEquipment);
      }
    }

    // Create safety equipment records
    await this.createSafetyEquipmentRecords(transformedData, inspectionId);

    // Create fishing equipment records
    await this.createFishingEquipmentRecords(transformedData, inspectionId);
  }

  /**
   * Create safety equipment inspection records
   */
  private async createSafetyEquipmentRecords(transformedData: any, inspectionId: string): Promise<void> {
    const safetyEquipments = [
      { name: 'Boya Keselamatan', data: transformedData.safetyEquipment.boyaKeselamatan },
      { name: 'Alat Pemadam Api', data: transformedData.safetyEquipment.alatPemadamApi },
      { name: 'Rakit Keselamatan', data: transformedData.safetyEquipment.rakitKeselamatan },
      { name: 'Radio Wireless', data: transformedData.safetyEquipment.lampuPelayaran },
      { name: 'MTU', data: transformedData.safetyEquipment.mtu },
      { name: 'AIS', data: transformedData.safetyEquipment.ais },
    ];

    for (const safetyEq of safetyEquipments) {
      if (safetyEq.data?.status) {
        const inspectionEquipment = this.inspectionEquipmentRepo.create({
          application_id: transformedData.applicationId,
          user_id: transformedData.userId,
          inspection_id: inspectionId,
          name: safetyEq.name,
          type: 'Safety Equipment',
          quantity: parseInt(safetyEq.data.quantity) || 1,
          condition: safetyEq.data.condition,
          is_approved: 1,
          is_active: 1,
          created_by: transformedData.createdBy,
          updated_by: transformedData.updatedBy,
          created_at: new Date(),
        });

        await this.inspectionEquipmentRepo.save(inspectionEquipment);
      }
    }
  }

  /**
   * Create fishing equipment inspection records
   */
  private async createFishingEquipmentRecords(transformedData: any, inspectionId: string): Promise<void> {
    const vesselEquipments = [
      { name: 'GPS', value: transformedData.fishingEquipment.GPS },
      { name: 'Echo Sounder', value: transformedData.fishingEquipment.echoSounder },
      { name: 'Radar', value: transformedData.fishingEquipment.radar },
      { name: 'Satellite Navigation', value: transformedData.fishingEquipment.satNavigation },
      { name: 'Sonar', value: transformedData.fishingEquipment.sonar },
      { name: 'Fish Finder', value: transformedData.fishingEquipment.fishFinder },
      { name: 'Radio Wireless', value: transformedData.fishingEquipment.radioWireless },
      { name: 'ATUR', value: transformedData.fishingEquipment.ATUR },
      { name: 'Net Houler', value: transformedData.fishingEquipment.netHouler },
      { name: 'Power Block', value: transformedData.fishingEquipment.powerBlock },
      { name: 'Net Drum', value: transformedData.fishingEquipment.netDrum },
      { name: 'RSW', value: transformedData.fishingEquipment.RSW },
      { name: 'CCTV', value: transformedData.fishingEquipment.CCTV },
    ];

    for (const vesselEq of vesselEquipments) {
      const inspectionEquipment = this.inspectionEquipmentRepo.create({
        application_id: transformedData.applicationId,
        user_id: transformedData.userId,
        inspection_id: inspectionId,
        name: vesselEq.name,
        type: 'Equipment',
        quantity: 1,
        condition: vesselEq.value ? 'Ada' : 'Tiada',
        is_approved: 1,
        is_active: 1,
        created_by: transformedData.createdBy,
        updated_by: transformedData.updatedBy,
        created_at: new Date(),
      });

      await this.inspectionEquipmentRepo.save(inspectionEquipment);
    }
  }

  /**
   * Create user equipment records
   */
  private async createUserEquipmentRecords(transformedData: any): Promise<void> {
    for (const equipment of transformedData.equipment) {
      if (equipment.nama) {
        const userEquipment = this.userEquipmentRepo.create({
          application_id: transformedData.applicationId,
          user_id: transformedData.userId,
          name: equipment.nama,
          type: equipment.jenisPeralatan,
          quantity: 1,
          condition: 'Ada',
          is_approved: 1,
          is_active: 1,
          created_by: transformedData.createdBy,
          updated_by: transformedData.updatedBy,
          created_at: new Date(),
        });

        await this.userEquipmentRepo.save(userEquipment);
      }
    }
  }

  /**
   * Create temporary pin
   */
  private async createTemporaryPin(transformedData: any): Promise<DaratTemporaryPinEntity> {
    const temporaryPin = this.temporaryPinRepo.create({
      application_id: transformedData.applicationId,
      pin_number: `LPI-${Date.now()}`,
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      is_active: 1,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    return await this.temporaryPinRepo.save(temporaryPin);
  }

  /**
   * Create vessel engine record
   */
  private async createVesselEngineHistories(transformedData: any): Promise<DaratVesselEngineHistorieEntity> {
    // Create engine history (commented out due to missing repository)
    const vesselEngineHistory = this.vesselEngineHistoryRepo.create({
      vessel_engine_id: transformedData.savedVesselEngine.id,
      engine_brand: transformedData.engine.dalamLesen.jenama,
      engine_model: transformedData.engine.dalamLesen.model,
      horsepower: transformedData.engine.dalamLesen.kuasaKuda,
      engine_number: transformedData.engine.dalamLesen.noEnjin,
      is_active: 1,
      is_approved: 1,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    const savedVesselEngineHistories =  await this.vesselEngineHistoryRepo.save(vesselEngineHistory);

    return savedVesselEngineHistories;
  }

  /**
   * Create vessel engine record
   */
  private async createVesselEngine(transformedData: any): Promise<DaratVesselEngineEntity> {
    const vesselEngine = this.vesselEngineRepo.create({
      vessel_id: transformedData.vesselId,
      user_id: transformedData.userId,
      model: transformedData.engine.semasaDiperiksa.model,
      brand: transformedData.engine.semasaDiperiksa.jenama,
      horsepower: transformedData.engine.semasaDiperiksa.kuasaKuda,
      engine_number: transformedData.engine.semasaDiperiksa.noEnjin,
      engine_image_path: transformedData.engine.images.enjinImg,
      engine_number_image_path: transformedData.engine.images.noEnjinImg,
      is_active: 1,
      is_approved: 1,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    const savedVesselEngine = await this.vesselEngineRepo.save(vesselEngine);
    return savedVesselEngine;
  }

  /**
   * Create vessel hull record
   */
  private async createVesselHull(transformedData: any): Promise<DaratVesselHullEntity> {
    const vesselHull = this.vesselHullRepo.create({
      vessel_id: transformedData.vesselId,
      user_id: transformedData.userId,
      hull_type: transformedData.vesselCondition.jenisKulit,
      drilled: transformedData.vesselRegistration.noPendaftaranVesel.diTebuk ? 1 : 0,
      brightly_painted: transformedData.vesselRegistration.noPendaftaranVesel.diCat ? 1 : 0,
      vessel_registration_remarks: transformedData.vesselRegistration.tinPlate.number,
      length: transformedData.dimensions.panjang.semasaDiperiksa,
      width: transformedData.dimensions.lebar.semasaDiperiksa,
      depth: transformedData.dimensions.kedalaman.semasaDiperiksa,
      overall_image_path: transformedData.images.veselKeseluruhanImg,
      is_active: 1,
      is_approved: 1,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    const savedVesselHull = await this.vesselHullRepo.save(vesselHull);

    // Create hull history
    const vesselHullHistory = this.vesselHullHistoryRepo.create({
      vessel_hull_id: savedVesselHull.id,
      hull_type: transformedData.vesselCondition.jenisKulit,
      drilled: transformedData.vesselRegistration.noPendaftaranVesel.diTebuk ? 1 : 0,
      brightly_painted: transformedData.vesselRegistration.noPendaftaranVesel.diCat ? 1 : 0,
      vessel_registration_remarks: transformedData.vesselRegistration.tinPlate.number,
      length: transformedData.dimensions.panjang.dalamLesen,
      width: transformedData.dimensions.lebar.dalamLesen,
      depth: transformedData.dimensions.kedalaman.dalamLesen,
      overall_image_path: transformedData.images.veselKeseluruhanImg,
      right_side_image_path: transformedData.images.veselKananImg,
      is_active: 1,
      is_approved: 1,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    await this.vesselHullHistoryRepo.save(vesselHullHistory);

    return savedVesselHull;
  }

  /**
   * Create vessel history records
   */
  private async createVesselHistoryRecords(transformedData: any, vesselEngineId?: string, vesselHullId?: string): Promise<void> {
    const vesselHistory = this.vesselHistoryRepo.create({
      vessel_id: transformedData.vesselId,
      vessel_condition: transformedData.vesselCondition.keadaanSemasa,
      vessel_registration_number: transformedData.noVesel,
      transportation: transformedData.vesselCondition.vesel,
      is_approved: 1,
      is_active: 1,
      safety_jacket_status: transformedData.safetyEquipment.pelampungKeselamatan.status === 'Ada' ? 1 : 0,
      safety_jacket_quantity: parseInt(transformedData.safetyEquipment.pelampungKeselamatan.quantity) || 0,
      safety_jacket_condition: transformedData.safetyEquipment.pelampungKeselamatan.condition,
      safety_jacket_image_path: transformedData.images.veselKiriImg,
      created_by: transformedData.createdBy,
      updated_by: transformedData.updatedBy,
      created_at: new Date(),
    });

    await this.vesselHistoryRepo.save(vesselHistory);
  }

  /**
   * Build enriched response with related data
   */
  private async buildEnrichedResponse(transformedData: any, mainInspection: DaratVeselLpiFormEntity): Promise<any> {
    // Fetch related data for response
    const application = await this.applicationRepo.findOne({
      where: { id: transformedData.applicationId },
      relations: ['status']
    });

    const vessel = await this.vesselRepo.findOne({
      where: { id: transformedData.vesselId }
    });

    // Get temporary pin for response
    const temporaryPin = await this.temporaryPinRepo.findOne({
      where: { application_id: transformedData.applicationId },
      order: { created_at: 'DESC' }
    });

    return {
      ...transformedData,
      inspectionId: mainInspection.id,
      application,
      vessel,
      temporaryPin,
    };
  }

  /**
   * Handle repository errors with appropriate exceptions
   */
  private handleRepositoryError(error: any): never {
    if (error instanceof QueryFailedError) {
      if (error.driverError?.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Duplicate inspection record');
      } else if (error.driverError?.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new BadRequestException('Foreign key constraint violation');
      }
    }
    throw error;
  }
}