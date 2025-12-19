import { Module } from '@nestjs/common';
import { ApplicationPinsService } from './application_pins.service';
import { ApplicationPinsController } from './application_pins.controller';
import { ApplicationPinsEntity } from './application_pins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationPinsEntity])],
  providers: [ApplicationPinsService],
  controllers: [ApplicationPinsController],
  exports: [ApplicationPinsService],
})
export class ApplicationPinsModule {}