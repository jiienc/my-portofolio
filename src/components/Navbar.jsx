import React from 'react';
import { assets } from "../assets/images/image.js";

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav
            className="shadow-md p-4 flex items-center border-b-4 border-neutral-700 bg-neutral-900 sticky top-0 z-50"
            style={{ backgroundImage: `url(${assets.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <ul className="flex-1 flex justify-center space-x-8">
                <li className="px-4 py-2 hover:text-blue-500 cursor-pointer transition duration-300" onClick={() => scrollToSection('home')}>
                    Home
                </li>
                <li className="px-4 py-2 hover:text-blue-500 cursor-pointer transition duration-300" onClick={() => scrollToSection('about')}>
                    About Me
                </li>
                <li className="px-4 py-2 hover:text-blue-500 cursor-pointer transition duration-300" onClick={() => scrollToSection('portofolio')}>
                    Portfolio
                </li>
                <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-full hover:from-red-500 hover:to-blue-500 transition duration-300 ease-in-out">
                    <li className="px-4 py-2 text-white cursor-pointer" onClick={() => scrollToSection('contact')}>
                        Contact Me
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
