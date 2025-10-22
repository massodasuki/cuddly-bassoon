import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilVesel } from './entities/profil-vesel.entity';
import { VesselDetailResponseDto } from './dto/vessel-detail-response.dto';

@Injectable()
export class VesselDetailService {
  constructor(
    @InjectRepository(ProfilVesel)
    private readonly profilVeselRepository: Repository<ProfilVesel>,
  ) {}

  async getVesselDetail(): Promise<VesselDetailResponseDto> {
    const profilVesels = await this.profilVeselRepository.find({
      relations: [
        'maklumatAmVesel',
        'lesen',
        'kulit',
        'enjin',
        'enjin.maklumatAmEnjin',
        'enjin.gambar',
        'peralatan',
        'kru',
        'pengkalan',
        'pemilikan',
        'kesalahan',
        'pendaftaranAntarabangsa',
      ],
    });

    // Transform entities to DTOs
    const data = profilVesels.map(profilVesel => ({
      profilVesel: {
        maklumatAmVesel: profilVesel.maklumatAmVesel,
        lesen: profilVesel.lesen,
        kulit: profilVesel.kulit,
        enjin: {
          maklumatAmEnjin: profilVesel.enjin?.maklumatAmEnjin,
          gambar: profilVesel.enjin?.gambar,
        },
        peralatan: profilVesel.peralatan,
        kru: profilVesel.kru,
        pengkalan: profilVesel.pengkalan,
        pemilikan: profilVesel.pemilikan,
        // Note: pematuhan is not implemented yet as it was complex
        pematuhan: null, // TODO: Implement pematuhan entity and relations
        kesalahan: profilVesel.kesalahan,
        pendaftaranAntarabangsa: profilVesel.pendaftaranAntarabangsa,
      },
    }));

    return { data };
  }

  async getVesselDetailById(id: string): Promise<VesselDetailResponseDto> {
    const profilVesel = await this.profilVeselRepository.findOne({
      where: { id },
      relations: [
        'maklumatAmVesel',
        'lesen',
        'kulit',
        'enjin',
        'enjin.maklumatAmEnjin',
        'enjin.gambar',
        'peralatan',
        'kru',
        'pengkalan',
        'pemilikan',
        'kesalahan',
        'pendaftaranAntarabangsa',
      ],
    });

    if (!profilVesel) {
      throw new NotFoundException('Vessel not found');
    }

    const data = [{
      profilVesel: {
        maklumatAmVesel: profilVesel.maklumatAmVesel,
        lesen: profilVesel.lesen,
        kulit: profilVesel.kulit,
        enjin: {
          maklumatAmEnjin: profilVesel.enjin?.maklumatAmEnjin,
          gambar: profilVesel.enjin?.gambar,
        },
        peralatan: profilVesel.peralatan,
        kru: profilVesel.kru,
        pengkalan: profilVesel.pengkalan,
        pemilikan: profilVesel.pemilikan,
        pematuhan: null, // TODO: Implement pematuhan entity and relations
        kesalahan: profilVesel.kesalahan,
        pendaftaranAntarabangsa: profilVesel.pendaftaranAntarabangsa,
      },
    }];

    return { data };
  }
}