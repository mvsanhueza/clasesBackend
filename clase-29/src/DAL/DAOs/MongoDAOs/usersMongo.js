import usersModel from '../../mongoDB/users.model.js';
import BasicMongo from './basicMongo.js';

class UsersMongo extends BasicMongo {
    constructor(model){
        super(model);
    }
}

const usersMongo = new UsersMongo(usersModel);

export default usersMongo;