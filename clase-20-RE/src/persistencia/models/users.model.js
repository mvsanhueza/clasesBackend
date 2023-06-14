import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        default: 0,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

const userModel = mongoose.model('Users', userSchema);

export default userModel;