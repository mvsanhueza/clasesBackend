import 'dotenv/config'; //Ya puedo implementar dotenv
import express from 'express';
import mongoose from 'mongoose';
import { courseModel } from './models/Courses.js';
import { studentModel } from './models/Students.js';
import {userModel} from './models/Users.js'; //Importo el modelo de datos

//Routes:
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URL_MONGODB_ATLAS)
        .then(()=> console.log("DB is connected"))
        .catch((error) => console.log(error));

// await userModel.create([
//     {first_name: "Emily", last_name:"Esmeralda",email:"emily@emily.com", gender: "F", password:"1234"},
//     {first_name: "Eduardo", last_name:"Diaz",email:"edu@edu.com", gender: "M", password:"5678"},
//     {first_name: "Aldana", last_name:"Alvarez",email:"a@a.com", gender: "F", password:"8965"},
// ])

//await userModel.find().explain('executionStats');
// await userModel.find({email: ""}).explain('executionStats');

// await courseModel.create([
//     {name: "Programacion Backend", codCourse:"51225", days:["Lunes","Martes"], schedule:"20:00-22:00", status: true},
//     {name: "React", codCourse:"45333", schedule:"10:00-12:00hs", days:["Miercoles","Viernes"], status: true},
//     {name: "JavaScript", codCourse:"32111", schedule:"14:00-16:00hs", days:["Lunes"], status: true},
// ])

// await studentModel.create([
//     {first_name:"Vlad", last_name:"Mayworth", email:"vmaywhorthrr@vlad.com", gender: "Male", courses: [{id_course: "6464e69f075ffa86f8a1855a"}]},
//     {first_name:"Mathew", last_name:"Scawn", email:"mscawn@math.com", gender: "Male", courses: [{id_course: "6464e69f075ffa86f8a1855b"}, {id_course: "6464e69f075ffa86f8a1855c"}]}
// ])

const student1 = await studentModel.findOne({_id: "6464ea343a33cdb1c1b7e7c4"}).populate('courses.id_course');
const studentJSON = JSON.stringify(student1);
console.log(studentJSON);


app.listen(process.env.PORT, () => {
    console.log("Server on port ",process.env.PORT);
});