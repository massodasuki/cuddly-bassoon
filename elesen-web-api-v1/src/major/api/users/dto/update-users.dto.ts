import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}