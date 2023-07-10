import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    }]
})

const businessModel = mongoose.model('Business', businessSchema);
export default businessModel;