import { Module } from '@nestjs/common';
import { ProfilePentadbirSklService } from './profile-pentadbir-skls.service';
import { ProfilePentadbirSklEntityController } from './profile-pentadbir-skls.controller';
import { ProfilePentadbirSklEntity } from './profile-pentadbir-skls.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePentadbirSklEntity])],
  providers: [ProfilePentadbirSklService],
  controllers: [ProfilePentadbirSklEntityController],
  exports: [ProfilePentadbirSklService],
})
export class ProfilePentadbirSklModule {}
