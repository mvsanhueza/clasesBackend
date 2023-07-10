import userService from "../services/users.service.js";

class UsersController {
    async findAllUsers(req, res) {
        try{
            const response = await userService.findAllUsers();
            res.status(200).json({message: 'Users found', allUsers: response});
        }
        catch(error){
            res.status(500).json({message: error});
        }
    }
    async findOneUser(req, res) {
        const {idUser} = req.params;
        try{
            const response = await userService.findOneUser(idUser);
            res.status(200).json({message: 'User found', user: response});
        }
        catch(error){
            res.status(500).json({message: error});
        }
    }
    async createOneUser(req, res) {
        const {first_name, last_name, email, password} = req.body;
        if(!first_name || !last_name || !email || !password){
            res.status(401).json({message: 'Missing fields'});
        }
        try{

        }
        catch(error){
            res.status(500).json({message: error});
        }
    }
    async deleteOne(req,res) {
        const {idUser} = req.params;
        try{
            const response = await userService.deleteOneUser(idUser);
            res.status(200).json({message: 'User deleted', user: response});
        }
        catch(error){
            res.status(500).json({message: error});
        }
    }
}

const usersController = new UsersController();
export default usersController;