import { Module } from '@nestjs/common';
import { BorangLPIController } from './borang-lpi.controller';
import { BorangLPIService } from './borang-lpi.service';
import { ImageUploadService } from './image-upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorangLPI } from './entities/borang-lpi.entity';
import { NoPendaftaranVesel } from './entities/no-pendaftaran-vesel.entity';
import { TandaPenukulBesi } from './entities/tanda-penukul-besi.entity';
import { TinPlate } from './entities/tin-plate.entity';
import { RumahKemudi } from './entities/rumah-kemudi.entity';
import { UkuranDimensiVesel } from './entities/ukuran-dimensi-vesel.entity';

@Module({
  controllers: [BorangLPIController],
  providers: [BorangLPIService, ImageUploadService],
  imports: [
    TypeOrmModule.forFeature([
      BorangLPI,
      NoPendaftaranVesel,
      TandaPenukulBesi,
      TinPlate,
      RumahKemudi,
      UkuranDimensiVesel,
    ]),
  ],
})
export class BorangLPIModule {}