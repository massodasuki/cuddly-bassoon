import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementService } from './announcements.service';
import { AnnouncementEntityController } from './announcements.controller';
import { AnnouncementEntity } from './announcement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnnouncementEntity])],
  controllers: [AnnouncementEntityController],
  providers: [AnnouncementService],
  exports: [AnnouncementService],
})
export class AnnouncementModule {}