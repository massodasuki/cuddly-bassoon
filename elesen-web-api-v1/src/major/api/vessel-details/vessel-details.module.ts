import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsController } from './vessel-details.controller';
import { VesselDetailsService } from './vessel-details.service';
import { VesselDetailsEntity } from './vessel-details.entity';
import { VesselEntity, KulitEntity, EnjinEntity, KesalahanEntity, JettieEntity } from '../common/entities';
import { KruEntity } from '../common/entities/kru.entity';
import { PemilikanEntity } from '../common/entities/pemilikan.entity';
import { CmEquipment } from '../common/entities/cm-equipment.entity';
import { ProfilePentadbirHartaEntity } from '../common/entities/profile-pentadbir-hartas.entity';
import { PendaftaranAntarabangsaEntity } from '../common/entities/pendaftaran-antarabangsa.entity';
// Placeholder entities for now
class PematuhanEntity {}

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VesselDetailsEntity,
      VesselEntity,
      KulitEntity,
      EnjinEntity,
      KesalahanEntity,
      JettieEntity,
      ProfilePentadbirHartaEntity,
      KruEntity,
      PemilikanEntity,
      PematuhanEntity,
      PendaftaranAntarabangsaEntity,
      CmEquipment,
    ]),
  ],
  controllers: [VesselDetailsController],
  providers: [VesselDetailsService],
})
export class VesselDetailsModule {}