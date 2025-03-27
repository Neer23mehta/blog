import { assets } from "../assets/assets"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className="flex justify-around flex-col gap-5 sm:gap-0 sm:flex-row py-5 border-l items-center">
            <Image src={assets.logo} alt="logo" width={100} height={30} style={{backgroundColor:"black"}}/>
            <div className="flex flex-row gap-5">
                <p><FaFacebook />Follow us On FaceBook</p>
                <p><FaInstagram />Follow us On Instagram</p>
                <p><FaSquareXTwitter />Follow us On X</p>
            </div>
        </div>
    )
}