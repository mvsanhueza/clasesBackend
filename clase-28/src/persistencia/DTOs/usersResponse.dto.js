export default class UsersResponse {
    constructor(userObj) {
        this.first_name = userObj.full_name.split(' ')[0];
        this.last_name = userObj.full_name.split(' ')[1];
        this.idUser = userObj._id;
        this.email = userObj.email
    }
}