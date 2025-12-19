import { Module } from '@nestjs/common';
import { CauseLettersService } from './cause-letters.service';
import { CauseLettersController } from './cause-letters.controller';
import { CauseLettersEntity } from './cause-letters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLettersEntity])],
  providers: [CauseLettersService],
  controllers: [CauseLettersController],
  exports: [CauseLettersService],
})
export class CauseLettersModule {}