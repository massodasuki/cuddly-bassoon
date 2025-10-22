import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeMastersService } from './code-masters.service';
import { CodeMastersController } from './code-masters.controller';
import { CodeMaster } from './code-masters.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodeMaster])],
  controllers: [CodeMastersController],
  providers: [CodeMastersService],
})
export class CodeMastersModule {}