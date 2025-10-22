import { Module } from '@nestjs/common';
import { KruApplicationForeignService } from './kru-application-foreigns.service';
import { KruApplicationForeignEntityController } from './kru-application-foreigns.controller';
import { KruApplicationForeignEntity } from './kru-application-foreigns.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationForeignEntity])],
  providers: [KruApplicationForeignService],
  controllers: [KruApplicationForeignEntityController],
  exports: [KruApplicationForeignService],
})
export class KruApplicationForeignModule {}
