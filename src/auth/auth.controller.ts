import {
    AuthService
  } from './auth.service';
  import {
    Controller,
    Request,
    UseGuards,
    Post,
    Res
  } from '@nestjs/common';
  import {
    AuthGuard
  } from '@nestjs/passport';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('/register')
    async register(@Request() req) {
      const {email, password} = req.body
      return this.authService.register(email, password);
    }

    @Post('/login')
    async login(@Request() req, @Res() res) {
      const {email, password} = req.body
      return this.authService.login(email, password);
    }
  }