import { Injectable } from '@nestjs/common';
import {CreateUsersMongoDto} from './dto/create-users-mongo.dto';
import {UpdateUsersMongoDto} from './dto/update-users-mongo.dto';

import {User, UserDocument} from './users.shema';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
 

@Injectable()

export class UsersMongoService {
    constructor(@InjectModel(User.name)
                private userModel: Model<UserDocument>){}
    
    create(CreateUsersMongoDto: CreateUsersMongoDto){
        return this.userModel;
    }

    findAll(){
        return this.userModel.find();
    }

    findOne(id: string){
        return this.userModel.findById(id);
    }

    update(id: string, UpdateUsersMongoDto: UpdateUsersMongoDto){
        return `This action update a #${id} usersMongo`;
    }

    remove(id: string){
        return this.userModel.findByIdAndDelete(id);
    }
}