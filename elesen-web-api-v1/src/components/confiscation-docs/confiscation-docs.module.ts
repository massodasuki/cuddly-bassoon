import { Module } from '@nestjs/common';
import { ConfiscationDocService } from './confiscation-docs.service';
import { ConfiscationDocEntityController } from './confiscation-docs.controller';
import { ConfiscationDocEntity } from './confiscation-docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConfiscationDocEntity])],
  providers: [ConfiscationDocService],
  controllers: [ConfiscationDocEntityController],
  exports: [ConfiscationDocService],
})
export class ConfiscationDocModule {}

