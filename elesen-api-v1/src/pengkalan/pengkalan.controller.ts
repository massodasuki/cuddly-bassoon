import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PengkalanService } from './pengkalan.service';
import { CreatePengkalanDto } from './dto/create-pengkalan.dto';
import { UpdatePengkalanDto } from './dto/update-pengkalan.dto';
import { Pengkalan } from './entities/pengkalan.entity';

@ApiTags('pengkalan')
@Controller('/api/v1/applications/pengkalan')
export class PengkalanController {
  constructor(private readonly pengkalanService: PengkalanService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pengkalan record' })
  @ApiResponse({ status: 201, description: 'The pengkalan record has been successfully created.', type: Pengkalan })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createPengkalanDto: CreatePengkalanDto): Promise<Pengkalan> {
    return this.pengkalanService.create(createPengkalanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pengkalan records' })
  @ApiResponse({ status: 200, description: 'List of pengkalan records.', type: [Pengkalan] })
  findAll(): Promise<Pengkalan[]> {
    return this.pengkalanService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pengkalan record by ID' })
  @ApiResponse({ status: 200, description: 'The pengkalan record.', type: Pengkalan })
  @ApiResponse({ status: 404, description: 'Pengkalan record not found.' })
  findOne(@Param('id') id: string): Promise<Pengkalan> {
    return this.pengkalanService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pengkalan record' })
  @ApiResponse({ status: 200, description: 'The pengkalan record has been successfully updated.', type: Pengkalan })
  @ApiResponse({ status: 404, description: 'Pengkalan record not found.' })
  update(@Param('id') id: string, @Body() updatePengkalanDto: UpdatePengkalanDto): Promise<Pengkalan> {
    return this.pengkalanService.update(id, updatePengkalanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pengkalan record' })
  @ApiResponse({ status: 200, description: 'The pengkalan record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Pengkalan record not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.pengkalanService.remove(id);
  }
}