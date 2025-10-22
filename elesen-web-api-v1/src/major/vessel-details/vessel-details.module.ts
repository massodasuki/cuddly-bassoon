import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsController } from './vessel-details.controller';
import { VesselDetailsService } from './vessel-details.service';
import { VesselDetailsEntity } from './vessel-details.entity';
import { VesselEntity } from '../vessels/vessel.entity';
import { KulitEntity } from '../kulit/kulit.entity';
import { EnjinEntity } from '../enjin/enjin.entity';
import { KesalahanEntity } from '../kesalahan/kesalahan.entity';
import { JettieEntity } from '../jetties/jetties.entity';
import { ProfilePentadbirHartaEntity } from '../profile-pentadbir-hartas/profile-pentadbir-hartas.entity';
import { KruEntity } from '../../components/kru/kru.entity';
import { PemilikanEntity } from '../../components/pemilikan/pemilikan.entity';
import { PematuhanEntity } from '../../components/pematuhan/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from '../../components/pendaftaran-antarabangsa/pendaftaran-antarabangsa.entity';

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
    ]),
  ],
  controllers: [VesselDetailsController],
  providers: [VesselDetailsService],
})
export class VesselDetailsModule {}