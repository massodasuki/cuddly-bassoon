import { Module } from '@nestjs/common';
import { SlpLuarNegaraApplicationsService } from './slp-luar-negara-applications.service';
import { SlpLuarNegaraApplicationsController } from './slp-luar-negara-applications.controller';
import { SlpLuarNegaraApplicationsEntity } from './slp-luar-negara-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraApplicationsEntity])],
  providers: [SlpLuarNegaraApplicationsService],
  controllers: [SlpLuarNegaraApplicationsController],
  exports: [SlpLuarNegaraApplicationsService],
})
export class SlpLuarNegaraApplicationsModule {}