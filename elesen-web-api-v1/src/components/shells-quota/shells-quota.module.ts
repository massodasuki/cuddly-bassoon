import { Module } from '@nestjs/common';
import { ShellsQuotaEntityervice } from './shells-quota.service';
import { ShellsQuotaEntityController } from './shells-quota.controller';
import { ShellsQuotaEntity } from './shells-quota.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShellsQuotaEntity])],
  providers: [ShellsQuotaEntityervice],
  controllers: [ShellsQuotaEntityController],
  exports: [ShellsQuotaEntityervice],
})
export class ShellsQuotaModule {}

