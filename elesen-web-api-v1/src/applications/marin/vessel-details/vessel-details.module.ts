import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsController } from './vessel-details.controller';
import { VesselDetailsService } from './vessel-details.service';
import { VesselDetailsEntity } from './vessel-details.entity';
import { VesselEntity } from '../vessels/vessel.entity';
import { KulitEntity } from '../entities/kulit.entity';
import { EnjinEntity } from '../entities/enjin.entity';
import { KesalahanEntity } from '../entities/kesalahan.entity';
import { JettieEntity } from '../entities/jetties.entity';
import { ProfilePentadbirHartaEntity } from '../entities/profile-pentadbir-hartas.entity';
import { KruEntity } from '../entities/kru.entity';
import { PemilikanEntity } from '../entities/pemilikan.entity';
import { PematuhanEntity } from '../entities/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from '../entities/pendaftaran-antarabangsa.entity';
import { CmEquipment } from '../entities/cm-equipment.entity';

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