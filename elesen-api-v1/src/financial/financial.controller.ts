import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FinancialService } from './financial.service';
import { CreateFinancialDto } from './dto/create-financial.dto';
import { UpdateFinancialDto } from './dto/update-financial.dto';
import { Financial } from './entities/financial.entity';

@ApiTags('financial')
@Controller('/api/v1/applications/financial')
export class FinancialController {
  constructor(private readonly financialService: FinancialService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new financial record' })
  @ApiResponse({ status: 201, description: 'The financial record has been successfully created.', type: Financial })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createFinancialDto: CreateFinancialDto): Promise<Financial> {
    return this.financialService.create(createFinancialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all financial records' })
  @ApiResponse({ status: 200, description: 'List of financial records.', type: [Financial] })
  findAll(): Promise<Financial[]> {
    return this.financialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a financial record by ID' })
  @ApiResponse({ status: 200, description: 'The financial record.', type: Financial })
  @ApiResponse({ status: 404, description: 'Financial record not found.' })
  findOne(@Param('id') id: string): Promise<Financial> {
    return this.financialService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a financial record' })
  @ApiResponse({ status: 200, description: 'The financial record has been successfully updated.', type: Financial })
  @ApiResponse({ status: 404, description: 'Financial record not found.' })
  update(@Param('id') id: string, @Body() updateFinancialDto: UpdateFinancialDto): Promise<Financial> {
    return this.financialService.update(id, updateFinancialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a financial record' })
  @ApiResponse({ status: 200, description: 'The financial record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Financial record not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.financialService.remove(id);
  }
}
