import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationV2ProfileUserService } from './application-v2-profile-user.service';
import { CreateApplicationV2ProfileUserDto } from './dto/create-application-v2-profile-user.dto';
import { UpdateApplicationV2ProfileUserDto } from './dto/update-application-v2-profile-user.dto';

@Controller('application-v2-profile-user')
export class ApplicationV2ProfileUserController {
  constructor(private readonly applicationV2ProfileUserService: ApplicationV2ProfileUserService) {}

  @Post()
  create(@Body() createApplicationV2ProfileUserDto: CreateApplicationV2ProfileUserDto) {
    return this.applicationV2ProfileUserService.create(createApplicationV2ProfileUserDto);
  }

  @Get()
  findAll() {
    return this.applicationV2ProfileUserService.findAll();
  }

  @Get(':application_id/:profile_user_id')
  findOne(@Param('application_id') application_id: string, @Param('profile_user_id') profile_user_id: string) {
    return this.applicationV2ProfileUserService.findOne(application_id, profile_user_id);
  }

  @Patch(':application_id/:profile_user_id')
  update(@Param('application_id') application_id: string, @Param('profile_user_id') profile_user_id: string, @Body() updateApplicationV2ProfileUserDto: UpdateApplicationV2ProfileUserDto) {
    return this.applicationV2ProfileUserService.update(application_id, profile_user_id, updateApplicationV2ProfileUserDto);
  }

  @Delete(':application_id/:profile_user_id')
  remove(@Param('application_id') application_id: string, @Param('profile_user_id') profile_user_id: string) {
    return this.applicationV2ProfileUserService.remove(application_id, profile_user_id);
  }
}