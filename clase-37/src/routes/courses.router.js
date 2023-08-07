import { Router } from 'express';
import Courses from '../dao/dbManagers/courses.js';
import courseController from '../controllers/courses.controller.js';
import applyPolicy from '../middleware/auth.middleware.js'

const router = Router();
const coursesManager = new Courses();

router.use(passport.authenticate('current',{session:false}));

//router.get('/', courseController.getCourses);

router.get('/', applyPolicy(['STUDENT']), courseController.getCourses);

// router.get('/',async(req,res)=>{
//     let courses = await coursesManager.getAll();
//     res.send({status:"success",payload:courses})
// })

router.get('/', applyPolicy(), courseController.createCourse);

// router.post('/',async(req,res)=>{
//     const {title,description} = req.body;
//     let newCourse = {
//         title,
//         description,
//         users:[],
//         teacher:'sin asignar'
//     }
//     const result = await coursesManager.saveCourse(newCourse);
//     res.send({status:"success",payload:result});
// })

export default router;