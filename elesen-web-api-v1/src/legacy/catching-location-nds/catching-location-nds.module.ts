import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatchingLocationNdsService } from './catching-location-nds.service';
import { CatchingLocationNdsController } from './catching-location-nds.controller';
import { CatchingLocationNdEntity } from './catching-location-nds.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatchingLocationNdEntity])],
  controllers: [CatchingLocationNdsController],
  providers: [CatchingLocationNdsService],
})
export class CatchingLocationNdsModule {}
