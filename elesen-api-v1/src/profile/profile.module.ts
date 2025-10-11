import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Profile } from './entities/profile.entity';
import { MaklumatIndividu } from './entities/maklumat-individu.entity';
import { MaklumatKewangan } from './entities/maklumat-kewangan.entity';
import { PengkalanPendaratan } from './entities/pengkalan-pendaratan.entity';
import { Vessel } from './entities/vessel.entity';
import { Jeti } from './entities/jeti.entity';
import { AktivitiPenangkapanIkan } from './entities/aktiviti-penangkapan-ikan.entity';
import { Kesalahan } from './entities/kesalahan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Profile,
    MaklumatIndividu,
    MaklumatKewangan,
    PengkalanPendaratan,
    Vessel,
    Jeti,
    AktivitiPenangkapanIkan,
    Kesalahan,
  ])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}