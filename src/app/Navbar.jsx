'use client';
import Link from "next/link";
import {useState, useEffect} from "react";
import {BsFillMoonFill} from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";



export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode');
        if (isDarkMode) {
            setDarkMode(JSON.parse(isDarkMode));
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode]);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    }

    return (
        // i use tailwindcss
        <nav className="bg-gray-100 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-2">
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <span className="text-gray-800 dark:text-gray-100 font-bold text-xl">MY BLOG</span>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-start space-x-4">
                                <Link href={'/'} className="text-gray-800 dark:text-gray-100 hover:text-gray-800">Home</Link>
                                <Link href={'/about'} className="text-gray-800 dark:text-gray-100 hover:text-gray-800">About</Link>
                                <Link href={'/contact'} className="text-gray-800 dark:text-gray-100 hover:text-gray-800">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            className="flex mx-4 text-gray-800 dark:text-gray-100 focus:outline-none"
                            onClick={handleDarkMode}
                        >
                            {darkMode ? (
                                <BsFillSunFill/>
                            ) : (
                                <BsFillMoonFill/>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

