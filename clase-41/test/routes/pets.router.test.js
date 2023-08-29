import { expect } from 'chai';
import supertest from 'supertest';
import { dropPets } from '../setup.test.js';

const requester = supertest('http://localhost:8080');

describe('Test routes Pets', () => {

    beforeEach(async () => {
        await dropPets();
    })

    it('[POST] /api/pets', async () => {
        const mockpet = {
            name: "rocky",
            specie: "DOG",
            birthDate: new Date(),
        }

        const response = await requester.post('/api/pets').send(mockpet);
        expect(response.statusCode).to.be.eql(200);
        expect(response.body.payload._id).to.be.ok;
    })

    it('[POST] /api/pets eql name', async () => {
        const mockpet = {
            name: "rocky",
            specie: "DOG",
            birthDate: new Date(),
        }

        const response = await requester.post('/api/pets').send(mockpet);
        expect(response.body.payload.name).to.be.eql('rocky');
    })

    it('[POST] /api/pets status 400', async () => {
        const mockpet = {
            specie: "DOG",
            birthDate: new Date(),
        }

        const response = await requester.post('/api/pets').send(mockpet);
        expect(response.statusCode).to.be.eql(400);
    })

    it('[POST] /api/pets/withimage create images succesfully', async () => {
        const mockpet = {
            name: "rocky",
            specie: "DOG",
            birthDate: new Date(),
        }

        const response = await requester.post('/api/pets/withimage')
            .field('name', mockpet.name)
            .field('specie', mockpet.specie)
            .field('birthDate', mockpet.birthDate)
            .attach('image', './test/iamges/perro.jpg');

        expect(response.statusCode).to.be.eql(200);
        expect(response.body.payload).to.have.property('_id');
        expect(response.body.payload.image).to.be.ok;

    })
})