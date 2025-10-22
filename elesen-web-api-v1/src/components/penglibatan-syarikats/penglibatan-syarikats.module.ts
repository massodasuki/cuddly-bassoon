import { Module } from '@nestjs/common';
import { PenglibatanSyarikatService } from './penglibatan-syarikats.service';
import { PenglibatanSyarikatEntityController } from './penglibatan-syarikats.controller';
import { PenglibatanSyarikatEntity } from './penglibatan-syarikats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PenglibatanSyarikatEntity])],
  providers: [PenglibatanSyarikatService],
  controllers: [PenglibatanSyarikatEntityController],
  exports: [PenglibatanSyarikatService],
})
export class PenglibatanSyarikatModule {}
