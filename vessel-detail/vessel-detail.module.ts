import { Module } from '@nestjs/common';
import { VesselDetailService } from './vessel-detail.service';
import { VesselDetailController } from './vessel-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilVesel } from './entities/profil-vesel.entity';
import { MaklumatAmVesel } from './entities/maklumat-am-vesel.entity';
import { Lesen } from './entities/lesen.entity';
import { Kulit } from './entities/kulit.entity';
import { Enjin } from './entities/enjin.entity';
import { MaklumatAmEnjin } from './entities/maklumat-am-enjin.entity';
import { GambarEnjin } from './entities/gambar-enjin.entity';
import { Peralatan } from './entities/peralatan.entity';
import { Kru } from './entities/kru.entity';
import { Pengkalan } from './entities/pengkalan.entity';
import { Pemilikan } from './entities/pemilikan.entity';
import { Kesalahan } from './entities/kesalahan.entity';
import { PendaftaranAntarabangsa } from './entities/pendaftaran-antarabangsa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfilVesel,
      MaklumatAmVesel,
      Lesen,
      Kulit,
      Enjin,
      MaklumatAmEnjin,
      GambarEnjin,
      Peralatan,
      Kru,
      Pengkalan,
      Pemilikan,
      Kesalahan,
      PendaftaranAntarabangsa,
    ]),
  ],
  controllers: [VesselDetailController],
  providers: [VesselDetailService],
})
export class VesselDetailModule {}