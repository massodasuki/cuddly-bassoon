import { Module } from '@nestjs/common';
import { PantasBatchesService } from './pantas-batches.service';
import { PantasBatchesController } from './pantas-batches.controller';
import { PantasBatchesEntity } from './pantas-batches.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PantasBatchesEntity])],
  providers: [PantasBatchesService],
  controllers: [PantasBatchesController],
  exports: [PantasBatchesService],
})
export class PantasBatchesModule {}