'use client'
import { assets, webSeries } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export default function Page({ params }) {

    const [data, setData] = useState("");

    const ids = params.id;
    const fetchBlogData = () => {
        for (let i = 0; i < webSeries.length; i++) {
            if (Number(ids) === webSeries[i].id) {
                setData(webSeries[i]);
                console.log("blogdata", webSeries[i]);
                break;
            }
        }
    }

    console.log("data", data);
    useEffect(() => {
        fetchBlogData();
    }, []);

    const { title, description, rating, image, genre, releaseYear, category, creator } = data;

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            {/* Header Section */}
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
                <Image src={assets.logo} width={100} alt="Logo" />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                    Get Started <FaArrowRight className="ml-2" />
                </button>
            </div>

            {/* Main Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{title}</h1>
                
                {/* Author Info */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                    <CgProfile className="text-gray-600" size={20} />
                    <p className="text-lg text-gray-700">Author: <span className="font-semibold">{creator}</span></p>
                </div>

                {/* Description Section */}
                <div className="text-lg text-gray-700 mb-6">
                    <p>{description}</p>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-2 gap-4 mb-6">
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

                {/* Image Section */}
                {image && (
                    <div className="flex justify-center">
                        <Image src={image} alt={title} width={500} height={300} className="rounded-lg shadow-lg" />
                    </div>
                )}
            </div>
        </div>
    )
}
