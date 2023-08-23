import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User as UserModel } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

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

@Controller('google')
export class AppController1 {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }
}