import { Column } from 'typeorm';

export class MaklumatTambahan {
  @Column({ name: 'penerima_esp', type: 'boolean', default: false })
  penerimaESP: boolean;

  @Column({ name: 'penerima_bantuan', type: 'boolean', default: false })
  penerimaBantuan: boolean;

  @Column({ name: 'pencarum_kwsp', type: 'boolean', default: false })
  pencarumKWSP: boolean;

  @Column({ name: 'penerima_pencen', type: 'boolean', default: false })
  penerimaPencen: boolean;
}