import { Module } from '@nestjs/common';
import { DaratVeselLpiFormService } from './darat-vesel-lpi-form.service';
import { DaratVeselLpiFormController } from './darat-vesel-lpi-form.controller';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVeselLpiFormEntity])],
  providers: [DaratVeselLpiFormService],
  controllers: [DaratVeselLpiFormController],
  exports: [DaratVeselLpiFormService],
})
export class DaratVeselLpiFormModule {}