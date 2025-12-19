// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from './types/jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
    // Destructure to exclude the hashed password before returning
      const { password: _hashedPassword, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async validateUsername(username: string) {
    const user = await this.usersService.findByUsername(username);
    if (user) {
      const { ...result } = user;
      return result;
    }
    return null;
    // throw new UnauthorizedException('User not found');
  }

  async createSSOUser(username: string, name: string){
    const email =  `noemail+${username}@example.com`;
    const password = "$2y$10$DummyPasswordHash0000000000000000000000000000000000";
    const isActive = true;
    const isAdmin = false;

    const user = await this.usersService.createSSOUser(username, name, email, password, isActive, isAdmin)
    if (user) {
      const { ...result } = user;
      return result;
    }
  }

  getTokens(userId: number, username: string) {
    const payload: JwtPayload = { sub: userId, username };

    const accessToken = this.jwtService.sign(payload, {
      secret: 'ACCESS_SECRET',
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: 'REFRESH_SECRET',
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

    async loginWithProfile(user: any, res: any) {
    const tokens = this.getTokens(user.id, user.username);
    let userProflie =  await this.usersService.getUserWithProfile(user.id);
    console.log(userProflie);
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return res.json({ accessToken: tokens.accessToken, profile : userProflie });
  }

  async login(user: any, res: any) {
    const tokens = this.getTokens(user.id, user.username);
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return res.json({ accessToken: tokens.accessToken });
  }

  async logout(res: any) {
    res.clearCookie('refresh_token');
    res.status(200).json({ message: 'Logged out' });
  }

  async refreshToken(req: any, res: any) {
    const token = req.cookies['refresh_token'];
    try {
      const payload = this.jwtService.verify(token, { secret: 'REFRESH_SECRET' });
      const tokens = this.getTokens(payload.sub, payload.username);
      res.cookie('refresh_token', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      return res.json({ accessToken: tokens.accessToken });
    } catch (err) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
