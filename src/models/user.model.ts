import { Exclude, Expose, Transform } from 'class-transformer';
import { IsUUID, IsString, IsNotEmpty, IsOptional } from 'class-validator';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
});

export class BaseDBObject {
  @Expose({ name: 'id' })
  @Transform(value => value && value.toString())
  @IsOptional()
  // tslint:disable-next-line: variable-name
  _id: any;

  @Exclude()
  @IsOptional()
  // tslint:disable-next-line: variable-name
  _v: any;
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class User extends BaseDBObject {
  @Expose()
  username: string;

  password: string;

  constructor(partial: Partial<User> = {}) {
    super();
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateUserBodyDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export interface IUser extends mongoose.Document {
  username: string;

  password: string;
}
