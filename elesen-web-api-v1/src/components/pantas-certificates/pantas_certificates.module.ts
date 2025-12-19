import { Module } from '@nestjs/common';
import { PantasCertificatesService } from './pantas_certificates.service';
import { PantasCertificatesController } from './pantas_certificates.controller';
import { PantasCertificatesEntity } from './pantas_certificates.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PantasCertificatesEntity])],
  providers: [PantasCertificatesService],
  controllers: [PantasCertificatesController],
  exports: [PantasCertificatesService],
})
export class PantasCertificatesModule {}