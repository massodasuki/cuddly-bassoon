import { Module } from '@nestjs/common';
import { FishSpeciesNdService } from './fish-species-nds.service';
import { FishSpeciesNdEntityController } from './fish-species-nds.controller';
import { FishSpeciesNdEntity } from './fish-species-nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishSpeciesNdEntity])],
  providers: [FishSpeciesNdService],
  controllers: [FishSpeciesNdEntityController],
  exports: [FishSpeciesNdService],
})
export class FishSpeciesNdModule {}
