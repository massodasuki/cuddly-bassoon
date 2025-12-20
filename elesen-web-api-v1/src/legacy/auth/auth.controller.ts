import { Controller, Post, Body, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response, Request } from 'express';
import { JwtRefreshGuard } from './jwt/jwt-refresh.guard';
import { ApiQuery, ApiTags, ApiOkResponse  } from '@nestjs/swagger';
import { LoginResponseDto } from 'src/swagger/response/login-response.dto';

@ApiTags('Login')
@Controller('/api/v1/applications/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('login')
    @ApiQuery({ name: 'username', required: true, description: 'ID Pegawai' })
    @ApiQuery({ name: 'password', required: false })
    @ApiQuery({ name: 'sso', required: false })
    @ApiQuery({ name: 'name', required: false })
    @ApiQuery({ name: 'nric', required: false })
    @ApiOkResponse({
      description: 'Returns JWT access token after successful login',
      type: LoginResponseDto,
    })
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    let user;
    if(dto.sso != null ) {
      user = await this.authService.validateUsername(dto.username);
      if(user == null) {
        user = await this.authService.createSSOUser(dto.username, dto.name)
      }
    }
    if(dto.password != null) {
      user = await this.authService.validateUser(dto.username, dto.password);
    }
    
    return this.authService.loginWithProfile(user, res);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    return this.authService.refreshToken(req, res);
  }
}

