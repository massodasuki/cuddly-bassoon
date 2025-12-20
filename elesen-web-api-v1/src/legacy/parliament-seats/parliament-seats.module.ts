import { Module } from '@nestjs/common';
import { ParliamentSeatService } from './parliament-seats.service';
import { ParliamentSeatEntityController } from './parliament-seats.controller';
import { ParliamentSeatEntity } from './parliament-seats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParliamentSeatEntity])],
  providers: [ParliamentSeatService],
  controllers: [ParliamentSeatEntityController],
  exports: [ParliamentSeatService],
})
export class ParliamentSeatModule {}

