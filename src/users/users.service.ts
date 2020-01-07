import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, IUser } from '../models/user.model';
import { classToClass, classToPlain } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

  async create(createCatDto: User): Promise<User> {
    const userToCreate = new User(createCatDto);
    const createdUser = await this.userModel.create(userToCreate);

    if (createdUser) {
      return new User(createdUser.toJSON());
    }
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userModel.find().exec();
    return allUsers.map((user) => new User(user.toJSON()));
  }

  async find(_id: string): Promise<User> {
    const foundUser = await this.userModel.findOne({ _id }).exec();
    if (foundUser) {
      return new User(foundUser.toJSON());
    }
  }
}
