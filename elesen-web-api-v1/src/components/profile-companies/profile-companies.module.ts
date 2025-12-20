import { Module } from '@nestjs/common';
import { ProfileCompanieService } from './profile-companies.service';
import { ProfileCompanieEntityController } from './profile-companies.controller';
import { ProfileCompanieEntity } from './profile-companies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileCompanieEntity])],
  providers: [ProfileCompanieService],
  controllers: [ProfileCompanieEntityController],
  exports: [ProfileCompanieService],
})
export class ProfileCompanieModule {}

