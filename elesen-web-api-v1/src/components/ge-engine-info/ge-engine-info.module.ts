import { Module } from '@nestjs/common';
import { GeEngineInfoService } from './ge-engine-info.service';
import { GeEngineInfoController } from './ge-engine-info.controller';
import { GeEngineInfoEntity } from './ge-engine-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GeEngineInfoEntity])],
  providers: [GeEngineInfoService],
  controllers: [GeEngineInfoController],
  exports: [GeEngineInfoService],
})
export class GeEngineInfoModule {}