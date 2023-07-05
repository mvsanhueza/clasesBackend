export default class UsersDBDTO{
    constructor(userObj){
        this.full_name = `${userObj.first_name} ${userObj.last_name}`
        this.email = userObj.email
        this.password = userObj.password
    }
}