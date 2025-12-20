import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CmEquipmentService } from './cm-equipment.service';
import { CmEquipmentController } from './cm-equipment.controller';
import { CmEquipment } from './cm-equipment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CmEquipment])],
  controllers: [CmEquipmentController],
  providers: [CmEquipmentService],
})
export class CmEquipmentModule {}
