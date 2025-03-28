'use client'
import { useEffect, useState } from "react";
import { Blogitems } from "./Blogitems";
import { webSeries } from "../assets/assets";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

export const Bloglist = () => {
    const [menu, setmenu] = useState("All");
    const [blog, setblog] = useState([]);

    const fetchApi = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/blog");
            const data = await res.json();
            setblog(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-center gap-6 my-8">
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

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                {/* Web Series */}
                {webSeries
                    .filter((items) => menu === "All" ? true : items.category === menu)
                    .map((curItem, index) => {
                        const { title, description, rating, image, genre, releaseYear, category, id } = curItem;
                        return (
                            <Blogitems
                                key={index}
                                title={title}
                                id={id}
                                description={description}
                                rating={rating}
                                releaseYear={releaseYear}
                                image={image}
                                genre={genre}
                                category={category}
                            />
                        );
                    })
                }

                {/* Blogs */}
                {blog
                    .filter((items) => menu === "All" ? true : items.category === menu)
                    .map((curElem) => {
                        const { _id, title, category, description } = curElem;
                        return (
                            <li key={_id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                                <p className="text-gray-600 mt-2">{description}</p>
                                <Link href={`/blogs/${_id}`}>Read More</Link>
                                <Link href={`/blog/${_id}`}>Edit<FaRegEdit /></Link>
                            </li>
                        );
                    })
                }
            </div>
        </div>
    );
};
