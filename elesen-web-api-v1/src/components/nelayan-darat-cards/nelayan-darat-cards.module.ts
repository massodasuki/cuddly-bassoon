import { Module } from '@nestjs/common';
import { NelayanDaratCardsService } from './nelayan-darat-cards.service';
import { NelayanDaratCardsController } from './nelayan-darat-cards.controller';
import { NelayanDaratCardsEntity } from './nelayan-darat-cards.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NelayanDaratCardsEntity])],
  providers: [NelayanDaratCardsService],
  controllers: [NelayanDaratCardsController],
  exports: [NelayanDaratCardsService],
})
export class NelayanDaratCardsModule {}