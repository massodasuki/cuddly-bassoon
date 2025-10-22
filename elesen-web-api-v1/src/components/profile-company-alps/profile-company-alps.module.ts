import { Module } from '@nestjs/common';
import { ProfileCompanyAlpService } from './profile-company-alps.service';
import { ProfileCompanyAlpEntityController } from './profile-company-alps.controller';
import { ProfileCompanyAlpEntity } from './profile-company-alps.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileCompanyAlpEntity])],
  providers: [ProfileCompanyAlpService],
  controllers: [ProfileCompanyAlpEntityController],
  exports: [ProfileCompanyAlpService],
})
export class ProfileCompanyAlpModule {}
