import { Module } from '@nestjs/common';
import { KruApplicationForeignKruService } from './kru-application-foreign-krus.service';
import { KruApplicationForeignKruEntityController } from './kru-application-foreign-krus.controller';
import { KruApplicationForeignKruEntity } from './kru-application-foreign-krus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationForeignKruEntity])],
  providers: [KruApplicationForeignKruService],
  controllers: [KruApplicationForeignKruEntityController],
  exports: [KruApplicationForeignKruService],
})
export class KruApplicationForeignKruModule {}
