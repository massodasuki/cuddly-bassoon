import { Module } from '@nestjs/common';
import { SpecieService } from './species.service';
import { SpecieEntityController } from './species.controller';
import { SpecieEntity } from './species.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SpecieEntity])],
  providers: [SpecieService],
  controllers: [SpecieEntityController],
  exports: [SpecieService],
})
export class SpecieModule {}
