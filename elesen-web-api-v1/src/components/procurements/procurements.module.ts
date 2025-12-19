import { Module } from '@nestjs/common';
import { ProcurementsService } from './procurements.service';
import { ProcurementsController } from './procurements.controller';
import { ProcurementsEntity } from './procurements.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProcurementsEntity])],
  providers: [ProcurementsService],
  controllers: [ProcurementsController],
  exports: [ProcurementsService],
})
export class ProcurementsModule {}