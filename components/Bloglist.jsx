import { webSeries } from "@/assets/assets"
import { Blogitems } from "./Blogitems";
import { useState } from "react";

export const Bloglist = () => {

    const [menu,setmenu] = useState("All")
    return (
        <div>
            <div className="flex justify-center gap-6 my-10">
                <button onClick={()=>setmenu("All")}className={menu == "All" ?"bg-black text-white py-1 px-4 rounded-sm":""}>All</button>
                <button onClick={()=>setmenu("Technology")}className={menu == "Technology" ?"bg-black text-white py-1 px-4 rounded-sm":""}>Technology</button>
                <button onClick={()=>setmenu("Startup")}className={menu == "Startup" ?"bg-black text-white py-1 px-4 rounded-sm":""}>Startup</button>
                <button onClick={()=>setmenu("Lifestyle")}className={menu == "Lifestyle" ?"bg-black text-white py-1 px-4 rounded-sm":""}>Lifestyle</button>
            </div>
            <div className="grid grid-col-4 gap-1 gap-y-10 mb-16 xl:mx-24 ">
                {webSeries.map((curItem, index) => {
                    const { title, description, rating, image, genre, releaseYear } = curItem;
                    return (
                       <Blogitems key={index} title={title} description={description} rating={rating} releaseYear={releaseYear} image={image} genre={genre}/>
                    )
                })}
            </div>
        </div>
    )
}