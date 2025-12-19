// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
