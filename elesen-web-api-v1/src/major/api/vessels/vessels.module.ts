import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [
          TypeOrmModule.forFeature([VesselEntity])
        ],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
