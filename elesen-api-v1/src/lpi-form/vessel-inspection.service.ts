import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity'
import { Repository } from 'typeorm'
import { CreateLpiVesselInspectionDto } from './dto/create-lpi-vessel-inspection.dto'
import { LpiForm } from './entities/lpi-form.entity'
import { AlatKeselamatan } from 'src/shared/entities/embedded/alat-keselamatan.entity'
import { ButiranEnjin } from 'src/shared/entities/embedded/butiran-enjin.entity'
import { EmpunyaVesel } from 'src/shared/entities/embedded/empunya-vesel.entity'
import { InfoVessel } from 'src/shared/entities/embedded/info-vessel.entity'
import { Nakhoda } from 'src/shared/entities/embedded/nakhoda.entity'
import { PenandaanVesel } from 'src/shared/entities/embedded/penandaan-vesel.entity'
import { PeralatanMenangkap } from 'src/shared/entities/embedded/peralatan-menangkap.entity'
import { PeralatanTambahanUtama } from '../shared/entities/embedded/peralatan-tambahan-utama.entity';
import { PeralatanTambahanTambahan } from '../shared/entities/embedded/peralatan-tambahan-tambahan.entity';
import { PukatTunda } from 'src/shared/entities/embedded/pukat-tunda.entity'
import { ButiranEnjinDto } from './dto/embedded/butiran-enjin.dto';
import { EmpunyaVeselDto } from './dto/embedded'
@Injectable()
export class VesselInspectionService {
  constructor (
    @InjectRepository(VesselInspection)
    private readonly vesselRepo: Repository<VesselInspection>,

    @InjectRepository(AlatKeselamatan)
    private readonly alatKeselamatanRepo: Repository<AlatKeselamatan>,

    @InjectRepository(ButiranEnjin)
    private readonly butiranEnjinRepo: Repository<ButiranEnjin>,

    @InjectRepository(EmpunyaVesel)
    private readonly empunyaVeselRepo: Repository<EmpunyaVesel>,

    @InjectRepository(InfoVessel)
    private readonly infoVesselRepo: Repository<InfoVessel>,

    @InjectRepository(Nakhoda)
    private readonly nakhodaRepo: Repository<Nakhoda>,

    @InjectRepository(PenandaanVesel)
    private readonly penandaanVeselRepo: Repository<PenandaanVesel>,

    @InjectRepository(PeralatanMenangkap)
    private readonly peralatanMenangkapRepo: Repository<PeralatanMenangkap>,

    @InjectRepository(PeralatanTambahanUtama)
    private readonly peralatanTambahanUtamaRepo: Repository<PeralatanTambahanUtama>,

    @InjectRepository(PeralatanTambahanTambahan)
    private readonly peralatanTambahanTambahanRepo: Repository<PeralatanTambahanTambahan>,

    @InjectRepository(PukatTunda)
    private readonly pukatTundaRepo: Repository<PukatTunda>,

  ) {}

  async fillForm (data: { payload: any; formId: string }, lpiForm: LpiForm) {
    let parsedPayload: any
    try {
      parsedPayload = JSON.parse(data.payload)
    } catch {
      throw new BadRequestException('Invalid JSON in payload field')
    }
    // console.log(parsedPayload.formId = );

    const dtoInstance = plainToInstance(
      CreateLpiVesselInspectionDto,
      parsedPayload,
    )
    const errors = await validate(dtoInstance)
    if (errors.length > 0) throw new BadRequestException(errors)

    const existing = await this.vesselRepo.findOne({
      where: { vesselNo: dtoInstance.vesselNo },
    })
    if (existing) throw new ConflictException('vesselNo already exists')

    dtoInstance
    const newRecord = this.vesselRepo.create({
      ...dtoInstance,
      lpiForm: lpiForm,
    })
    const saved = await this.vesselRepo.save(newRecord)
    return saved.vesselNo
  }

  async getVesselInspection (noVessels: string) {
    const inspection = await this.vesselRepo.findOne({
      where: { vesselNo: noVessels },
      relations: {
        empunyaVesel: true,
        nakhoda: true,
        penandaanVesel: true,
        pukatTunda: true,
        butiranVesel: true,
        butiranEnjin: true,
        alatKeselamatan: true,
        peralatanMenangkap: true,
        peralatanTambahanUtama: true,
        peralatanTambahanTambahan: true,
        infoVessel: true,
      },
    })
    if (!inspection) throw new NotFoundException('Vessel inspection not found')
    return inspection
  }

  async updateForm (data: { payload: any; formId: string }, lpiForm: LpiForm) {
    let parsedPayload: any
    try {
      parsedPayload = JSON.parse(data.payload)
    } catch {
      throw new BadRequestException('Invalid JSON in payload field')
    }

    const dtoInstance = plainToInstance(
      CreateLpiVesselInspectionDto,
      parsedPayload,
    )
    const errors = await validate(dtoInstance)
    if (errors.length > 0) throw new BadRequestException(errors)

    // Find existing vessel inspection record related to the lpiForm
    const existing = await this.vesselRepo.findOne({
      where: {
        lpiForm: { id: lpiForm.id },
      },
    })

    if (!existing)
      throw new NotFoundException('VesselInspection not found for update')

    // Merge updated values
    const updated = this.vesselRepo.merge(existing, dtoInstance)

    // Save updated record
    const saved = await this.vesselRepo.save(updated)
    return saved.vesselNo
  }

  // async updateChild () {
  //   const existing = await this.keadaanRepo.findOne({
  //     where: { pemeriksaanVessels: { id: vessel.id } },
  //   })

  //   if (existing) {
  //     this.keadaanRepo.merge(existing, dto)
  //     await this.keadaanRepo.save(existing)
  //   } else {
  //     const newRecord = this.keadaanRepo.create({
  //       ...dto,
  //       pemeriksaanVessels: vessel,
  //     })
  //     await this.keadaanRepo.save(newRecord)
  //   }
  // }
}
