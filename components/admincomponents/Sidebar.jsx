'use client'
import Link from "next/link";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { MdAssignmentAdd, MdOutlineUnsubscribe } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import { IoHome } from "react-icons/io5";

export const Sidebar = () => {

    return (
        <div className="flex flex-col bg-slate-100 w-28 sm:w-80 h-screen border-r border-gray-300">
            <div className="px-6 py-4 flex items-center justify-center">
                <Image src={assets.logo} alt="logo" width={70} height={70} />
            </div>
            <nav className="flex flex-col space-y-6 px-4">
                <Link
                    href="/admin/addProduct"
                    className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-md transition-all"
                >
                    <MdAssignmentAdd size={20} />
                    <p>Add New Blog</p>
                </Link>
                <Link
                    href="/admin/Bloglist"
                    className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-md transition-all"
                >
                    <RiListView size={20} />
                    <p>Blog List</p>
                </Link>
                <Link
                    href="/admin/subscription"
                    className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-md transition-all"
                >
                    <MdOutlineUnsubscribe size={20} />
                    <p>Subscription</p>
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-md transition-all"
                >
                    <IoHome size={20} />
                    <p>Home</p>
                </Link>
            </nav>
        </div>
    );
};
