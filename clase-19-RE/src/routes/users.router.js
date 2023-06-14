import { Router } from "express";
import userModel from "../persistencia/models/users.model.js";

const router = Router();

//Persistencia en memoria
// const users = [{
//     email: 'faridsesin@mail.com',
//     password: '12345'
// }]

// router.post('/signup', (req, res) => {
//     const { email, password } = req.body;
//     const user = users.find(u => u.email === email);

//     if(user){
//         return res.redirect('/api/views/errorSignup');
//     }

//     users.push(req.body);

//     res.redirect('/api/views');
// })

// router.post('/login', (req, res) =>{
//     const { email, password } = req.body;
//     const user = users.find(u => u.email === email && u.password === password);

//     if(!user){
//         return res.redirect('/api/views/errorLogin');
//     }

//     console.log(req);

//     req.session.email = email;
//     req.session.password = password;
//     req.session.isAdmin = true;
//     res.redirect('/api/views/profile');
// })

router.get('/logout', (req,res) =>{
    req.session.destroy((err) =>{
        if(err){
            console.log(err);
            res.send(error)
        }
        else{
            res.redirect('/api/views');
        }      
    })
})

//Persistencia en mongo:
router.post('/signup', async (req, res) => {
    const { email } = req.body;
    const user = await userModel.findOne({email});

    if(user){
        return res.redirect('/api/views/errorSignup');
    }
    console.log(req.body);
    await userModel.create(req.body);

    res.redirect('/api/views');
})

router.post('/login', async (req, res) =>{
    const { email, password } = req.body;
    const user = await userModel.findOne({email, password});

    if(!user){
        return res.redirect('/api/views/errorLogin');
    }

    req.session.user = user;
    res.redirect('/api/views/profile');
})

export default router;