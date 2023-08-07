import { coursesService, userService } from "../repositories/services.js";
import MailingService from "../services/mailing.service.js";

const getUsers = async (req,res) =>{
    let users = await userService.getAllUsers();
    if(!user) return res.status(500).send({status:"error",message:"No se pudo obtener el usuario"});
    res.send({status:"success",payload:courses})
}

const createUser = async(req,res) =>{
    const {first_name, last_name, dni, email, birthDate, gender} = req.body;

    let newUser = {
        first_name,
        last_name,
        dni,
        email,
        birthDate,
        gender,
    };

    const result = await userService.createUser(newUser);
    if(!result) return res.status(500).send({status:"error",message:"No se pudo crear el usuario"});
    res.send({status:"success",payload:result});
}

const registerUserToCourse = async (req,res) =>{
    const {uid, cid} = req.params;
    const course =  await coursesService.getCourseById(cid);
    //if(!courses) -->404
    const user = await userService.getUserById(uid);
    //if(!user) -->404
    let courserExist = user.courses.some(c=>c._id.toString() === cid);
    //if(validacion del curso)
    user.course.push(course._id);
    course.user.push(user._id);

    await userService.updateUser(uid,user);
    await coursesService.updateCourse(cid,course);

    const mailer = new MailingService();
    const result = await mailer.sendSimpleMail({
        from: 'coderTest',
        to: 'correo para evaluar',
        subject: 'registro de curso',
        html: `<div> Felicidades te registraste en un curso </div>`
    })

    res.send({status:'success'})
}

export default {
    getUsers,
    createUser,
    registerUserToCourse
};