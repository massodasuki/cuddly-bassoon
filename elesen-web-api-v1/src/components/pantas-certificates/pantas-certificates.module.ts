import { Module } from '@nestjs/common';
import { PantasCertificatesService } from './pantas-certificates.service';
import { PantasCertificatesController } from './pantas-certificates.controller';
import { PantasCertificatesEntity } from './pantas-certificates.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PantasCertificatesEntity])],
  providers: [PantasCertificatesService],
  controllers: [PantasCertificatesController],
  exports: [PantasCertificatesService],
})
export class PantasCertificatesModule {}