import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): any {
    return 'You Come To Backend!';
  }

  async createUser(userData): Promise<User> {
    const result = await this.prisma.user.create({ data: userData });
    return result;
  }
  
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}