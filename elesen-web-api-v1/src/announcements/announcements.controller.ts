import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnnouncementService } from './announcements.service';
import { CreateAnnouncementEntityDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementEntityDto } from './dto/update-announcement.dto';

@Controller('announcements')
export class AnnouncementEntityController {
  constructor(private readonly announcementsService: AnnouncementService) {}

  @Post()
  create(@Body() createAnnouncementEntityDto: CreateAnnouncementEntityDto) {
    return this.announcementsService.create(createAnnouncementEntityDto);
  }

  @Get()
  findAll() {
    return this.announcementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnnouncementEntityDto: UpdateAnnouncementEntityDto) {
    return this.announcementsService.update(id, updateAnnouncementEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.announcementsService.remove(id);
  }
}