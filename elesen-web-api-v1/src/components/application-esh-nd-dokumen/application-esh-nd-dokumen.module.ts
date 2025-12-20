import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEshNdDokumenService } from './application-esh-nd-dokumen.service';
import { ApplicationEshNdDokumenController } from './application-esh-nd-dokumen.controller';
import { ApplicationEshNdDokumen } from './application-esh-nd-dokumen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEshNdDokumen])],
  controllers: [ApplicationEshNdDokumenController],
  providers: [ApplicationEshNdDokumenService],
  exports: [ApplicationEshNdDokumenService],
})
export class ApplicationEshNdDokumenModule {}
