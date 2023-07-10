import businessModel from "../../mongoDB/business.model.js";
import BasicMongo from "./basicMongo.js";

class BusinessMongo extends BasicMongo { //Los metodos de basic mongo serán extensión de business mongo
    constructor(model){
        super(model);
    } 

}

const businessMongo = new BusinessMongo(businessModel);
export default businessMongo;