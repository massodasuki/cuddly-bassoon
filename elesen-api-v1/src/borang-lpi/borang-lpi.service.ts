import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorangLPI } from './entities/borang-lpi.entity';
import { ImageUploadService } from './image-upload.service';
import { CreateBorangLPIDto } from './dto/create-borang-lpi.dto';

@Injectable()
export class BorangLPIService {
  constructor(
    @InjectRepository(BorangLPI)
    private borangLPIRepository: Repository<BorangLPI>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  async createBorangLPI(body: CreateBorangLPIDto, files: Express.Multer.File[], res: any) {
    // Upload images and map to URLs
    const uploadedUrls: { [key: string]: string } = {};

    for (const file of files) {
      const url = await this.imageUploadService.uploadImage(file);
      uploadedUrls[file.fieldname] = url;
    }

    // Map uploaded URLs to the corresponding image fields in the body
    if (body.ukuranDimensiVesel?.image) {
      body.ukuranDimensiVesel.image.veselKiriImg = uploadedUrls['veselKiriImg'] || body.ukuranDimensiVesel.image.veselKiriImg;
      body.ukuranDimensiVesel.image.veselKananImg = uploadedUrls['veselKananImg'] || body.ukuranDimensiVesel.image.veselKananImg;
      body.ukuranDimensiVesel.image.veselHadapanImg = uploadedUrls['veselHadapanImg'] || body.ukuranDimensiVesel.image.veselHadapanImg;
      body.ukuranDimensiVesel.image.veselBelakangImg = uploadedUrls['veselBelakangImg'] || body.ukuranDimensiVesel.image.veselBelakangImg;
      body.ukuranDimensiVesel.image.veselKeseluruhanImg = uploadedUrls['veselKeseluruhanImg'] || body.ukuranDimensiVesel.image.veselKeseluruhanImg;
    }

    if (body.enjin?.image) {
      body.enjin.image.enjinImg = uploadedUrls['enjinImg'] || body.enjin.image.enjinImg;
      body.enjin.image.noEnjinImg = uploadedUrls['noEnjinImg'] || body.enjin.image.noEnjinImg;
      body.enjin.image.penandaEnjinImg = uploadedUrls['penandaEnjinImg'] || body.enjin.image.penandaEnjinImg;
      body.enjin.image.turboImg = uploadedUrls['turboImg'] || body.enjin.image.turboImg;
      body.enjin.image.generatorImg = uploadedUrls['generatorImg'] || body.enjin.image.generatorImg;
    }

    if (body.peralatanKeselamatan?.image) {
      body.peralatanKeselamatan.image.MTUImg = uploadedUrls['MTUImg'] || body.peralatanKeselamatan.image.MTUImg;
      body.peralatanKeselamatan.image.AISImg = uploadedUrls['AISImg'] || body.peralatanKeselamatan.image.AISImg;
    }

    if (body.perakuanPegawai?.image) {
      body.perakuanPegawai.image.tandaTanganPembantuImg = uploadedUrls['tandaTanganPembantuImg'] || body.perakuanPegawai.image.tandaTanganPembantuImg;
      body.perakuanPegawai.image.tandatanganPegawaiImg = uploadedUrls['tandatanganPegawaiImg'] || body.perakuanPegawai.image.tandatanganPegawaiImg;
    }

    if (body.perakuanEmpunyaVesel?.image) {
      body.perakuanEmpunyaVesel.image.tandaTanganEmpunyaVeselImg = uploadedUrls['tandaTanganEmpunyaVeselImg'] || body.perakuanEmpunyaVesel.image.tandaTanganEmpunyaVeselImg;
    }

    // Save to DB
    const borangLPI = this.borangLPIRepository.create(body as any);
    await this.borangLPIRepository.save(borangLPI);

    return res.status(201).json({ message: 'Borang LPI created', id: borangLPI });
  }
}