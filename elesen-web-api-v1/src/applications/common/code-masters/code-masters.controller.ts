import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CodeMastersService } from './code-masters.service';
import { CreateCodeMasterDto } from './dto/create-code-master.dto';
import { UpdateCodeMasterDto } from './dto/update-code-master.dto';
import { PaginationQueryDto } from '../dto/pagination-query.dto';

@Controller('api/v1/applications/code-masters')
export class CodeMastersController {
  constructor(private readonly codeMastersService: CodeMastersService) {}

  @Post()
  create(@Body() createCodeMasterDto: CreateCodeMasterDto) {
    return this.codeMastersService.create(createCodeMasterDto);
  }

  @Get()
  findAll() {
    return this.codeMastersService.findAll();
  }

  @Get('/query')
  async findByQuery(
    @Query() paginationQuery: PaginationQueryDto,
    @Query('type') type: string,
  ) {
    return this.codeMastersService.findByType(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codeMastersService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeMasterDto: UpdateCodeMasterDto) {
    return this.codeMastersService.update(id, updateCodeMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codeMastersService.remove(id);
  }
}
