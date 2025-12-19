import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBankAccountsService } from './user_bank_accounts.service';
import { CreateUserBankAccountsDto } from './dto/create-user_bank_accounts.dto';
import { UpdateUserBankAccountsDto } from './dto/update-user_bank_accounts.dto';

@Controller('user_bank_accounts')
export class UserBankAccountsController {
  constructor(private readonly userbankaccountsservice: UserBankAccountsService) {}

  @Post()
  create(@Body() createUserBankAccountsDto: CreateUserBankAccountsDto) {
    return this.userbankaccountsservice.create(createUserBankAccountsDto);
  }

  @Get()
  findAll() {
    return this.userbankaccountsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userbankaccountsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.userbankaccountsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBankAccountsDto: UpdateUserBankAccountsDto) {
    return this.userbankaccountsservice.update(id, updateUserBankAccountsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userbankaccountsservice.remove(id);
  }
}