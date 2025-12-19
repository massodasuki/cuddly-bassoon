import { Module } from '@nestjs/common';



// Placeholder entities for now
class PematuhanEntity {}

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VesselDetailsEntity,
      VesselEntity,
//       KulitEntity,
//       EnjinEntity,
//       KesalahanEntity,
//       JettieEntity,
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