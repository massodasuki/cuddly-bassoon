// Main API module that groups all major/api functionality
import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    CoreModule,
    VesselsGroupModule,
    ProfilesGroupModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    CoreModule,
    VesselsGroupModule,
    ProfilesGroupModule,
  ],
})
export class ApiModule {}