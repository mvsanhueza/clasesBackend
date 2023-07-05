import fs from 'fs';

class UsersFile {

    constructor(path) {
        this.path = path;
    }

    async getAll() {
        try {
            if (fs.existsSync(this.path)) {
                const users = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(users);
            } else {
                return [];
            }
        }
        catch (error) {
            return error;
        }
    }

    async createOne(obj) {
        try {
            const data = await this.getAll();
            // let id
            // if (!data.length) {
            //     id = 1;
            // }
            // else {
            //     id = data[data.length - 1].id + 1;
            // }
            const id = !data.length ? 1 : data[data.length - 1].id + 1;

            const newObj = {id, ...obj}

            data.push(newObj);
            await fs.promises.writeFile(this.path, json.stringify(data));
            return newObj;
        }
        catch (error) {
            return error;
        }
    }
}

export default new UsersFile('../../../users.txt');