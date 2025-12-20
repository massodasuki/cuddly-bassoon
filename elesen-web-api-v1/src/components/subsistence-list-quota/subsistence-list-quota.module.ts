import { Module } from '@nestjs/common';
import { SubsistenceListQuotaEntityervice } from './subsistence-list-quota.service';
import { SubsistenceListQuotaEntityController } from './subsistence-list-quota.controller';
import { SubsistenceListQuotaEntity } from './subsistence-list-quota.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceListQuotaEntity])],
  providers: [SubsistenceListQuotaEntityervice],
  controllers: [SubsistenceListQuotaEntityController],
  exports: [SubsistenceListQuotaEntityervice],
})
export class SubsistenceListQuotaModule {}

