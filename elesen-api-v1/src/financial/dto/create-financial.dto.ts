import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFinancialDto {
  @ApiProperty({ description: 'User ID', example: 'uuid-string' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Bank name', example: 'Bank ABC', required: false })
  @IsOptional()
  @IsString()
  bank_name?: string;

  @ApiProperty({ description: 'Branch name', example: 'Main Branch', required: false })
  @IsOptional()
  @IsString()
  branch?: string;

  @ApiProperty({ description: 'Account number', example: '1234567890', required: false })
  @IsOptional()
  @IsString()
  account_no?: string;

  @ApiProperty({ description: 'Bantuan Elaun Sara Hidup', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  bantuan_elaun_sara_hidup?: boolean;

  @ApiProperty({ description: 'Bantuan', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  bantuan?: boolean;

  @ApiProperty({ description: 'KWSP', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  kwsp?: boolean;

  @ApiProperty({ description: 'Pencen', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  pencen?: boolean;
}
