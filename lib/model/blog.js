import mongoose from "mongoose"

const blog = new mongoose.Schema({
//   title:{
//     type:String,
//     required:true
//   },
//   description:{
//     type:String,
//     required:true
//   },
//   category:{
//     type:String,
//     required:true
//   },
//   author:{
//     type:String,
//     required:true
//   },
//   image:{
//     type:String,
//     required:true
//   }
// })
  title:String,
  description:String,
  category:String,
  author:String

})

export const Blog = mongoose.models.blogdatas || mongoose.model("blogdatas", blog)
