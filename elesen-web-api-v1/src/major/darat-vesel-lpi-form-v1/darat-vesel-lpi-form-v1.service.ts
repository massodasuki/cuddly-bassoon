import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVeselLpiFormV1Entity } from './darat-vesel-lpi-form-v1.entity';
import { CreateDaratVeselLpiFormV1Dto } from './dto/create-darat-vesel-lpi-form-v1.dto';
import { ImageUploadService } from './image-upload.service';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';

@Injectable()
export class DaratVeselLpiFormV1Service {
  constructor(
    @InjectRepository(DaratVeselLpiFormV1Entity)
    private daratVeselLpiFormV1Repository: Repository<DaratVeselLpiFormV1Entity>,
    @InjectRepository(DaratApplicationEntity)
    private daratApplicationRepository: Repository<DaratApplicationEntity>,
    @InjectRepository(DaratVesselEntity)
    private daratVesselRepository: Repository<DaratVesselEntity>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  findAll(): Promise<DaratVeselLpiFormV1Entity[]> {
    return this.daratVeselLpiFormV1Repository.find();
  }

  async findOne(id: string): Promise<DaratVeselLpiFormV1Entity> {
    const entity = await this.daratVeselLpiFormV1Repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }

  async create(createDto: CreateDaratVeselLpiFormV1Dto): Promise<DaratVeselLpiFormV1Entity> {
    const entity = this.daratVeselLpiFormV1Repository.create(createDto as any);
    const savedEntity = await this.daratVeselLpiFormV1Repository.save(entity);
    return Array.isArray(savedEntity) ? savedEntity[0] : savedEntity;
  }

  async createWithFiles(createDto: CreateDaratVeselLpiFormV1Dto, files: { [key: string]: Express.Multer.File[] }): Promise<any> {
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

    // Map file paths to DTO fields
    const dtoWithPaths = {
      ...createDto,
      veselKeseluruhanImg: uploadedFiles['veselKeseluruhanImg'] || createDto.veselKeseluruhanImg,
      enjinImg: uploadedFiles['enjinImg'] || createDto.enjinImg,
      noEnjinImg: uploadedFiles['noEnjinImg'] || createDto.noEnjinImg,
      penandaEnjinImg: uploadedFiles['penandaEnjinImg'] || createDto.penandaEnjinImg,
      turboImg: uploadedFiles['turboImg'] || createDto.turboImg,
      generatorImg: uploadedFiles['generatorImg'] || createDto.generatorImg,
      tandaTanganPembantuImg: uploadedFiles['tandaTanganPembantuImg'] || createDto.tandaTanganPembantuImg,
      tandatanganPegawaiImg: uploadedFiles['tandatanganPegawaiImg'] || createDto.tandatanganPegawaiImg,
      tandaTanganEmpunyaVeselImg: uploadedFiles['tandaTanganEmpunyaVeselImg'] || createDto.tandaTanganEmpunyaVeselImg,
    };

    // Save the main inspection entity
    const entity = this.daratVeselLpiFormV1Repository.create({
      user_id: dtoWithPaths.userId,
      vessel_id: dtoWithPaths.vesselId,
      application_id: dtoWithPaths.applicationId,
      created_by: dtoWithPaths.createdBy,
      updated_by: dtoWithPaths.updatedBy,
      no_vesel: dtoWithPaths.noVesel,
      no_vesel_ditebuk: dtoWithPaths.noVesel_ditebuk,
      no_vesel_dicat: dtoWithPaths.noVesel_dicat,
      no_vesel_di_bumbung: dtoWithPaths.noVesel_diBumbung,
      tanda_bahagian_laluan: dtoWithPaths.tandaBahagianLaluan,
      huruf_kod_tanda: dtoWithPaths.hurufKodTanda,
      tin_plate: dtoWithPaths.tinPlate,
      no_tin_plate: dtoWithPaths.noTinPlate,
      paku_penanda_lebar: dtoWithPaths.pakuPenandaLebar,
      rumah_kemudi_ditebuk: dtoWithPaths.rumahKemudi_ditebuk,
      kod_zon: dtoWithPaths.kodZon,
      rumah_kemudi_di_bumbung: dtoWithPaths.rumahKemudi_diBumbung,
      jalur_putih: dtoWithPaths.jalurPutih,
      pukat_tunda_berlesen_dicat: dtoWithPaths.pukatTundaBerlesen_dicat,
      panjang_meter_dalam_lesen: dtoWithPaths.panjangMeter_dalamLesen,
      panjang_meter_semasa_diperiksa: dtoWithPaths.panjangMeter_semasaDiperiksa,
      lebar_meter_dalam_lesen: dtoWithPaths.lebarMeter_dalamLesen,
      lebar_meter_semasa_diperiksa: dtoWithPaths.lebarMeter_semasaDiperiksa,
      kedalaman_meter_dalam_lesen: dtoWithPaths.kedalamanMeter_dalamLesen,
      kedalaman_meter_semasa_diperiksa: dtoWithPaths.kedalamanMeter_semasaDiperiksa,
      muatan_grt_dalam_lesen: dtoWithPaths.muatanGRT_dalamLesen,
      muatan_grt_semasa_diperiksa: dtoWithPaths.muatanGRT_semasaDiperiksa,
      is_no_pev: dtoWithPaths.isNoPEV,
      no_pev: dtoWithPaths.noPEV,
      jenama_dalam_lesen: dtoWithPaths.jenama_dalamLesen,
      jenama_semasa_diperiksa: dtoWithPaths.jenama_semasaDiperiksa,
      model_dalam_lesen: dtoWithPaths.model_dalamLesen,
      model_semasa_diperiksa: dtoWithPaths.model_semasaDiperiksa,
      kuasa_kuda_dalam_lesen: dtoWithPaths.kuasaKuda_dalamLesen,
      kuasa_kuda_semasa_diperiksa: dtoWithPaths.kuasaKuda_semasaDiperiksa,
      no_enjin_dalam_lesen: dtoWithPaths.noEnjin_dalamLesen,
      no_enjin_semasa_diperiksa: dtoWithPaths.noEnjin_semasaDiperiksa,
      vesel_keseluruhan_img: dtoWithPaths.veselKeseluruhanImg,
      enjin_img: dtoWithPaths.enjinImg,
      no_enjin_img: dtoWithPaths.noEnjinImg,
      penanda_enjin_img: dtoWithPaths.penandaEnjinImg,
      turbo_img: dtoWithPaths.turboImg,
      generator_img: dtoWithPaths.generatorImg,
      pelampung_keselamatan_status: dtoWithPaths.pelampungKeselamatan_status,
      pelampung_keselamatan_keadaan: dtoWithPaths.pelampungKeselamatan_keadaan,
      pelampung_keselamatan_kuantiti: dtoWithPaths.pelampungKeselamatan_kuantiti,
      boya_keselamatan_status: dtoWithPaths.boyaKeselamatan_status,
      boya_keselamatan_keadaan: dtoWithPaths.boyaKeselamatan_keadaan,
      boya_keselamatan_kuantiti: dtoWithPaths.boyaKeselamatan_kuantiti,
      alat_pemadam_api_status: dtoWithPaths.alatPemadamApi_status,
      alat_pemadam_api_keadaan: dtoWithPaths.alatPemadamApi_keadaan,
      alat_pemadam_api_kuantiti: dtoWithPaths.alatPemadamApi_kuantiti,
      lampu_pelayaran_status: dtoWithPaths.lampuPelayaran_status,
      lampu_pelayaran_keadaan: dtoWithPaths.lampuPelayaran_keadaan,
      lampu_pelayaran_kuantiti: dtoWithPaths.lampuPelayaran_kuantiti,
      rakit_keselamatan_status: dtoWithPaths.rakitKeselamatan_status,
      rakit_keselamatan_keadaan: dtoWithPaths.rakitKeselamatan_keadaan,
      rakit_keselamatan_kuantiti: dtoWithPaths.rakitKeselamatan_kuantiti,
      mtu_status: dtoWithPaths.mtu_status,
      mtu_keadaan: dtoWithPaths.mtu_keadaan,
      mtu_kuantiti: dtoWithPaths.mtu_kuantiti,
      ais_status: dtoWithPaths.ais_status,
      ais_keadaan: dtoWithPaths.ais_keadaan,
      ais_kuantiti: dtoWithPaths.ais_kuantiti,
      gps: dtoWithPaths.GPS,
      echo_sounder: dtoWithPaths.echoSounder,
      radar: dtoWithPaths.radar,
      sat_navigation: dtoWithPaths.satNavigation,
      sonar: dtoWithPaths.sonar,
      fish_finder: dtoWithPaths.fishFinder,
      radio_wireless: dtoWithPaths.radioWireless,
      atur: dtoWithPaths.ATUR,
      net_houler: dtoWithPaths.netHouler,
      power_block: dtoWithPaths.powerBlock,
      net_drum: dtoWithPaths.netDrum,
      rsw: dtoWithPaths.RSW,
      cctv: dtoWithPaths.CCTV,
      peralatan_utama: dtoWithPaths.peralatan_utama,
      peralatan_tambahan: dtoWithPaths.peralatan_tambahan,
      size_mata_pukat: dtoWithPaths.sizeMataPukat,
      peralatan_dijumpai: dtoWithPaths.peralatan_dijumpai,
      keadaan_vesel_semasa: dtoWithPaths.keadaanVeselSemasa,
      vesel_asal: dtoWithPaths.veselAsal,
      jenis_kulit_vesel: dtoWithPaths.jenisKulitVesel,
      vesel_baru: dtoWithPaths.veselBaru,
      tarikh_pemeriksaan: new Date(dtoWithPaths.tarikhPemeriksaan),
      permohonan_di_sokong: dtoWithPaths.permohonan_diSokong,
      permohonan_tarikh_pemeriksaan: new Date(dtoWithPaths.permohonan_tarikhPemeriksaan),
      tanda_tangan_pembantu_img: dtoWithPaths.tandaTanganPembantuImg,
      tandatangan_pegawai_img: dtoWithPaths.tandatanganPegawaiImg,
      jenis_permohonan: dtoWithPaths.jenisPermohonan,
      perakuan_pemilik_tarikh_pemeriksaan: new Date(dtoWithPaths.perakuanPemilik_tarikhPemeriksaan),
      tanda_tangan_empunya_vesel_img: dtoWithPaths.tandaTanganEmpunyaVeselImg,
      is_active: 1,
      created_at: new Date(),
    });

    const savedEntity = await this.daratVeselLpiFormV1Repository.save(entity);

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
    };

    console.log(savedEntity);
    return enrichedDto;
  }
}