import { Module } from '@nestjs/common';
import { EshndQuotaService } from './eshnd-quotas.service';
import { EshndQuotaEntityController } from './eshnd-quotas.controller';
import { EshndQuotaEntity } from './eshnd-quotas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndQuotaEntity])],
  providers: [EshndQuotaService],
  controllers: [EshndQuotaEntityController],
  exports: [EshndQuotaService],
})
export class EshndQuotaModule {}

