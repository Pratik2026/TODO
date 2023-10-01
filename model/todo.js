import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [20, 'Title cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true } // (createdAt, updatedAt)
// Automatic Timestamps: It simplifies the process of tracking when documents are created and updated. You don't need to manually set these 
// timestamps in your code; Mongoose does it for you.
);

const model = mongoose.model("Todo", todoSchema);

export default model;