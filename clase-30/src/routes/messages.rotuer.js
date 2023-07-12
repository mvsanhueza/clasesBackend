import { Router } from "express";
import config from "../config.js";
import transporter from "../utils/nodemailer.js";
import { client } from "../utils/twilio.js";

const router = Router();

router.get('/', async (req, res) => {
    try {

        await transporter.sendMail({
            to: 'test2@gmail.com',
            subject: 'CORREO CODERHOUSE',
            //text: 'PROBANDO PRIMER EMAIL',
            html: '<h1>PROBANDO PRIMER EMAIL</h1> <p>Este es un correo de prueba</p>',
            attachments: [{ path: __dirname + '/cripto-expert.jpg' }]
        })

        res.status(200).send('Mail sent')
    }
    catch (error) {
        res.status(500).json({ message: error })
    }

    
})

router.post('/', async (req,res) =>{
    const {email, name, quote} = req.body
    try{
        await transporter.sendMail({
            to: email,
            subject: `Welcome ${name}`,
            text: quote
        })
        res.status(200).send('Mail sent');
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

router.get('/twilio', async (req,res) =>{
    try{
        client.messages.create({
            body: 'Hola desde Twilio',
            to: '+565345545',
            from: config.twilio_phone_number
        })
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

export default router;