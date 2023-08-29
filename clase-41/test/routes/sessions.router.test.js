import { expect } from 'chai';
import supertest from 'supertest';
import { dropUsers } from '../setup.test.js';

const requester = supertest('http://localhost:8080');

describe('TEST routes sessions', () =>{

    before( async () =>{
        await dropUsers();
    })

    let cookie;

    it('[POST] /api/sessions/register register succesfully', async () =>{
        
        const mockUser = {
            first_name: "Prueba",
            last_name: "Coder",
            email: "correo@correo.com",
            password: "123456",
        }

        const response = await requester.post('/api/sessions/register').send(mockUser);
        expect(response.statusCode).to.be.eql(200);
        expect(response.body.payload).to.be.ok;
    })

    it('[POST] /api/sessions/login login succesfully', async () =>{
        const mockUserLogin = {
            email: "correo@correo.com",
            password: "123456",
        }

        const response = await requester.post('/api/sessions/login').send(mockUserLogin);
        const cookieHeader = response.headers['set-cookie'][0];

        cookie = {
            name: cookieHeader.split('=')[0],
            value: cookieHeader.split('=')[1],
        }

        console.log(cookie);
        expect(cookie.value).to.be.ok;
        expect(cookie.name).to.be.eql('coderCookie');
    })

    it('[GET] /api/sessions/current current session', async () =>{
        const response = await requester.get('/api/sessions/current').set('Cookie', `${cookie.name}=${cookie.value}`);
        expect(response.statusCode).to.be.eql(200);
        expect(response.body.payload.email).to.be.eql('correo@correo.com')
    })
})
