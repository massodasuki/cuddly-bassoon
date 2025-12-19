import { Module } from '@nestjs/common';
import { CauseLettersService } from './cause_letters.service';
import { CauseLettersController } from './cause_letters.controller';
import { CauseLettersEntity } from './cause_letters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLettersEntity])],
  providers: [CauseLettersService],
  controllers: [CauseLettersController],
  exports: [CauseLettersService],
})
export class CauseLettersModule {}