import { Blog } from "../../../lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {connectSrt} from "../../../lib/db"
import { writeFile } from "fs/promises";

export async function GET() {
    try {
        await mongoose.connect(connectSrt);
        const data = await Blog.find();
        return NextResponse.json({ results: data, success: true });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ results: "Error fetching data", success: false }, { status: 500 });
    }
}

export async function POST(request) {
    console.log("Request received:", request);

    try {
        const formData = await request.formData();
        console.log("FormData:", formData); 

        const timestamp = Date.now();

        const image = formData.get('image'); 
        if (image) {
            const imagebytedata = await image.arrayBuffer();
            const buffer = Buffer.from(imagebytedata);
            const path = `./public/${timestamp}_${image.name}`;

            await writeFile(path, buffer);
            const imgUrl = `${timestamp}_${image.name}`;
            console.log("img_url",imgUrl)
            const BlogData = {
                title: formData.get('title'),
                description: formData.get('description'),
                category: formData.get('category'),
                author: formData.get('author'),
                image: imgUrl
            };

            await mongoose.connect(connectSrt);
            const newBlog = await Blog.create(BlogData);
            console.log("New blog created:", newBlog);

            return NextResponse.json({ results: "Blog created successfully", success: true, data: newBlog }, { status: 201 });
        } else {
            throw new Error('No image uploaded');
        }

    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({ results: `Error creating blog: ${error.message}`, success: false }, { status: 500 });
    }
}

// export async function POST(request){
//     try {
//         const payload = await request.json();
//         await mongoose.connect(connectSrt)
//         const user = new Blog(payload)
//         const result = await user.save();
//         return NextResponse.json({results:result,success:true},{status:201})      
//     } catch (error) {
//         console.log(error)
//     }
// }
