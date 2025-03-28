'use client'
import { assets, webSeries } from "../../../assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Footer } from "../../../components/Footer";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

export default function Page({ params }) {
    const [data, setData] = useState("");
    const [blog, setBlog] = useState("");
    const id = params.id;

    const fetchBlogData = async () => {
        for (let i = 0; i < webSeries.length; i++) {
            if (Number(id) === webSeries[i].id) {
                setData(webSeries[i]);
                console.log("blogdata", webSeries[i]);
                break;
            }
        }
    }

    const fetchdata = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${id}`)
            const datas = await res.json();
            setBlog(datas.results[0])
            console.log("blog", datas)
        } catch (error) {
            console.log(error)
        }
    }

    console.log("data", data);
    useEffect(() => {
        fetchBlogData();
        fetchdata();
    }, []);

    const handleclick = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(blog)
            })
            const result = await res.json();
            if (result) {
                toast.success("Deleted")
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (data) {
        const { title, description, rating, image, genre, releaseYear, category, creator } = data;
        console.log("category", category)
        return (
            <div className="min-h-screen bg-gray-50 py-10">
                <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
                    <Link href="/">
                        <Image src={assets.logo} width={120} height={40} alt="Logo" />
                    </Link>
                    <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center">
                        Get Started <FaArrowRight className="ml-2" />
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center max-w-6xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{title}</h1>

                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <CgProfile className="text-gray-600" size={20} />
                        <p className="text-lg text-gray-700">Author: <span className="font-semibold">{creator}</span></p>
                    </div>

                    <div className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
                        <p>{description}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 max-w-4xl w-full ml-29">
                        <div>
                            <p className="font-semibold text-gray-800">Rating:</p>
                            <p className="text-gray-600">{rating}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Genre:</p>
                            <p className="text-gray-600">{genre}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Release Year:</p>
                            <p className="text-gray-600">{releaseYear}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Category:</p>
                            <p className="text-gray-600">{category}</p>
                        </div>
                    </div>

                    {image && (
                        <div className="flex justify-center mb-6">
                            <Image src={image} alt={title} width={500} height={350} className="rounded-xl shadow-lg" />
                        </div>
                    )}
                    <div>
                        {category === "Technology" ? (
                            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                                Technology is the application of conceptual knowledge to achieve practical goals, especially in a reproducible way. The word technology can also mean the products resulting from such efforts, including both tangible tools such as utensils or machines, and intangible ones such as software. Technology plays a critical role in science, engineering, and everyday life.
                            </p>
                        ) : null || category === "Startup" ? (
                            <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-5">
                                Lean startup is a clear set of principles to create and design startups under limited resources and tremendous uncertainty to build their ventures more flexibly and at a lower cost.
                                <br className="mt-5" />
                                <strong>Key Lean Principles:</strong>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Find a problem worth solving, then define a solution</li>
                                    <li>Engage early adopters for market validation</li>
                                    <li>Continually test with smaller, faster iterations</li>
                                    <li>Build a function, measure customer response, and verify/refute the idea</li>
                                    <li>Evidence-based decisions on when to pivot by changing your plan's course</li>
                                    <li>Maximize the efforts for speed, learning, and focus</li>
                                </ul>
                            </p>
                        ) : null
                        }
                    </div>
                    <div className="my-20 text-center">
                        <p className="mt-5">Share this on your Social Media</p>
                        <div className="flex justify-center gap-8 mt-6">
                            <Link href='#'><FaFacebook className="text-blue-600 hover:text-blue-800 transition" size={24} /></Link>
                            <Link href="#"><FaInstagram className="text-pink-500 hover:text-pink-700 transition" size={24} /></Link>
                            <Link href="#"><FaSquareXTwitter className="text-blue-400 hover:text-blue-600 transition" size={24} /></Link>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    } else {
        const { title, description, author, category, _id } = blog;
        return (
            <div className="min-h-screen bg-gray-50 py-10 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                    <h1 className="text-3xl mt-4 font-bold text-gray-800">{author}</h1>
                    <h1 className="text-3xl mt-3 font-bold text-gray-800">{category}</h1>
                    <h2 className="text-xl text-gray-700 my-4">{description}</h2>
                    <button
                        onClick={() => handleclick(_id)}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                    >
                        Delete <MdDeleteOutline className="inline ml-2" />
                    </button>
                </div>
            </div>
        )
    }
}
