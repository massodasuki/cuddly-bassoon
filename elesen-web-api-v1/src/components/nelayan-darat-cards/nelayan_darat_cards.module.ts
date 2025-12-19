import { Module } from '@nestjs/common';
import { NelayanDaratCardsService } from './nelayan_darat_cards.service';
import { NelayanDaratCardsController } from './nelayan_darat_cards.controller';
import { NelayanDaratCardsEntity } from './nelayan_darat_cards.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NelayanDaratCardsEntity])],
  providers: [NelayanDaratCardsService],
  controllers: [NelayanDaratCardsController],
  exports: [NelayanDaratCardsService],
})
export class NelayanDaratCardsModule {}