import { Module } from '@nestjs/common';
import { UserModule3Service } from './user_module3.service';
import { UserModule3Controller } from './user_module3.controller';
import { UserModule3Entity } from './user_module3.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserModule3Entity])],
  providers: [UserModule3Service],
  controllers: [UserModule3Controller],
  exports: [UserModule3Service],
})
export class UserModule3Module {}