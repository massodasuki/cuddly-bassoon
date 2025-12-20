import { Controller, Get, Post, Body, Param, Put, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AppointmentsInspectionsService } from './appointments-inspections.service';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments-inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments-inspections.dto';
import { AppointmentsInspectionsResponseDto } from './dto/appointments-inspections-response.dto';

@Controller('/api/v1/applications/appointments-inspections')
export class AppointmentsInspectionsController {
  constructor(private readonly appointmentsInspectionsService: AppointmentsInspectionsService) {}

  @Post()
  create(@Body() createAppointmentsInspectionsDto: CreateAppointmentsInspectionsDto): Promise<AppointmentsInspectionsResponseDto> {
    return this.appointmentsInspectionsService.create(createAppointmentsInspectionsDto);
  }

  @Post('inspection')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'surat_wakil', maxCount: 1 }
  ]))
  createWithFiles(
    @Body() createDto: CreateAppointmentsInspectionsDto,
    @UploadedFiles() files: { [key: string]: Express.Multer.File[] },
  ): Promise<AppointmentsInspectionsResponseDto> {
    return this.appointmentsInspectionsService.createWithFiles(createDto, files);
  }

  @Get()
  findAll(): Promise<AppointmentsInspectionsResponseDto[]> {
    return this.appointmentsInspectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AppointmentsInspectionsResponseDto> {
    return this.appointmentsInspectionsService.findOne(id);
  }

  @Get('application-id/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string): Promise<AppointmentsInspectionsResponseDto> {
    return this.appointmentsInspectionsService.findByApplicationId(applicationId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppointmentsInspectionsDto: UpdateAppointmentsInspectionsDto): Promise<AppointmentsInspectionsResponseDto> {
    return this.appointmentsInspectionsService.update(id, updateAppointmentsInspectionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appointmentsInspectionsService.remove(id);
  }
}
