import { Module } from '@nestjs/common';
import { ParliamentService } from './parliaments.service';
import { ParliamentEntityController } from './parliaments.controller';
import { ParliamentEntity } from './parliaments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParliamentEntity])],
  providers: [ParliamentService],
  controllers: [ParliamentEntityController],
  exports: [ParliamentService],
})
export class ParliamentModule {}
