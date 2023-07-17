import {fakerEs} from '@faker-js/faker'

export const generateUser = () => {
    return {
        name: fakerEs.person.firstName(),
        last_name: fakerEs.person.lastName(),
        email: fakerEs.internet.email(),
        phoneNumber: fakerEs.phone.number(),
    }
}