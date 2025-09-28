import { Module } from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { LpiFormController } from './lpi-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LpiFormImage } from './entities/lpi-form-image.entity';
import { LpiForm } from './entities/lpi-form.entity';
import { VesselInspection } from 'src/shared/entities/vessel-inspection.entity';
import { VesselInspectionService } from './vessel-inspection.service';
import { LpiImageService } from './lpi-image.service';
import { AlatKeselamatan } from 'src/shared/entities/embedded/alat-keselamatan.entity';
import { ButiranEnjin } from 'src/shared/entities/embedded/butiran-enjin.entity';
import { EmpunyaVesel } from 'src/shared/entities/embedded/empunya-vesel.entity';
import { InfoVessel } from 'src/shared/entities/embedded/info-vessel.entity';
import { Nakhoda } from 'src/shared/entities/embedded/nakhoda.entity';
import { PenandaanVesel } from 'src/shared/entities/embedded/penandaan-vesel.entity';
import { PeralatanMenangkap } from 'src/shared/entities/embedded/peralatan-menangkap.entity';
import { PeralatanTambahanTambahan } from 'src/shared/entities/embedded/peralatan-tambahan-tambahan.entity';
import { PeralatanTambahanUtama } from 'src/shared/entities/embedded/peralatan-tambahan-utama.entity';
import { PukatTunda } from 'src/shared/entities/embedded/pukat-tunda.entity';

@Module({
  controllers: [LpiFormController],
  imports: [
    TypeOrmModule.forFeature([LpiForm, LpiFormImage, VesselInspection, 
    AlatKeselamatan, 
    ButiranEnjin,
    EmpunyaVesel,
    InfoVessel,
    Nakhoda,
    PenandaanVesel,
    PeralatanMenangkap,
    PeralatanTambahanUtama,
    PeralatanTambahanTambahan,
    PukatTunda
    ]),
  ],
  providers: [LpiFormService, LpiImageService, VesselInspectionService],
  exports: [LpiFormService],
})
export class LpiFormModule {}