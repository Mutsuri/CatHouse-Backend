import { Controller, Post, Body, Get, Req, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { User as UserModel } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { GoogleOAuthGuard } from './google-oauth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Post('data')
  async signupUser(
    @Body() userData: { name?: string; email: string; birthYear?: number },
  ): Promise<UserModel> {
    return this.appService.createUser(userData);
  }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.appService.googleLogin(req);
  }
}