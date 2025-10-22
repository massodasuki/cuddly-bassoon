import { Controller, Get, Param } from '@nestjs/common';
import { ConfiscationDocService } from './confiscation-docs.service';
import { ConfiscationDocEntity } from './confiscation-docs.entity';

@Controller('confiscation-docs')
export class ConfiscationDocEntityController {
  constructor(private readonly confiscationDocsService: ConfiscationDocService) {}

  @Get()
  findAll(): Promise<ConfiscationDocEntity[]> {
    return this.confiscationDocsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ConfiscationDocEntity> {
    return this.confiscationDocsService.findOne(id);
  }
}
