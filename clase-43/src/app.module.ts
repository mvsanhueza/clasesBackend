import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';
import {UsersMongoModule} from './users-mongo/users-mongo.module';

import {MiddlewareConsumer, NestModule, RequestMethod} from '@nestjs/common';
import FirstMiddleware from './middleware/middleware';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { config } from 'process';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL')
      })
    }),
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(FirstMiddleware).forRoutes({path:'*', method: RequestMethod.ALL})
  }
 }
