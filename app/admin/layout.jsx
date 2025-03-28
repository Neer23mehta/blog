import { Sidebar } from "../../components/admincomponents/Sidebar";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <ToastContainer theme="dark" />
            <Sidebar />
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between bg-white p-4 shadow-md border-b border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-800">Admin Panel</h3>
                    <GiPlagueDoctorProfile size={30} className="text-gray-600" />
                </div>
                <div className="p-6 bg-gray-50 flex-1">{children}</div>
            </div>
        </div>
    );
}
