import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { CreateDaratVeselLpiFormDto } from './dto/create-darat-vesel-lpi-form.dto';
import { ImageUploadService } from './image-upload.service';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratApplicationApprovedEntity } from '../darat-application-approveds/darat-application-approveds.entity';
import { DaratApplicationLogEntity } from '../darat-application-logs/darat-application-logs.entity';
import { DaratApplicationTempEntity } from '../darat-application-temps/darat-application-temps.entity';
import { DaratInspectionEquipmentEntity } from '../darat-inspection-equipments/darat-inspection-equipments.entity';
import { DaratItemFoundEntity } from '../darat-item-founds/darat-item-founds.entity';
import { DaratPaymentReceiptEntity } from '../darat-payment-receipts/darat-payment-receipts.entity';
import { DaratTemporaryPinEntity } from '../darat-temporary-pins/darat-temporary-pins.entity';
import { DaratUserEquipmentEntity } from '../darat-user-equipments/darat-user-equipments.entity';
import { DaratVesselDisposalEntity } from '../darat-vessel-disposals/darat-vessel-disposals.entity';
import { DaratVesselEngineEntity } from '../darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratVesselHistorieEntity } from '../darat-vessel-histories/darat-vessel-histories.entity';
import { DaratVesselHullHistorieEntity } from '../darat-vessel-hull-histories/darat-vessel-hull-histories.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DaratVeselLpiFormService {
  constructor(
    @InjectRepository(DaratVeselLpiFormEntity)
    private daratVeselLpiFormRepository: Repository<DaratVeselLpiFormEntity>,
    @InjectRepository(DaratApplicationEntity)
    private daratApplicationRepository: Repository<DaratApplicationEntity>,
    @InjectRepository(DaratVesselEntity)
    private daratVesselRepository: Repository<DaratVesselEntity>,
    @InjectRepository(DaratApplicationApprovedEntity)
    private daratApplicationApprovedRepository: Repository<DaratApplicationApprovedEntity>,
    @InjectRepository(DaratApplicationLogEntity)
    private daratApplicationLogRepository: Repository<DaratApplicationLogEntity>,
    @InjectRepository(DaratApplicationTempEntity)
    private daratApplicationTempRepository: Repository<DaratApplicationTempEntity>,
    @InjectRepository(DaratInspectionEquipmentEntity)
    private daratInspectionEquipmentRepository: Repository<DaratInspectionEquipmentEntity>,
    @InjectRepository(DaratItemFoundEntity)
    private daratItemFoundRepository: Repository<DaratItemFoundEntity>,
    @InjectRepository(DaratPaymentReceiptEntity)
    private daratPaymentReceiptRepository: Repository<DaratPaymentReceiptEntity>,
    @InjectRepository(DaratTemporaryPinEntity)
    private daratTemporaryPinRepository: Repository<DaratTemporaryPinEntity>,
    @InjectRepository(DaratUserEquipmentEntity)
    private daratUserEquipmentRepository: Repository<DaratUserEquipmentEntity>,
    @InjectRepository(DaratVesselDisposalEntity)
    private daratVesselDisposalRepository: Repository<DaratVesselDisposalEntity>,
    @InjectRepository(DaratVesselEngineEntity)
    private daratVesselEngineRepository: Repository<DaratVesselEngineEntity>,
    @InjectRepository(DaratVesselHullEntity)
    private daratVesselHullRepository: Repository<DaratVesselHullEntity>,
    @InjectRepository(DaratVesselHistorieEntity)
    private daratVesselHistorieRepository: Repository<DaratVesselHistorieEntity>,
    @InjectRepository(DaratVesselHullHistorieEntity)
    private daratVesselHullHistorieRepository: Repository<DaratVesselHullHistorieEntity>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  findAll(): Promise<DaratVeselLpiFormEntity[]> {
    return this.daratVeselLpiFormRepository.find();
  }

  async findOne(id: string): Promise<DaratVeselLpiFormEntity> {
    const entity = await this.daratVeselLpiFormRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  async create(createDto: CreateDaratVeselLpiFormDto): Promise<DaratVeselLpiFormEntity> {
    const entity = this.daratVeselLpiFormRepository.create(createDto as any);
    const savedEntity = await this.daratVeselLpiFormRepository.save(entity);
    return Array.isArray(savedEntity) ? savedEntity[0] : savedEntity;
  }

  async createWithFiles(createDto: CreateDaratVeselLpiFormDto, files: { [key: string]: Express.Multer.File[] }): Promise<any> {
    console.log('Received DTO:', createDto);
    console.log('Received files:', files);

    // Flatten the files object into an array for upload
    const allFiles: Express.Multer.File[] = [];
    Object.values(files).forEach(fileArray => {
      if (fileArray) allFiles.push(...fileArray);
    });

    console.log('Flattened files:', allFiles.map(f => ({ fieldname: f.fieldname, originalname: f.originalname, size: f.size })));

    if (!createDto.applicationId) {
      throw new Error('Application ID is required for image upload');
    }

    // Upload images using the service
    const uploadedFiles = await this.imageUploadService.uploadImages(allFiles, createDto.applicationId);
    console.log('Uploaded files:', uploadedFiles);

    // Construct nested objects from flat DTO fields
    const noPendaftaranVesel = {
      diTebuk: createDto.noVesel_ditebuk,
      diCat: createDto.noVesel_dicat,
    };

    const tandaPenukulBesi = {
      tandaBahagianLaluan: createDto.tandaBahagianLaluan,
      hurufKodTanda: createDto.hurufKodTanda,
    };

    const tinPlate = {
      tinPlate: createDto.tinPlate,
      noTinPlate: createDto.noTinPlate,
    };

    const rumahKemudi = {
      diCat: createDto.rumahKemudi_ditebuk, // Assuming d i t e b u k maps to diCat
      kodZon: createDto.kodZon,
      diBumbung: createDto.rumahKemudi_diBumbung,
    };

    const pukatTundaBerlesen = {
      jalurPutih: createDto.jalurPutih,
      diCat: createDto.pukatTundaBerlesen_dicat,
    };

    const ukuranDimensiVesel = {
      panjangMeter: {
        dalamLesen: createDto.panjangMeter_dalamLesen,
        semasaDiperiksa: createDto.panjangMeter_semasaDiperiksa,
      },
      lebarMeter: {
        dalamLesen: createDto.lebarMeter_dalamLesen,
        semasaDiperiksa: createDto.lebarMeter_semasaDiperiksa,
      },
      kedalamanMeter: {
        dalamLesen: createDto.kedalamanMeter_dalamLesen,
        semasaDiperiksa: createDto.kedalamanMeter_semasaDiperiksa,
      },
      muatanGRT: {
        dalamLesen: createDto.muatanGRT_dalamLesen,
        semasaDiperiksa: createDto.muatanGRT_semasaDiperiksa,
      },
      image: {
        veselKeseluruhanImg: createDto.veselKeseluruhanImg,
      },
    };

    const enjin = {
      maklumatEnjin: {
        jenama: createDto.jenama_semasaDiperiksa,
        model: createDto.model_semasaDiperiksa,
        turbo: '', // Not in flat, set empty
        kuasaKuda: createDto.kuasaKuda_semasaDiperiksa,
        noEnjin: createDto.noEnjin_semasaDiperiksa,
        penandaVesel: '', // Not in flat, set empty
      },
      image: {
        enjinImg: createDto.enjinImg,
        noEnjinImg: createDto.noEnjinImg,
        penandaEnjinImg: createDto.penandaEnjinImg,
        turboImg: createDto.turboImg,
        generatorImg: createDto.generatorImg,
      },
    };

    const peralatanKeselamatan = {
      jaketKeselamatan: {
        status: createDto.pelampungKeselamatan_status,
        kuantiti: createDto.pelampungKeselamatan_kuantiti,
        keadaan: createDto.pelampungKeselamatan_keadaan,
      },
      boyaKeselamatan: {
        status: createDto.boyaKeselamatan_status,
        kuantiti: createDto.boyaKeselamatan_kuantiti,
        keadaan: createDto.boyaKeselamatan_keadaan,
      },
      alatPemadamApi: {
        status: createDto.alatPemadamApi_status,
        kuantiti: createDto.alatPemadamApi_kuantiti,
        keadaan: createDto.alatPemadamApi_keadaan,
      },
      rakitKeselamatan: {
        status: createDto.rakitKeselamatan_status,
        kuantiti: createDto.rakitKeselamatan_kuantiti,
        keadaan: createDto.rakitKeselamatan_keadaan,
      },
      radioWireless: {
        status: createDto.lampuPelayaran_status, // Assuming lampuPelayaran maps to radioWireless or adjust
        kuantiti: createDto.lampuPelayaran_kuantiti,
        keadaan: createDto.lampuPelayaran_keadaan,
      },
      image: {
        MTUImg: '', // Not in flat, set empty
        AISImg: '', // Not in flat, set empty
      },
    };

    const kelengkapanMenangkapIkan = {
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
      petakIkan: false, // Not in flat, set false
      RSW: createDto.RSW,
      CCTV: createDto.CCTV,
    };

    const peralatan = [
      {
        nama: createDto.peralatan_utama,
        jenisPeralatan: 'Utama',
        panjangMeter: createDto.sizeMataPukat.toString(),
        tarikDilesen: '',
        status: 'Ada',
      },
      {
        nama: createDto.peralatan_tambahan,
        jenisPeralatan: 'Tambahan',
        panjangMeter: '',
        tarikDilesen: '',
        status: 'Ada',
      },
      {
        nama: createDto.peralatan_dijumpai,
        jenisPeralatan: 'Dijumpai',
        panjangMeter: '',
        tarikDilesen: '',
        status: 'Ada',
      },
    ];

    const keadaanVesel = {
      keadaanSemasa: createDto.keadaanVeselSemasa,
      vesel: createDto.veselAsal ? 'Asal' : 'Bukan Asal',
      jenisKulit: createDto.jenisKulitVesel,
      veselBaharu: createDto.veselBaru,
    };

    const perakuanPegawai = {
      diSokong: createDto.permohonan_diSokong,
      tarikhPemeriksaan: createDto.permohonan_tarikhPemeriksaan,
      image: {
        tandaTanganPembantuImg: createDto.tandaTanganPembantuImg,
        tandatanganPegawaiImg: createDto.tandatanganPegawaiImg,
      },
    };

    const perakuanEmpunyaVesel = {
      jenisPermohonan: createDto.jenisPermohonan,
      tarikhPemeriksaan: createDto.perakuanPemilik_tarikhPemeriksaan,
      image: {
        tandaTanganEmpunyaVeselImg: createDto.tandaTanganEmpunyaVeselImg,
      },
    };

    // Map file paths to DTO fields
    const dtoWithPaths = {
      ...createDto,
      noPendaftaranVesel,
      tandaPenukulBesi,
      tinPlate,
      rumahKemudi,
      pukatTundaBerlesen,
      ukuranDimensiVesel: {
        ...ukuranDimensiVesel,
        image: {
          ...ukuranDimensiVesel.image,
          veselKiriImg: uploadedFiles['veselKiriImg'] || '',
          veselKananImg: uploadedFiles['veselKananImg'] || '',
          veselHadapanImg: uploadedFiles['veselHadapanImg'] || '',
          veselBelakangImg: uploadedFiles['veselBelakangImg'] || '',
          veselKeseluruhanImg: uploadedFiles['veselKeseluruhanImg'] || ukuranDimensiVesel.image.veselKeseluruhanImg,
        }
      },
      enjin: {
        ...enjin,
        image: {
          ...enjin.image,
          enjinImg: uploadedFiles['enjinImg'] || enjin.image.enjinImg,
          noEnjinImg: uploadedFiles['noEnjinImg'] || enjin.image.noEnjinImg,
          penandaEnjinImg: uploadedFiles['penandaEnjinImg'] || enjin.image.penandaEnjinImg,
          turboImg: uploadedFiles['turboImg'] || enjin.image.turboImg,
          generatorImg: uploadedFiles['generatorImg'] || enjin.image.generatorImg,
        }
      },
      peralatanKeselamatan: {
        ...peralatanKeselamatan,
        image: {
          MTUImg: uploadedFiles['MTUImg'] || '',
          AISImg: uploadedFiles['AISImg'] || '',
        }
      },
      kelengkapanMenangkapIkan,
      peralatan,
      keadaanVesel,
      perakuanPegawai: {
        ...perakuanPegawai,
        image: {
          ...perakuanPegawai.image,
          tandaTanganPembantuImg: uploadedFiles['tandaTanganPembantuImg'] || perakuanPegawai.image.tandaTanganPembantuImg,
          tandatanganPegawaiImg: uploadedFiles['tandatanganPegawaiImg'] || perakuanPegawai.image.tandatanganPegawaiImg,
        }
      },
      perakuanEmpunyaVesel: {
        ...perakuanEmpunyaVesel,
        image: {
          ...perakuanEmpunyaVesel.image,
          tandaTanganEmpunyaVeselImg: uploadedFiles['tandaTanganEmpunyaVeselImg'] || perakuanEmpunyaVesel.image.tandaTanganEmpunyaVeselImg,
        }
      },
      inspectedBy: createDto.createdBy,
      jenisPeralatanSemasa: peralatan.length > 0 ? peralatan[0].jenisPeralatan : '',
    };

    //TODO
    // Map unmapped fields to existing fields creatively
    const additionalRemarks = {
      tandaPenukulBesi: {
        tandaBahagianLaluan: dtoWithPaths.tandaPenukulBesi.tandaBahagianLaluan,
        hurufKodTanda: dtoWithPaths.tandaPenukulBesi.hurufKodTanda,
      },
      tinPlate: dtoWithPaths.tinPlate.tinPlate,
      pakuPenandaLebar: dtoWithPaths.pakuPenandaLebar,
      rumahKemudi: {
        diCat: dtoWithPaths.rumahKemudi.diCat,
        diBumbung: dtoWithPaths.rumahKemudi.diBumbung,
      },
      pukatTundaBerlesen: {
        jalurPutih: dtoWithPaths.pukatTundaBerlesen.jalurPutih,
        diCat: dtoWithPaths.pukatTundaBerlesen.diCat,
      },
      ukuranDimensiVesel: {
        // panjangMeterDalamLesen: dtoWithPaths.ukuranDimensiVesel.panjangMeter.dalamLesen,
        // lebarMeterDalamLesen: dtoWithPaths.ukuranDimensiVesel.lebarMeter.dalamLesen,
        // kedalamanMeterDalamLesen: dtoWithPaths.ukuranDimensiVesel.kedalamanMeter.dalamLesen,
        muatanGRTDalamLesen: dtoWithPaths.ukuranDimensiVesel.muatanGRT.dalamLesen,
        muatanGRTSemasaDiperiksa: dtoWithPaths.ukuranDimensiVesel.muatanGRT.semasaDiperiksa,
        images: {
          veselKiriImg: dtoWithPaths.ukuranDimensiVesel.image.veselKiriImg,
          veselKananImg: dtoWithPaths.ukuranDimensiVesel.image.veselKananImg,
          veselHadapanImg: dtoWithPaths.ukuranDimensiVesel.image.veselHadapanImg,
          veselBelakangImg: dtoWithPaths.ukuranDimensiVesel.image.veselBelakangImg,
        },
      },
      enjin: {
        turbo: dtoWithPaths.enjin.maklumatEnjin.turbo,
        penandaVesel: dtoWithPaths.enjin.maklumatEnjin.penandaVesel,
        images: {
          penandaEnjinImg: dtoWithPaths.enjin.image.penandaEnjinImg,
          turboImg: dtoWithPaths.enjin.image.turboImg,
          generatorImg: dtoWithPaths.enjin.image.generatorImg,
        },
      },
      peralatanKeselamatan: {
        // boyaKeselamatan: dtoWithPaths.peralatanKeselamatan.boyaKeselamatan,
        // alatPemadamApi: dtoWithPaths.peralatanKeselamatan.alatPemadamApi,
        // rakitKeselamatan: dtoWithPaths.peralatanKeselamatan.rakitKeselamatan,
        // radioWireless: dtoWithPaths.peralatanKeselamatan.radioWireless,
        AISImg: dtoWithPaths.peralatanKeselamatan.image.AISImg,
      },
      kelengkapanMenangkapIkan: dtoWithPaths.kelengkapanMenangkapIkan,
      keadaanVesel: {
        veselBaharu: dtoWithPaths.keadaanVesel.veselBaharu,
      },
      perakuanPegawai: {
        tarikhPemeriksaan: dtoWithPaths.perakuanPegawai.tarikhPemeriksaan,
      },
      perakuanEmpunyaVesel: {
        jenisPermohonan: dtoWithPaths.perakuanEmpunyaVesel.jenisPermohonan,
      },
    };

    // Save the main inspection entity first to get the ID
    const entity = this.daratVeselLpiFormRepository.create({
      vessel_id: dtoWithPaths.vesselId,
      application_id: dtoWithPaths.applicationId,
      user_id: dtoWithPaths.userId,
      inspected_by: dtoWithPaths.inspectedBy,
      vessel_registration_number: dtoWithPaths.noVesel,
      inspection_date: new Date(dtoWithPaths.tarikhPemeriksaan),
      valid_date: new Date(dtoWithPaths.perakuanEmpunyaVesel.tarikhPemeriksaan),
      inspection_location: dtoWithPaths.rumahKemudi.kodZon,
      is_support: dtoWithPaths.perakuanPegawai.diSokong ? 1 : 0,
      inspection_summary: dtoWithPaths.jenisPeralatanSemasa,
      vessel_condition: dtoWithPaths.keadaanVesel.keadaanSemasa,
      vessel_origin: dtoWithPaths.keadaanVesel.vesel,
      hull_type: dtoWithPaths.keadaanVesel.jenisKulit,
      drilled: dtoWithPaths.noPendaftaranVesel.diTebuk ? 1 : 0,
      brightly_painted: dtoWithPaths.noPendaftaranVesel.diCat ? 1 : 0,
      vessel_registration_remarks: dtoWithPaths.tinPlate.noTinPlate,
      length: dtoWithPaths.ukuranDimensiVesel.panjangMeter.semasaDiperiksa,
      width: dtoWithPaths.ukuranDimensiVesel.lebarMeter.semasaDiperiksa,
      depth: dtoWithPaths.ukuranDimensiVesel.kedalamanMeter.semasaDiperiksa,
      engine_model: dtoWithPaths.enjin.maklumatEnjin.model,
      engine_brand: dtoWithPaths.enjin.maklumatEnjin.jenama,
      horsepower: dtoWithPaths.enjin.maklumatEnjin.kuasaKuda,
      engine_number: dtoWithPaths.enjin.maklumatEnjin.noEnjin,
      safety_jacket_status: dtoWithPaths.peralatanKeselamatan.jaketKeselamatan.status === 'Ada' ? 1 : 0,
      safety_jacket_quantity: parseInt(dtoWithPaths.peralatanKeselamatan.jaketKeselamatan.kuantiti),
      safety_jacket_condition: dtoWithPaths.peralatanKeselamatan.jaketKeselamatan.keadaan,
      vessel_image_path: dtoWithPaths.ukuranDimensiVesel.image.veselKeseluruhanImg,
      engine_image_path: dtoWithPaths.enjin.image.enjinImg,
      engine_number_image_path: dtoWithPaths.enjin.image.noEnjinImg,
      safety_jacket_image_path: dtoWithPaths.peralatanKeselamatan.image.MTUImg,
      inspector_owner_image_path: dtoWithPaths.perakuanPegawai.image.tandatanganPegawaiImg,
      overall_image_path: dtoWithPaths.perakuanEmpunyaVesel.image.tandaTanganEmpunyaVeselImg,
      attendance_form_path: dtoWithPaths.perakuanPegawai.image.tandaTanganPembantuImg,
      is_approved: 0,
      is_active: 1,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      created_at: new Date(),
    });

    let savedEntity;
    try {
      savedEntity = await this.daratVeselLpiFormRepository.save(entity);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.driverError?.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Duplicate inspection record');
        } else if (error.driverError?.code === 'ER_NO_REFERENCED_ROW_2') {
          throw new BadRequestException('Foreign key constraint violation');
        }
      }
      throw error;
    }

    // Now save related data to other repositories that join with darat_applications
    // Save application log
    const applicationLog = this.daratApplicationLogRepository.create({
      application_id: dtoWithPaths.applicationId,
      remarks: `LPI Form inspection completed for vessel ${dtoWithPaths.noVesel}`,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      is_active: 1,
      created_at: new Date(),
    });
    await this.daratApplicationLogRepository.save(applicationLog);

    // Save inspection equipment data
    if (dtoWithPaths.peralatan && dtoWithPaths.peralatan.length > 0) {
      for (const equipment of dtoWithPaths.peralatan) {
        const inspectionEquipment = this.daratInspectionEquipmentRepository.create({
          application_id: dtoWithPaths.applicationId,
          user_id: dtoWithPaths.userId,
          inspection_id: savedEntity.id, // Link to the inspection
          name: equipment.nama,
          type: equipment.jenisPeralatan,
          quantity: 1, // Default quantity
          condition: equipment.status,
          is_approved: 1,
          is_active: 1,
          created_by: dtoWithPaths.createdBy,
          updated_by: dtoWithPaths.updatedBy,
          created_at: new Date(),
        });
        await this.daratInspectionEquipmentRepository.save(inspectionEquipment);
      }
    }

    // Save safety equipment data to darat_inspection_equipments
    const safetyEquipments = [
      { name: 'Boya Keselamatan', type: 'Safety Equipment', data: dtoWithPaths.peralatanKeselamatan.boyaKeselamatan },
      { name: 'Alat Pemadam Api', type: 'Safety Equipment', data: dtoWithPaths.peralatanKeselamatan.alatPemadamApi },
      { name: 'Rakit Keselamatan', type: 'Safety Equipment', data: dtoWithPaths.peralatanKeselamatan.rakitKeselamatan },
      { name: 'Radio Wireless', type: 'Safety Equipment', data: dtoWithPaths.peralatanKeselamatan.radioWireless },
    ];

    for (const safetyEq of safetyEquipments) {
      if (safetyEq.data && safetyEq.data.status) {
        const inspectionEquipment = this.daratInspectionEquipmentRepository.create({
          application_id: dtoWithPaths.applicationId,
          user_id: dtoWithPaths.userId,
          inspection_id: savedEntity.id, // Link to the inspection
          name: safetyEq.name,
          type: safetyEq.type,
          quantity: parseInt(safetyEq.data.kuantiti) || 1,
          condition: safetyEq.data.keadaan,
          is_approved: 1,
          is_active: 1,
          created_by: dtoWithPaths.createdBy,
          updated_by: dtoWithPaths.updatedBy,
          created_at: new Date(),
        });
        await this.daratInspectionEquipmentRepository.save(inspectionEquipment);
      }
    }

    // Save user equipment data
    if (dtoWithPaths.peralatan && dtoWithPaths.peralatan.length > 0) {
      for (const equipment of dtoWithPaths.peralatan) {
        const userEquipment = this.daratUserEquipmentRepository.create({
          application_id: dtoWithPaths.applicationId,
          user_id: dtoWithPaths.userId,
          name: equipment.nama,
          type: equipment.jenisPeralatan,
          quantity: 1, // Default quantity
          condition: equipment.status,
          is_approved: 1,
          is_active: 1,
          created_by: dtoWithPaths.createdBy,
          updated_by: dtoWithPaths.updatedBy,
          created_at: new Date(),
        });
        await this.daratUserEquipmentRepository.save(userEquipment);
      }
    }

    // Save temporary pin if needed
    const temporaryPin = this.daratTemporaryPinRepository.create({
      application_id: dtoWithPaths.applicationId,
      pin_number: `LPI-${Date.now()}`, // Generate a temporary pin
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      is_active: 1,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      created_at: new Date(),
    });
    await this.daratTemporaryPinRepository.save(temporaryPin);

    // Save vessel engine data
    const vesselEngine = this.daratVesselEngineRepository.create({
      vessel_id: dtoWithPaths.vesselId,
      user_id: dtoWithPaths.userId,
      model: dtoWithPaths.enjin.maklumatEnjin.model,
      brand: dtoWithPaths.enjin.maklumatEnjin.jenama,
      horsepower: dtoWithPaths.enjin.maklumatEnjin.kuasaKuda,
      engine_number: dtoWithPaths.enjin.maklumatEnjin.noEnjin,
      engine_image_path: dtoWithPaths.enjin.image.enjinImg,
      engine_number_image_path: dtoWithPaths.enjin.image.noEnjinImg,
      is_active: 1,
      is_approved: 1,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      created_at: new Date(),
    });
    try {
      await this.daratVesselEngineRepository.save(vesselEngine);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.driverError?.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Duplicate vessel engine record for this vessel');
        } else if (error.driverError?.code === 'ER_NO_REFERENCED_ROW_2') {
          throw new BadRequestException('Foreign key constraint violation for vessel engine');
        }
      }
      throw error;
    }

    // Save vessel hull data
    const vesselHull = this.daratVesselHullRepository.create({
      vessel_id: dtoWithPaths.vesselId,
      user_id: dtoWithPaths.userId,
      hull_type: dtoWithPaths.keadaanVesel.jenisKulit,
      drilled: dtoWithPaths.noPendaftaranVesel.diTebuk ? 1 : 0,
      brightly_painted: dtoWithPaths.noPendaftaranVesel.diCat ? 1 : 0,
      vessel_registration_remarks: dtoWithPaths.tinPlate.noTinPlate,
      length: dtoWithPaths.ukuranDimensiVesel.panjangMeter.semasaDiperiksa,
      width: dtoWithPaths.ukuranDimensiVesel.lebarMeter.semasaDiperiksa,
      depth: dtoWithPaths.ukuranDimensiVesel.kedalamanMeter.semasaDiperiksa,
      overall_image_path: dtoWithPaths.ukuranDimensiVesel.image.veselKeseluruhanImg,
      is_active: 1,
      is_approved: 1,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      created_at: new Date(),
    });
    const savedVesselHull = await this.daratVesselHullRepository.save(vesselHull);

    // Save vessel hull history data
    const vesselHullHistory = this.daratVesselHullHistorieRepository.create({
      vessel_hull_id: savedVesselHull.id,
      hull_type: dtoWithPaths.keadaanVesel.jenisKulit,
      drilled: dtoWithPaths.noPendaftaranVesel.diTebuk ? 1 : 0,
      brightly_painted: dtoWithPaths.noPendaftaranVesel.diCat ? 1 : 0,
      vessel_registration_remarks: dtoWithPaths.tinPlate.noTinPlate,
      length: dtoWithPaths.ukuranDimensiVesel.panjangMeter.dalamLesen,
      width: dtoWithPaths.ukuranDimensiVesel.lebarMeter.dalamLesen,
      depth: dtoWithPaths.ukuranDimensiVesel.kedalamanMeter.dalamLesen,
      overall_image_path: dtoWithPaths.ukuranDimensiVesel.image.veselKeseluruhanImg,
      right_side_image_path: dtoWithPaths.ukuranDimensiVesel.image.veselKananImg,
      is_active: 1,
      is_approved: 1,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      created_at: new Date(),
    });
    await this.daratVesselHullHistorieRepository.save(vesselHullHistory);

    // Save vessel history data
    const vesselHistory = this.daratVesselHistorieRepository.create({
      vessel_id: dtoWithPaths.vesselId,
      vessel_condition: dtoWithPaths.keadaanVesel.keadaanSemasa,
      vessel_registration_number: dtoWithPaths.noVesel,
      transportation: dtoWithPaths.keadaanVesel.vesel,
      is_approved: 1,
      is_active: 1,
      safety_jacket_status: dtoWithPaths.peralatanKeselamatan.jaketKeselamatan.status === 'Ada' ? 1 : 0,
      safety_jacket_quantity: parseInt(dtoWithPaths.peralatanKeselamatan.jaketKeselamatan.kuantiti),
      safety_jacket_condition: dtoWithPaths.peralatanKeselamatan.jaketKeselamatan.keadaan,
      safety_jacket_image_path: dtoWithPaths.peralatanKeselamatan.image.MTUImg,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      created_at: new Date(),
    });
    await this.daratVesselHistorieRepository.save(vesselHistory);

    // Fetch related data for response
    const application = await this.daratApplicationRepository.findOne({
      where: { id: dtoWithPaths.applicationId },
      relations: ['status']
    });

    const vessel = await this.daratVesselRepository.findOne({
      where: { id: dtoWithPaths.vesselId }
    });

    // Include related data in the response
    const enrichedDto = {
      ...dtoWithPaths,
      inspectionId: savedEntity.id,
      application: application,
      vessel: vessel,
      applicationLog: applicationLog,
      temporaryPin: temporaryPin,
      vesselEngine: vesselEngine,
      vesselHull: savedVesselHull,
      vesselHistory: vesselHistory,
      vesselHullHistory: vesselHullHistory,
    };

    console.log(savedEntity)
    return enrichedDto;
  }
}