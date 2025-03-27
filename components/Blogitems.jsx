import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

export const Blogitems = ({ title, description, rating, image, genre, releaseYear, category, id }) => {
  return (
    <div className="bg-white max-w-[300px] w-full flex flex-col shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <Image
          src={image}
          width={300}
          height={400}
          alt={title}
          className="w-full h-60 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-1">
        <p className="text-sm text-white mt-2 bg-black-500">{category}</p>
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-md font-medium text-gray-700">Rating: {rating}/10</p>
            <p className="text-sm text-gray-400">Release Year: {releaseYear}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">Genre: {genre}</p>
         <Link href={`/blogs/${id}`}> <button className="mt-4 flex items-center text-primary font-semibold hover:underline">
            Read More <LuSquareArrowOutUpRight className="ml-1" />
          </button></Link>
        </div>
      </div>
    </div>
  );
};
