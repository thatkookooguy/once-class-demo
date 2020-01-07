import { Controller, Get, Param, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { User, BaseDBObject, CreateUserBodyDTO } from 'src/models/user.model';
import { plainToClass } from 'class-transformer';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findById(@Param('id') id: string): Promise<User> {
    // console.log(id);
    // find user by id and return it
    const user = await this.usersService.find(id);

    return user;
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createUserBody: CreateUserBodyDTO): Promise<User> {
    // create a new user from the createUserDto
    const userToCreate = new User(createUserBody);

    return await this.usersService.create(userToCreate);
  }
}
