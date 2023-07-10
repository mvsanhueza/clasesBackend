import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    stock: {
        type: Number,
        require: true,
    }
})

const productModel = mongoose.model('Products', productSchema);
export default productModel;