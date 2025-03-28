import mongoose from "mongoose";

const blogModel = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    author:String,
    image:{
        type:String,
        required:true
    }
});
export const Blog = mongoose.models.blogdatas||mongoose.model("blogdatas",blogModel);