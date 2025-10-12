import { Module } from '@nestjs/common';
import { ForeignCrewService } from './foreign-crews.service';
import { ForeignCrewEntityController } from './foreign-crews.controller';
import { ForeignCrewEntity } from './foreign-crews.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ForeignCrewEntity])],
  providers: [ForeignCrewService],
  controllers: [ForeignCrewEntityController],
  exports: [ForeignCrewService],
})
export class ForeignCrewModule {}
