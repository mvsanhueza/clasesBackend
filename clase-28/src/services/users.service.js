//import UsersDao from '../persistencia/DAOs/UsersDAO/usersFile.js';
//import UsersDao from '../persistencia/DAOs/UsersDAO/usersMongo.js';
import UsersDao from '../persistencia/DAOs/UsersDAO/factory.js'
import usersDBDTO from '../persistencia/DTOs/usersDB.dto.js';
import UsersResponse from '../persistencia/DTOs/usersResponse.dto.js';

export const fillAllUsers = async() =>{
    try{
        const users = await UsersDao.getAll();
        return users;
    }
    catch (error){
        return error;
    }
}

export const createUser = async(obj) =>{
    try{
        const userDTO = new usersDBDTO(obj);
        const newUser = await UsersDao.createOne(userDTO);
        const userResponse = new UsersResponse(newUser);
        return userResponse;
    }
    catch(error){
        return error;
    }
}