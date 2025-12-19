import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PantasCertificatesService } from './pantas-certificates.service';
import { CreatePantasCertificatesDto } from './dto/create-pantas-certificates.dto';
import { UpdatePantasCertificatesDto } from './dto/update-pantas-certificates.dto';

@Controller('pantas_certificates')
export class PantasCertificatesController {
  constructor(private readonly pantascertificatesservice: PantasCertificatesService) {}

  @Post()
  create(@Body() createPantasCertificatesDto: CreatePantasCertificatesDto) {
    return this.pantascertificatesservice.create(createPantasCertificatesDto);
  }

  @Get()
  findAll() {
    return this.pantascertificatesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pantascertificatesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pantascertificatesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePantasCertificatesDto: UpdatePantasCertificatesDto) {
    return this.pantascertificatesservice.update(id, updatePantasCertificatesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pantascertificatesservice.remove(id);
  }
}