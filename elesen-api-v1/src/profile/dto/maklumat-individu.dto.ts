import { MaklumatAmDto } from './maklumat-am.dto';
import { AlamatDto } from './alamat.dto';

export class MaklumatIndividuDto {
  id: string;
  name: string;
  username: string;
  profile_picture?: string;
  maklumatAm: MaklumatAmDto;
  alamatSemasa: AlamatDto;
  alamatSurat: AlamatDto;
}