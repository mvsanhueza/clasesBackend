import { Schema, model} from "mongoose";

const courseSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    codCourse:{
        type: String,
        unique: true,
        index: true
    },
    days:{
        type:[],
        required: true,
    },
    schedule:{
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        default: true
    }
});

export const courseModel = model("courses", courseSchema);