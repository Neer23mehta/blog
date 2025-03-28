'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";

export default function Page() {
    const [list, setlist] = useState([]);
    const [menu, setmenu] = useState("All"); // Track selected category

    const fetchdata = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/blog');
            const data = await res.json();
            setlist(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    const handleclick = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const result = await res.json();
    
            if (res.status === 200) {
                toast.success("Deleted Successfully");
                setlist(prevList => prevList.filter(item => item._id !== id));
            } else {
                toast.error(result.message || "Failed to delete the blog");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while deleting the blog");
        }
    };
    

    return (
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-center gap-6 my-5">
                {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setmenu(category)}
                        className={`text-lg font-semibold py-2 px-6 rounded-lg transition-all duration-300
                            ${menu === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <ul className="space-y-4">
                {
                    list
                        .filter(item => menu === "All" ? true : item.category === menu) // Filter by selected category
                        .map((curitems) => {
                            const { _id, title, author, category } = curitems;
                            return (
                                <li key={_id} className="flex flex-col bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-all">
                                    <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                                    <p className="text-gray-600">Author: <span className="font-medium">{author}</span></p>
                                    <p className="text-sm text-gray-500">Category: {category}</p>
                                    <div className="mt-3 space-x-4 flex items-center">
                                        <Link 
                                            href={`/blogs/${_id}`} 
                                            className="text-blue-500 hover:text-blue-700 transition-all text-sm font-medium"
                                        >
                                            View More
                                        </Link>

                                        {/* Edit Button */}
                                        <Link 
                                            href={`/blog/${_id}`} 
                                            className="flex items-center text-yellow-500 hover:text-yellow-700 transition-all text-sm font-medium"
                                        >
                                            <FaRegEdit className="mr-1" />
                                            Edit
                                        </Link>

                                        {/* Delete Button */}
                                        <button 
                                            onClick={() => handleclick(_id)} 
                                            className="flex items-center text-red-500 hover:text-red-700 transition-all text-sm font-medium"
                                        >
                                            <MdDeleteOutline className="mr-1" />
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}
