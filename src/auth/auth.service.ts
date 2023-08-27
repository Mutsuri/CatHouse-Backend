import {
    UserService
  } from 'src/user/user.service';
  import {
    Injectable
  } from '@nestjs/common';
  import {
    JwtService
  } from '@nestjs/jwt';
  import {
    HashService
  } from 'src/user/hash.service';
  
  @Injectable()
  export class AuthService {
    constructor(private userService: UserService,
      private hashService: HashService,
      private jwtService: JwtService) {}

    async register(email:string , password:string){
      const hashpassword = await this.hashService.hashPassword(password)
      return this.userService.createUser(email, hashpassword)
    }
  
    async login(email:string , password:string) {
      const user = await this.userService.getUserbyEmail(email)
      if (!user){
        return {access_token:" "}
      }
      const isvalid = await this.hashService.comparePassword(password, user.pw)
      if (!isvalid){
        return {access_token:" "}
      }
      return {
        access_token: this.jwtService.sign({sub:user.id}),
      };
    }
  }