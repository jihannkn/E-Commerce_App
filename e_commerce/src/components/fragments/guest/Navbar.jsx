import { Link } from 'react-router-dom'
import logo1 from "../../../../public/assets/images/Logo1.png";

export default function Navbar() {
    return (

        <nav className="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl rounded-xl p-4 mx-6 mb-6 border border-gray-200 dark:border-gray-700">

            <div className="flex items-center justify-between">
                <Link to="/" className="block">
                    <img
                        src={logo1}
                        alt="Float UI logo"
                        className="w-[13rem] transition-transform transform hover:scale-110"
                    />
                </Link>
                <div className="hidden md:flex space-x-8 items-center">
                    <ul className="flex items-center space-x-8">
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/" className="relative group">
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/dashboard" className="relative group">
                                Dashboard
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                    </ul>
                    <span className="hidden w-px h-6 bg-gray-300 dark:bg-gray-600 md:block"></span>
                    <ul className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/auth/login" className="relative group">
                                Login
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <Link to="/auth/register" className="block py-3 px-4 font-medium text-center text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 active:bg-blue-700 dark:active:bg-blue-600 active:shadow-none rounded-lg shadow md:inline">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
