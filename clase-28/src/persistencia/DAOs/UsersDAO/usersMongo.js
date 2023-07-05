import usersModel from '../../mongoDB/models/users.model.js';

class UsersMongo {
    async getAll(){
        try {
            const data = await usersModel.find();
            return data
        }
        catch (error) {
            return error;
        }
    }

    async createOne(obj){
        try {
            //const newUserDTO = new UsersDBDTO(obj);
            const newUser = usersModel.create(obj);
            //const responseDTO = new UsersResponse(newUser);
            return newUser;
        }
        catch (error) {
            return error;
        }
    }
}

export default new UsersMongo();