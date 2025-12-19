import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsController } from './vessel-details.controller';
import { VesselDetailsService } from './vessel-details.service';
import { VesselDetailsEntity } from './vessel-details.entity';
import { VesselEntity, KulitEntity, EnjinEntity, KesalahanEntity, JettieEntity } from '../common/entities';
// Placeholder entities for now
class ProfilePentadbirHartaEntity {}
class KruEntity {}
class PemilikanEntity {}
class PematuhanEntity {}
class PendaftaranAntarabangsaEntity {}
class CmEquipment {}

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