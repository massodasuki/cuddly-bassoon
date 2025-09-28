import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LpiForm } from './entities/lpi-form.entity'
import { Repository } from 'typeorm'
import { LpiFormImage } from './entities/lpi-form-image.entity'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto'
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity'
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto'
import { UpdateVesselInspectionDto } from 'src/shared/dto/update-vessel-inspection.dto'
import { mkdirSync, writeFileSync } from 'fs'
import { extname, join, relative } from 'path'
import { CreateLpiFormDto } from './dto/create-lpi-form.dto'
import { v4 as uuidv4 } from 'uuid'
import { CombinedLpiResponseDto } from './dto/combined-lpi-response.dto'
import { LpiImageService } from './lpi-image.service'
import { VesselInspectionService } from './vessel-inspection.service'

@Injectable()
export class LpiFormService {
  constructor (
    @InjectRepository(LpiForm)
    private readonly lpiFormRepository: Repository<LpiForm>,

    private readonly imageService: LpiImageService,
    private readonly vesselInspectionService: VesselInspectionService, // @InjectRepository(VesselInspection)
  ) // private vesselRepository: Repository<VesselInspection>,

  // @InjectRepository(LpiFormImage)
  // private readonly lpiFormImageRepo: Repository<LpiFormImage>,
  {}

  //   async findAll(paginationQuery: PaginationQueryDto) {
  //   const { limit = 10, page = 1 } = paginationQuery;

  //   const [data, total] = await this.vesselRepository.findAndCount({
  //     take: limit,
  //     skip: (page - 1) * limit,
  //     relations: {
  //       empunyaVesel: true,
  //       nakhoda: true,
  //       penandaanVesel: true,
  //       pukatTunda: true,
  //       butiranVesel: true,
  //       butiranEnjin: true,
  //       alatKeselamatan: true,
  //       peralatanMenangkap: true,
  //       peralatanTambahanUtama: true,
  //       peralatanTambahanTambahan: true,
  //       infoVessel: true,
  //     },
  //   });

  //   return {
  //     data,
  //     total,
  //     page,
  //     pageSize: limit,
  //     totalPages: Math.ceil(total / limit),
  //   };
  // }

  //   findOne(noVessels: string) {
  //     return this.vesselRepository.findOne({
  //       where: { noVessels },
  //       relations: {
  //         empunyaVesel: true,
  //         nakhoda: true,
  //         penandaanVesel: true,
  //         pukatTunda: true,
  //         butiranVesel: true,
  //         butiranEnjin: true,
  //         alatKeselamatan: true,
  //         peralatanMenangkap: true,
  //         peralatanTambahanUtama: true,
  //         peralatanTambahanTambahan: true,
  //         infoVessel: true,
  //       },
  //     });
  //   }

  //     async update(noVessels: string, dto: UpdateVesselInspectionDto): Promise<VesselInspection> {
  //       const existing = await this.vesselRepository.findOne({ where: { noVessels } });

  //       if (!existing) {
  //         throw new NotFoundException(`Vessel with id ${noVessels} not found`);
  //       }

  //       // Shallow merge or customize deeply as needed
  //       const updated = this.vesselRepository.merge(existing, dto);
  //       return this.vesselRepository.save(updated);
  //     }

  //     async softDelete(noVessels: string): Promise<void> {
  //     const vessel = await this.vesselRepository.findOneBy({ noVessels });
  //     if (vessel) {
  //       await this.vesselRepository.softRemove(vessel);
  //     }
  //   }

  async submitForm (body: any, files: Express.Multer.File[], res: any) {
    const form = this.lpiFormRepository.create({
      id: body.formId,
      user: body.user,
    })
    const lpiForm = await this.lpiFormRepository.save(form)
    await this.imageService.handleImageUploads(files, lpiForm)
    const noVessels = await this.vesselInspectionService.fillForm(body, lpiForm)
    return this.getCombinedLpiData(body.formId, noVessels, res)
  }

  async getCombinedLpiData (formId: string, noVessels: string, res: any) {
    const lpiForm = await this.lpiFormRepository.findOne({
      where: { id: formId },
      relations: ['images'],
    })
    if (!lpiForm) throw new NotFoundException('LPI Form not found')
    const vesselInspection =
      await this.vesselInspectionService.getVesselInspection(noVessels)
    let result = {
      id: lpiForm.id,
      user: lpiForm.user,
      createdAt: lpiForm.createdAt,
      images: lpiForm.images.map(img => ({
        id: img.id,
        filename: img.filename,
        path: img.path,
      })),
      vesselInspection,
    }
    return res.status(201).json({ data: result })
  }

  //Get

  async findOne (formId: string) {
    const lpiForm = await this.lpiFormRepository.findOne({
      where: { id: formId },
      relations: ['images', 'vesselInspection'],
    })
    if (!lpiForm) throw new NotFoundException('LPI Form not found')

    if (!lpiForm.vesselInspection)
      throw new NotFoundException('Vessel Inspection not found')
    const vesselInspection =
      await this.vesselInspectionService.getVesselInspection(
        lpiForm.vesselInspection.vesselNo,
      )
    return {
      id: lpiForm.id,
      user: lpiForm.user,
      createdAt: lpiForm.createdAt,
      images: lpiForm.images.map(img => ({
        id: img.id,
        filename: img.filename,
        path: img.path,
      })),
      vesselInspection,
    }
  }

  async updateForm (formId, body: any, files: Express.Multer.File[], res: any) {
    const lpiForm = await this.lpiFormRepository.findOne({
      where: { id: formId },
      relations: ['images', 'vesselInspection'],
    })
    if (!lpiForm) throw new NotFoundException('LPI Form not found')

    if (!lpiForm.vesselInspection)
      throw new NotFoundException('Vessel Inspection not found')
    const vesselInspection =
      await this.vesselInspectionService.getVesselInspection(
        lpiForm.vesselInspection.vesselNo,
      )
    const form = this.lpiFormRepository.create({
      id: formId,
      user: body.user,
    })
    const updatedLpiForm = await this.lpiFormRepository.save(form)
    await this.imageService.handleImageUploads(files, updatedLpiForm)
    const noVessels = await this.vesselInspectionService.updateForm(body, updatedLpiForm)
    return this.getCombinedLpiData(body.formId, noVessels, res)
  }
}
