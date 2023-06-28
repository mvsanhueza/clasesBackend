import UsersManager from "../persistencia/usersManager.js";
import {hashData } from "../utils.js";

const usersManager = new UsersManager();

export const findAll = async () =>{
    try{
        const users = await usersManager.findAll();
        return users;
    }
    catch(error){
        return error
    }
}

export const findById = (id) =>{
    try{
        const user = usersManager.findOneById(id);
        return user;
    }
    catch(error){
        return error;
    }
}

export const createOne = async (user) =>{
    try{
        const hashPassword = await hashData(user.password);
        const userHashed = {...user, password: hashPassword};
        const newUser = await usersManager.createOne(userHashed);
        return newUser;
    } catch(error){
        return error;
    }
}