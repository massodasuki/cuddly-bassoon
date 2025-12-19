import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseTransferLogsService } from './base-transfer-logs.service';
import { CreateBaseTransferLogsDto } from './dto/create-base-transfer-logs.dto';
import { UpdateBaseTransferLogsDto } from './dto/update-base-transfer-logs.dto';

@Controller('base_transfer_logs')
export class BaseTransferLogsController {
  constructor(private readonly basetransferlogsservice: BaseTransferLogsService) {}

  @Post()
  create(@Body() createBaseTransferLogsDto: CreateBaseTransferLogsDto) {
    return this.basetransferlogsservice.create(createBaseTransferLogsDto);
  }

  @Get()
  findAll() {
    return this.basetransferlogsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basetransferlogsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.basetransferlogsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseTransferLogsDto: UpdateBaseTransferLogsDto) {
    return this.basetransferlogsservice.update(id, updateBaseTransferLogsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basetransferlogsservice.remove(id);
  }
}