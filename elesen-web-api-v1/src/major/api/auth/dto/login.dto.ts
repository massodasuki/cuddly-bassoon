// src/auth/dto/login.dto.ts
import { ApiPropertyOptional } from '@nestjs/common';

export class LoginDto {
   @ApiPropertyOptional({ default: "asyraf", description: 'Username' })
  username: string;

  @ApiPropertyOptional({ default: "abcd" })
  password: string;

  @ApiPropertyOptional({ default: "true" })
  sso: string;

  @ApiPropertyOptional({ default: "abcd" })
  name: string;

  @ApiPropertyOptional({ default: "abcd" })
  nric: string;
}
