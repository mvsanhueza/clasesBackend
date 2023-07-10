import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        requered: true,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    }]
});

const userModel = mongoose.model('Users', usersSchema);

export default userModel;