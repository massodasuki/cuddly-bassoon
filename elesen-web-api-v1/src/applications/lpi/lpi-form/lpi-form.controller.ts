import { Controller, Post, Body } from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';

@Controller('lpi-form')
export class LpiFormController {
  constructor(private readonly lpiFormService: LpiFormService) {}

  @Post()
  create(@Body() createLpiFormDto: CreateLpiFormDto) {
    return this.lpiFormService.createLpiForm(createLpiFormDto);
  }
}