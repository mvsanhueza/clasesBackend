import productModel from "../../mongoDB/products.model.js";
import BasicMongo from "./basicMongo.js";

class ProductsMongo extends BasicMongo {
    constructor(model){
        super(model);
    }
}

const productsMongo = new ProductsMongo(productModel);

export default productsMongo;