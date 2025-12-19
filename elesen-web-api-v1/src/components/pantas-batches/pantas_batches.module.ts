import { Module } from '@nestjs/common';
import { PantasBatchesService } from './pantas_batches.service';
import { PantasBatchesController } from './pantas_batches.controller';
import { PantasBatchesEntity } from './pantas_batches.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PantasBatchesEntity])],
  providers: [PantasBatchesService],
  controllers: [PantasBatchesController],
  exports: [PantasBatchesService],
})
export class PantasBatchesModule {}