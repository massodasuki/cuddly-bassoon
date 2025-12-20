import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CfgLicensesService } from './cfg-licenses.service';
import { CreateCfgLicenseDto } from './dto/create-cfg-license.dto';
import { UpdateCfgLicenseDto } from './dto/update-cfg-license.dto';

@Controller('cfg-licenses')
export class CfgLicensesController {
  constructor(private readonly cfgLicensesService: CfgLicensesService) {}

  @Post()
  create(@Body() createCfgLicenseDto: CreateCfgLicenseDto) {
    return this.cfgLicensesService.create(createCfgLicenseDto);
  }

  @Get()
  findAll() {
    return this.cfgLicensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cfgLicensesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCfgLicenseDto: UpdateCfgLicenseDto) {
    return this.cfgLicensesService.update(id, updateCfgLicenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cfgLicensesService.remove(id);
  }
}
