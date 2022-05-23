import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    Title: { type: String, required: true, unique: true },
    Count: { type: Number, required: true },

})

export default mongoose.model('BookModel', BookSchema)