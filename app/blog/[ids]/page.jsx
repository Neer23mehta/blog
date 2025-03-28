'use client'
import { useState } from "react";
import { assets } from "../../../assets/assets";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Page({params}) {
    // const [image, setImage] = useState("");

    const [data,setdata] =useState({
        title:"",
        description:"",
        category:"Startup",
        author:""
    })

    const id = params.ids

    const handlechange = (e) => {
        const {value,name} = e.target;
        setdata((data)=>({...data,[name]:value,}))
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('title',data.title);
        // formData.append('description',data.description);
        // formData.append('category',data.category);
        // formData.append('author',data.author);
        // formData.append('image',image);

        // console.log("formdata",formData)
        // console.log("image",image)

        try {
            const result = await fetch(`http://localhost:3000/api/blog/${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const res = await result.json();
            if (res.success) {
                toast.success("Edited Successfully");
            }
            else{
                toast.error("error");
            }
        } catch (error) {
            console.log("errormsg",error)
        }
            // try {
            //     const res = await fetch ('http://localhost:3004/blogs',{
            //         method:"POST",
            //         body:JSON.stringify(data)
            //     })
            //     const data = await res.json()
                
            // } catch (error) {
            //     console.log(error)
            // }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <form onSubmit={handlesubmit} className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8 space-y-6">
                <p className="text-2xl font-semibold text-center text-gray-800">Upload Thumbnail</p>
                
                {/* <label htmlFor="thumbnail" className="flex items-center justify-center cursor-pointer mb-6">
                    <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-lg border-2 border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-500 hover:shadow-lg">
                        <Image
                            src={image ? URL.createObjectURL(image) : assets.upload}
                            alt="Upload Thumbnail"
                            width={110}
                            height={110}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </label> */}

                {/* <input
                    type="file"
                    id="thumbnail"
                    className="hidden"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <div className="text-center text-sm text-gray-600">
                    <p>Click to upload your thumbnail. It should be a square image.</p>
                </div> */}

                
                <p className="text-xl mt-4">Blog Title</p>
                <input type="text" value={data.title} name="title" onChange={(e)=>handlechange(e)} placeholder="Title of your Blog" className="border-2 border-black rounded px-2 w-[max]" required/>

                <p className="text-xl mt-4">Blog Description</p>
                <textarea type="text" value={data.description} name="description" onChange={(e)=>handlechange(e)} rows={6} placeholder="Enter About your Blog" className="border-2 border-black rounded px-2 w-[max]" required/>

                <p className="text-xl mt-4">Blog Category</p>
                <select name="category" value={data.category} onChange={(e)=>handlechange(e)}>
                    <option>Technology</option>
                    <option>Startup</option>
                    <option>Lifestyle</option>
                </select>

                <p className="text-xl mt-4">Author Name</p>
                <input type="text" name="author" value={data.author} onChange={(e)=>handlechange(e)} placeholder="Enter Author Name" className="border-2 border-black rounded px-2 w-[max]" required/>
                <div className="flex justify-center mt-6">
                    <button 
                        type="submit" 
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200">
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
}
