import { Module } from "@nestjs/common";
import { UsersMongoService } from "./users-mongo.service";
import {UsersMongoController} from './users-mongo.controller';

import {User, UserSchema} from './users.shema';
import {MongooseModule, Schema} from '@nestjs/mongoose';

import {ConfigModule} from '@nestjs/config';

@Module({
    controllers: [UsersMongoController],
    providers: [UsersMongoService],
    imports: [MongooseModule.forFeature([
        {
            name: User.name,

        }
    ]), ]
})
