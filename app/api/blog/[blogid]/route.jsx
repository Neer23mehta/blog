import { Blog } from "../../../../lib/model/blog";
import { connectSrt } from "../../../../lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const { blogid } = params; 
    
    try {
        await mongoose.connect(connectSrt);

        const result = await Blog.deleteOne({ _id: blogid });

        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog deleted successfully", success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error occurred", success: false }, { status: 500 });
    }
}


export async function GET (request,contents) {
    const blogid = contents.params.blogid;
    const result = {_id:blogid}
    try {
        await mongoose.connect(connectSrt)
        const res = await Blog.find(result)
        return NextResponse.json({results:res,success:true},{status:201})
    } catch (error) {
        console.log(error)
    }
}

export async function PUT(request,contents) {
    const blogdata = contents.params.blogid
    const filter = {_id:blogdata}
    try {
        await mongoose.connect(connectSrt);
        const payload = await request.json();
        const results = await Blog.findOneAndUpdate(filter,payload)
        return NextResponse.json({result:results,success:true})
    } catch (error) {
        console.log(error)
    }
}