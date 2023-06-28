import usersModel from "./models/users.model.js";

export default class UsersManager {
    async findAll() {
        try {
            const users = await usersModel.find();
            return users;
        }
        catch (error) {
            return error;
        }
    }

    async findOneById(id) {
        try {
            const user = await usersModel.findById(id);
            return user;
        }
        catch (error) {
            return error;
        }
    }

    async createOne(user){
        try{
            const newUser = await usersModel.create(user);
            return newUser;
        }
        catch(error){
            return error;
        }
    }

    async updateOne(id, user){
        try{
            const updatedUser = await usersModel.findByIdAndUpdate(id, user);
            return updatedUser;
        }
        catch(error){
            return error;
        }
    }

    async deleteOne(id){
        try{
            const deletedUser = await usersModel.findByIdAndDelete(id);
            return deletedUser;
        }
        catch (error){
            return error;
        }
    }
}