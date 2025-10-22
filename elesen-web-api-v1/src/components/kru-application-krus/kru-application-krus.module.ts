import { Module } from '@nestjs/common';
import { KruApplicationKruService } from './kru-application-krus.service';
import { KruApplicationKruEntityController } from './kru-application-krus.controller';
import { KruApplicationKruEntity } from './kru-application-krus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationKruEntity])],
  providers: [KruApplicationKruService],
  controllers: [KruApplicationKruEntityController],
  exports: [KruApplicationKruService],
})
export class KruApplicationKruModule {}
