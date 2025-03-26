import { assets, webSeries } from "@/assets/assets";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";

export const Blogitems = ({ title, description, rating, image, genre, releaseYear } ) => {
  return (
    <div className="mx-20 bg-white">
      <ul className="space-y-6 grid grid-cols-4 gap-10">
            <li className="border-b py-4 border border-black hover:shadow-[-7px_7px_0px_#000000]">
              <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={image}
                  width={200}
                  height={300}
                  alt={title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-md font-medium text-gray-700">Rating: {rating}/10</p>
                    <p className="text-sm text-gray-400">Release Year: {releaseYear}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Genre: {genre}</p>
                  <button className="mt-4 flex items-center text-primary font-semibold hover:underline">
                    Read More <LuSquareArrowOutUpRight className="ml-1" />
                  </button>
                </div>
              </div>
            </li>
      </ul>
    </div>
  );
};
