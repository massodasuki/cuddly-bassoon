import { Module } from '@nestjs/common';
import { KruApplicationTypeService } from './kru-application-types.service';
import { KruApplicationTypeEntityController } from './kru-application-types.controller';
import { KruApplicationTypeEntity } from './kru-application-types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationTypeEntity])],
  providers: [KruApplicationTypeService],
  controllers: [KruApplicationTypeEntityController],
  exports: [KruApplicationTypeService],
})
export class KruApplicationTypeModule {}
