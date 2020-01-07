import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDatabaseModule } from './in-memory-database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ InMemoryDatabaseModule, UsersModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule { }
