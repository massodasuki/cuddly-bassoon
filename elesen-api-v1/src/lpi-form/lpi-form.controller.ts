import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFiles,
  Body,
  Req,
  Res,
  Param,
  Patch,
} from '@nestjs/common'
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { CreateLpiFormDto } from './dto/create-lpi-form.dto'
import { LpiFormService } from './lpi-form.service'
import multer, { diskStorage } from 'multer'
import { extname } from 'path'
import { UpdateUserDto } from 'src/users/dto/update-user.dto'

@Controller('api/v1/applications/lpi-form')
export class LpiFormController {
  constructor (private readonly lpiFormService: LpiFormService) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create (@Body() body: any, @Req() req, @Res() res) {
    const uploaded = (req.files || []).filter(f =>
      f.fieldname.startsWith('img_'),
    )
    console.log('Received Images:', uploaded)

    let img = {
      message: 'Dynamic image fields uploaded',
      files: uploaded.map(f => ({
        field: f.fieldname,
        filename: f.filename,
        originalname: f.originalname,
      })),
    }

    return this.lpiFormService.submitForm(body, uploaded, res)
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':formId')
  findOne (@Param('formId') formId: string) {
    return this.lpiFormService.findOne(formId)
  }




  @Patch(':formId')
  @UseInterceptors(AnyFilesInterceptor())
  async update (@Param('formId') formId: string, @Body() body: any, @Req() req, @Res() res) {
    const uploaded = (req.files || []).filter(f =>
      f.fieldname.startsWith('img_'),
    )
    console.log('Received Images:', uploaded)

    let img = {
      message: 'Dynamic image fields uploaded',
      files: uploaded.map(f => ({
        field: f.fieldname,
        filename: f.filename,
        originalname: f.originalname,
      })),
    }

    return this.lpiFormService.updateForm(formId, body, uploaded, res)
  }
}
