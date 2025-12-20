import { Module } from '@nestjs/common';
import { SubsistenceListQuotaHqService } from './subsistence-list-quota-hqs.service';
import { SubsistenceListQuotaHqEntityController } from './subsistence-list-quota-hqs.controller';
import { SubsistenceListQuotaHqEntity } from './subsistence-list-quota-hqs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceListQuotaHqEntity])],
  providers: [SubsistenceListQuotaHqService],
  controllers: [SubsistenceListQuotaHqEntityController],
  exports: [SubsistenceListQuotaHqService],
})
export class SubsistenceListQuotaHqModule {}

