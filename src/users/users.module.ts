import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/user.model';
import { UsersController } from './users.controller';

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'User', schema: UserSchema } ]) ],
  providers: [ UsersService ],
  controllers: [UsersController],
})
export class UsersModule { }
