// Core module for authentication and user management
import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([]),
    AuthModule,
    UsersModule,
    FcmModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    AuthModule,
    UsersModule,
    FcmModule,
  ],
})
export class CoreModule {}