import { Module } from '@nestjs/common';
import { DaratVeselLpiFormV1Service } from './darat-vesel-lpi-form-v1.service';
import { DaratVeselLpiFormV1Controller } from './darat-vesel-lpi-form-v1.controller';
import { DaratVeselLpiFormV1Entity } from './darat-vesel-lpi-form-v1.entity';
import { ImageUploadService } from './image-upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    DaratVeselLpiFormV1Entity,
    DaratApplicationEntity,
    DaratVesselEntity,
  ])],
  providers: [DaratVeselLpiFormV1Service, ImageUploadService],
  controllers: [DaratVeselLpiFormV1Controller],
  exports: [DaratVeselLpiFormV1Service],
})
export class DaratVeselLpiFormV1Module {}