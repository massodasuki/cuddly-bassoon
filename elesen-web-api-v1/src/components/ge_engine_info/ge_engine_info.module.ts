import { Module } from '@nestjs/common';
import { GeEngineInfoService } from './ge_engine_info.service';
import { GeEngineInfoController } from './ge_engine_info.controller';
import { GeEngineInfoEntity } from './ge_engine_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GeEngineInfoEntity])],
  providers: [GeEngineInfoService],
  controllers: [GeEngineInfoController],
  exports: [GeEngineInfoService],
})
export class GeEngineInfoModule {}