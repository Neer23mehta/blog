'use client'
import { webSeries } from "../assets/assets";
import { Blogitems } from "./Blogitems";
import { useState } from "react";

export const Bloglist = () => {
    const [menu, setmenu] = useState("All");

    return (
        <div>
            <div className="flex justify-center gap-6 my-10">
                <button onClick={() => setmenu("All")} className={menu == "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>All</button>
                <button onClick={() => setmenu("Technology")} className={menu == "Technology" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Technology</button>
                <button onClick={() => setmenu("Startup")} className={menu == "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Startup</button>
                <button onClick={() => setmenu("Lifestyle")} className={menu == "Lifestyle" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Lifestyle</button>
            </div>
            <div className="flex flex-wrap gap-10 justify-center xl:mx-24 mb-16">
                {webSeries.filter((items)=> menu == "All" ? true:items.category == menu).map((curItem, index) => {
                    const { title, description, rating, image, genre, releaseYear,category, id } = curItem;
                    return (
                        <Blogitems key={index} title={title} id={id} description={description} rating={rating} releaseYear={releaseYear} image={image} genre={genre} category={category}/>
                    );
                })}
            </div>
        </div>
    );
};
