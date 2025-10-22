import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentApprovesService } from './appointment-approves.service';
import { AppointmentApprovesController } from './appointment-approves.controller';
import { AppointmentApprove } from './appointment-approves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentApprove])],
  controllers: [AppointmentApprovesController],
  providers: [AppointmentApprovesService],
  exports: [AppointmentApprovesService],
})
export class AppointmentApprovesModule {}