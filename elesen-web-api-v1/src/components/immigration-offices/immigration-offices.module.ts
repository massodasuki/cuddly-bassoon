import { Module } from '@nestjs/common';
import { ImmigrationOfficeService } from './immigration-offices.service';
import { ImmigrationOfficeEntityController } from './immigration-offices.controller';
import { ImmigrationOfficeEntity } from './immigration-offices.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ImmigrationOfficeEntity])],
  providers: [ImmigrationOfficeService],
  controllers: [ImmigrationOfficeEntityController],
  exports: [ImmigrationOfficeService],
})
export class ImmigrationOfficeModule {}
