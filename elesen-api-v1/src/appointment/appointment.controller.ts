import { Controller, Post, UseInterceptors, Body, Req, Res } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@ApiTags('Appointment')
@Controller('/api/v1/applications/appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create Appointment' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Appointment form data with image. Send as multipart/form-data with JSON fields and file uploads.',
    schema: {
      type: 'object',
      properties: {
        appointment: {
          type: 'string',
          description: 'JSON string of appointment object',
          example: '{"kehadiran": {"hadir": true, "pemilik": true, "wakil": {"nama": "Ali Hassan", "noKadPengenalan": "850120145585", "suratWakilImg": ""}}}'
        },
        suratWakilImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for surat wakil'
        }
      },
      required: ['appointment']
    }
  })
  @UseInterceptors(AnyFilesInterceptor())
  async create(@Body() body: CreateAppointmentDto, @Req() req, @Res() res) {
    console.log('body.appointment:', body.appointment, typeof body.appointment);
    const uploadedFiles = req.files || [];
    return this.appointmentService.createAppointment(body, uploadedFiles, res);
  }
}