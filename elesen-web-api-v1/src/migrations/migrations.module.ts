import { Module } from '@nestjs/common';
import { MigrationService } from './migrations.service';
import { MigrationEntityController } from './migrations.controller';
import { MigrationEntity } from './migrations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MigrationEntity])],
  providers: [MigrationService],
  controllers: [MigrationEntityController],
  exports: [MigrationService],
})
export class MigrationModule {}
