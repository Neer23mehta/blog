'use client'
import { assets, webSeries } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Footer } from "@/components/Footer";

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
                        <p>Technology is the application of conceptual knowledge to achieve practical goals, especially in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2][3] including both tangible tools such as utensils or machines, and intangible ones such as software. Technology plays a critical role in science, engineering, and everyday life.

                            Technological advancements have led to significant changes in society. The earliest known technology is the stone tool, used during prehistory, followed by the control of fire—which in turn contributed to the growth of the human brain and the development of language during the Ice Age, according to the cooking hypothesis. The invention of the wheel in the Bronze Age allowed greater travel and the creation of more complex machines. More recent technological inventions, including the printing press, telephone, and the Internet, have lowered barriers to communication and ushered in the knowledge economy.

                            While technology contributes to economic development and improves human prosperity, it can also have negative impacts like pollution and resource depletion, and can cause social harms like technological unemployment resulting from automation. As a result, philosophical and political debates about the role and use of technology, the ethics of technology, and ways to mitigate its downsides are ongoing.

                        </p>) : null || category === "Startup" ? (<p className="text-[18px] items-center mx-10 justify-center flex mt-5">Lean startup is a clear set of principles to create and design startups under limited resources and tremendous uncertainty to build their ventures more flexibly and at a lower cost. It is based on the idea that entrepreneurs can make their implicit assumptions about how their venture works explicit and empirically testing it.[14] The empirical test is to de/validate these assumptions and to get an engaged understanding of the business model of the new ventures, and in doing so, the new ventures are created iteratively in a build–measure–learn loop. Hence, lean startup is a set of principles for entrepreneurial learning and business model design. More precisely, it is a set of design principles aimed for iteratively experiential learning under uncertainty in an engaged empirical manner. Typically, a lean startup focuses on a few lean principles:
                            <br className="mt-10" />
                            find a problem worth solving, then define a solution
                            engage early adopters for market validation
                            continually test with smaller, faster iterations
                            build a function, measure customer response, and verify/refute the idea
                            evidence-based decisions on when to pivot by changing your plan's course
                            maximize the efforts for speed, learning, and focus
                        </p>) : null
                    }
                </div>
                <div className="my-20 ">
                    <p className="mt-5 text-center items-center">Share this on your Social Media</p>
                    <div className="flex flex-row gap-8 justify-around">
                    <Link href='#'><p><FaFacebook /></p></Link>
                    <Link href="#"><p><FaInstagram /></p></Link>
                    <Link href="#"><p><FaSquareXTwitter /></p></Link>     
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
