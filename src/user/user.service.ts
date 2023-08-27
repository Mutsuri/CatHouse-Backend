import {
  Injectable,
  BadRequestException
} from '@nestjs/common';
import {
  CreateUserDto
} from './create-user.dto';
import {
  HashService
} from './hash.service';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {

  constructor(private readonly prisma:PrismaService) {}

  async getUserbyEmail(email:string):Promise<User>{
    return this.prisma.user.findFirst({where:{email}})
  }
  
  async createUser(email:string, password:string){
    return this.prisma.user.create({data:{email,pw:password}})
  }
}