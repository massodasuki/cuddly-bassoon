import { Module } from '@nestjs/common';
import { ProfilePengusahaSklService } from './profile-pengusaha-skls.service';
import { ProfilePengusahaSklEntityController } from './profile-pengusaha-skls.controller';
import { ProfilePengusahaSklEntity } from './profile-pengusaha-skls.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePengusahaSklEntity])],
  providers: [ProfilePengusahaSklService],
  controllers: [ProfilePengusahaSklEntityController],
  exports: [ProfilePengusahaSklService],
})
export class ProfilePengusahaSklModule {}

