import { Module } from '@nestjs/common';
import { SlpLuarNegaraApplicationsService } from './slp_luar_negara_applications.service';
import { SlpLuarNegaraApplicationsController } from './slp_luar_negara_applications.controller';
import { SlpLuarNegaraApplicationsEntity } from './slp_luar_negara_applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraApplicationsEntity])],
  providers: [SlpLuarNegaraApplicationsService],
  controllers: [SlpLuarNegaraApplicationsController],
  exports: [SlpLuarNegaraApplicationsService],
})
export class SlpLuarNegaraApplicationsModule {}