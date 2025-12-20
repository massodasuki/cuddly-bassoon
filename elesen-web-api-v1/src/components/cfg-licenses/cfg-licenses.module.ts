import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CfgLicensesService } from './cfg-licenses.service';
import { CfgLicensesController } from './cfg-licenses.controller';
import { CfgLicense } from './cfg-licenses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CfgLicense])],
  controllers: [CfgLicensesController],
  providers: [CfgLicensesService],
})
export class CfgLicensesModule {}
