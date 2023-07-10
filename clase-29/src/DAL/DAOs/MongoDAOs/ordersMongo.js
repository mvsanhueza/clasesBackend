import orderModel from '../../mongoDB/order.model.js';
import BasicMongo from './basicMongo.js';

class OrdersMongo extends BasicMongo {
    constructor(model){
        super(model);
    }
}

const ordersMongo = new OrdersMongo(orderModel);
export default ordersMongo;