export default class CoursesRepository {
    constructor(dao){
        this.dao = dao;
    }

    getAllUsers = async () =>{
        return await this.dao.getAll();
    }

    createUser = async (user) =>{
        return await this.dao.saveUser(user);
    }

    updateUser = async (id,user) =>{
        return await this.dao.updateCourse(id,user);
    }
}