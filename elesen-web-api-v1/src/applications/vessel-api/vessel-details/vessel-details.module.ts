import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsController } from './vessel-details.controller';
import { VesselDetailsService } from './vessel-details.service';
import { VesselDetailsEntity } from './vessel-details.entity';
import { VesselEntity } from '../../marin/entities/vessel.entity';
import { KulitEntity } from '../../marin/entities/kulit.entity';
import { EnjinEntity } from '../../marin/entities/enjin.entity';
import { KesalahanEntity } from '../../marin/entities/kesalahan.entity';
import { JettieEntity } from '../../marin/entities/jetties.entity';
import { ProfilePentadbirHartaEntity } from '../../users/entities/profile-pentadbir-hartas.entity';
import { KruEntity } from '../../marin/entities/kru.entity';
import { PemilikanEntity } from '../../marin/entities/pemilikan.entity';
import { PematuhanEntity } from '../../marin/entities/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from '../../marin/entities/pendaftaran-antarabangsa.entity';
import { CmEquipment } from '../../marin/entities/cm-equipment.entity';

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
