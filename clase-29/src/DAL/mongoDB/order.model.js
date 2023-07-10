import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order_number: {
        type: Number,
        required: true,
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    }],
    price: {
        type: Number,
        required: true,
    }
})

const orderModel = mongoose.model('Orders', orderSchema);
export default orderModel;