import { Controller, Get, Post, Param, UseInterceptors, ClassSerializerInterceptor, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
