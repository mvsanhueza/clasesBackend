import usersMongo from '../DAL/DAOs/MongoDAOs/usersMongo.js';
import { hashData } from '../utils/bcrypt.js';

class UsersService {
    async findAllUsers() {
        try {
            const response = await usersMongo.findAll();
            return response;
        } catch (error) {
            return error;
        }
    }
    async findOneUser(id) {
        try {
            const response = await usersMongo.findOne(id);
            return response;
        } catch (error) {
            return error;
        }
    }
    async createOneUser(user) {
        try {
            const hashPassword = hashData(user.password);
            const newUser = {...user, password: hashPassword};
            const response = await usersMongo.createOne(newUser);
            return response;
        } catch (error) {
            return error;
        }
    }
    async deleteOneUser(id){
        try {
            const response = await usersMongo.deleteOne(id);
            return response;
        } catch (error) {
            return error;
        }
    }
}

const userService = new UsersService();

export default userService;