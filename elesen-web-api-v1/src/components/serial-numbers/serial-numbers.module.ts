import { Module } from '@nestjs/common';
import { SerialNumberService } from './serial-numbers.service';
import { SerialNumberEntityController } from './serial-numbers.controller';
import { SerialNumberEntity } from './serial-numbers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SerialNumberEntity])],
  providers: [SerialNumberService],
  controllers: [SerialNumberEntityController],
  exports: [SerialNumberService],
})
export class SerialNumberModule {}

