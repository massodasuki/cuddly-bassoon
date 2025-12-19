import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsEntity } from './vessel-details.entity';
import { VesselEntity } from '../common/entities/vessels.entity';
import { ProfilePentadbirHartaEntity } from '../common/entities/profile-pentadbir-hartas.entity';
import { KruEntity } from '../common/entities/kru.entity';
import { PemilikanEntity } from '../common/entities/pemilikan.entity';
import { PendaftaranAntarabangsaEntity } from '../common/entities/pendaftaran-antarabangsa.entity';
import { CmEquipment } from '../common/entities/cm-equipment.entity';
import { VesselDetailsController } from './vessel-details.controller';
import { VesselDetailsService } from './vessel-details.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VesselDetailsEntity,
      VesselEntity,
      ProfilePentadbirHartaEntity,
      KruEntity,
      PemilikanEntity,
      PendaftaranAntarabangsaEntity,
      CmEquipment,
    ]),
  ],
  controllers: [VesselDetailsController],
  providers: [VesselDetailsService],
})
export class VesselDetailsModule {}