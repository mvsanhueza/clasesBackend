import config from '../../config.js';
import usersMongo from './UsersDAO/usersMongo.js';
import usersFile  from './UsersDAO/usersFile';

let UsersDao

switch (config.persistencia) {
    case 'file':
        UsersDao = usersFile;
        break;
    case 'mongo':
        UsersDao = usersMongo;
        break;
}

export default UsersDao;