import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { CreateDaratVeselLpiFormDto } from './dto/create-darat-vesel-lpi-form.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DaratVeselLpiFormService {
  constructor(
    @InjectRepository(DaratVeselLpiFormEntity)
    private daratVeselLpiFormRepository: Repository<DaratVeselLpiFormEntity>,
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

  async  createWithFiles(createDto: CreateDaratVeselLpiFormDto, files: Express.Multer.File[]): Promise<CreateDaratVeselLpiFormDto> {
    const uploadDir = path.join(__dirname, '..', '..', '..', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    console.log(createDto)

    // Parse nested properties if they are JSON strings (for form-data)
    if (typeof createDto.noPendaftaranVesel === 'string') {
      createDto.noPendaftaranVesel = JSON.parse(createDto.noPendaftaranVesel);
    }
    if (typeof createDto.tandaPenukulBesi === 'string') {
      createDto.tandaPenukulBesi = JSON.parse(createDto.tandaPenukulBesi);
    }
    if (typeof createDto.tinPlate === 'string') {
      createDto.tinPlate = JSON.parse(createDto.tinPlate);
    }
    if (typeof createDto.rumahKemudi === 'string') {
      createDto.rumahKemudi = JSON.parse(createDto.rumahKemudi);
    }
    if (typeof createDto.pukatTundaBerlesen === 'string') {
      createDto.pukatTundaBerlesen = JSON.parse(createDto.pukatTundaBerlesen);
    }
    if (typeof createDto.ukuranDimensiVesel === 'string') {
      createDto.ukuranDimensiVesel = JSON.parse(createDto.ukuranDimensiVesel);
    }
    if (typeof createDto.enjin === 'string') {
      createDto.enjin = JSON.parse(createDto.enjin);
    }
    if (typeof createDto.peralatanKeselamatan === 'string') {
      createDto.peralatanKeselamatan = JSON.parse(createDto.peralatanKeselamatan);
    }
    if (typeof createDto.kelengkapanMenangkapIkan === 'string') {
      createDto.kelengkapanMenangkapIkan = JSON.parse(createDto.kelengkapanMenangkapIkan);
    }
    if (typeof createDto.peralatan === 'string') {
      createDto.peralatan = JSON.parse(createDto.peralatan);
    }
    if (typeof createDto.keadaanVesel === 'string') {
      createDto.keadaanVesel = JSON.parse(createDto.keadaanVesel);
    }
    if (typeof createDto.perakuanPegawai === 'string') {
      createDto.perakuanPegawai = JSON.parse(createDto.perakuanPegawai);
    }
    if (typeof createDto.perakuanEmpunyaVesel === 'string') {
      createDto.perakuanEmpunyaVesel = JSON.parse(createDto.perakuanEmpunyaVesel);
    }

    const filePaths: { [key: string]: string } = {};

    for (const file of files) {
      const fileName = `${Date.now()}-${file.originalname}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      filePaths[file.fieldname] = filePath;
    }
    console.log(createDto)

    // Map file paths to DTO fields
    const dtoWithPaths = {
      ...createDto,
      ukuranDimensiVesel: {
        ...createDto.ukuranDimensiVesel,
        image: {
          ...createDto.ukuranDimensiVesel.image,
          veselKiriImg: filePaths['veselKiriImg'] || createDto.ukuranDimensiVesel.image.veselKiriImg,
          veselKananImg: filePaths['veselKananImg'] || createDto.ukuranDimensiVesel.image.veselKananImg,
          veselHadapanImg: filePaths['veselHadapanImg'] || createDto.ukuranDimensiVesel.image.veselHadapanImg,
          veselBelakangImg: filePaths['veselBelakangImg'] || createDto.ukuranDimensiVesel.image.veselBelakangImg,
          veselKeseluruhanImg: filePaths['veselKeseluruhanImg'] || createDto.ukuranDimensiVesel.image.veselKeseluruhanImg,
        }
      },
      enjin: {
        ...createDto.enjin,
        image: {
          ...createDto.enjin.image,
          enjinImg: filePaths['enjinImg'] || createDto.enjin.image.enjinImg,
          noEnjinImg: filePaths['noEnjinImg'] || createDto.enjin.image.noEnjinImg,
          penandaEnjinImg: filePaths['penandaEnjinImg'] || createDto.enjin.image.penandaEnjinImg,
          turboImg: filePaths['turboImg'] || createDto.enjin.image.turboImg,
          generatorImg: filePaths['generatorImg'] || createDto.enjin.image.generatorImg,
        }
      },
      peralatanKeselamatan: {
        ...createDto.peralatanKeselamatan,
        image: {
          ...createDto.peralatanKeselamatan.image,
          MTUImg: filePaths['MTUImg'] || createDto.peralatanKeselamatan.image.MTUImg,
          AISImg: filePaths['AISImg'] || createDto.peralatanKeselamatan.image.AISImg,
        }
      },
      perakuanPegawai: {
        ...createDto.perakuanPegawai,
        image: {
          ...createDto.perakuanPegawai.image,
          tandaTanganPembantuImg: filePaths['tandaTanganPembantuImg'] || createDto.perakuanPegawai.image.tandaTanganPembantuImg,
          tandatanganPegawaiImg: filePaths['tandatanganPegawaiImg'] || createDto.perakuanPegawai.image.tandatanganPegawaiImg,
        }
      },
      perakuanEmpunyaVesel: {
        ...createDto.perakuanEmpunyaVesel,
        image: {
          ...createDto.perakuanEmpunyaVesel.image,
          tandaTanganEmpunyaVeselImg: filePaths['tandaTanganEmpunyaVeselImg'] || createDto.perakuanEmpunyaVesel.image.tandaTanganEmpunyaVeselImg,
        }
      },
    };

    const entity = this.daratVeselLpiFormRepository.create({
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
    
    const savedEntity = await this.daratVeselLpiFormRepository.save(entity);
    console.log(savedEntity)
    return dtoWithPaths;
  }
}