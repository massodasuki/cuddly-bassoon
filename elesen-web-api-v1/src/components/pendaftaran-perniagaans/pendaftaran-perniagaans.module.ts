import { Module } from '@nestjs/common';
import { PendaftaranPerniagaanService } from './pendaftaran-perniagaans.service';
import { PendaftaranPerniagaanEntityController } from './pendaftaran-perniagaans.controller';
import { PendaftaranPerniagaanEntity } from './pendaftaran-perniagaans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PendaftaranPerniagaanEntity])],
  providers: [PendaftaranPerniagaanService],
  controllers: [PendaftaranPerniagaanEntityController],
  exports: [PendaftaranPerniagaanService],
})
export class PendaftaranPerniagaanModule {}
