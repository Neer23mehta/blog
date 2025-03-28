import { assets } from "../assets/assets"; 
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";


export default function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-24">
      <div className="flex justify-between align-center">
        <Image
          src={assets.logo}
          alt="logo"
          width={100}  
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center border border-solid px-5 py-5 mt-5 h-[50px] font-medium border-black shadow-[-7px_7px_0px_#000000]">Get Started<FaArrowRight />
        </button>
      </div>
      <div className="text-center my-5">
        <h1 className="text-3xl font-medium sm:5xl">Latest Blogs</h1>
        <p className="mt-5 mx-20 flex align-center justify-center text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt dignissimos delectus reprehenderit tenetur, esse ipsum autem voluptas accusamus culpa velit fuga voluptates omnis quas at eligendi. Minima, incidunt mollitia?</p>
        <form className="flex mt-5 justify-between border-1 border-black shadow-[-7px_7px_0px_#000000]">
            <input type="tel" placeholder="Enter Your Email"
            className="mx-20 items-center flex justify-center align-center px-1"
            />
            <button type="submit" className="border-l border-black py-2 px-3 ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
