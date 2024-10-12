import React from 'react';
import { assets } from "../assets/images/image.js";

const Header = () => {
    return (
        <header id="home" className="bg-black text-center flex flex-col items-center justify-center min-h-screen py-10">
            <div className="w-full max-w-6xl p-8">
                <img
                    src={assets.profile}
                    alt="Profile Picture of Gian Nathan Christyo Nugroho"
                    className="w-40 h-48 rounded-full mb-8 mx-auto object-cover"
                />
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 mb-8">
                    Gian Nathan Christyo Nugroho
                </h1>
                <p className="mb-8 text-lg leading-relaxed">
                    I'm a recent graduate from Duta Wacana Christian University, Yogyakarta with a Bachelor's degree in
                    Informatics, specializing in Deep Learning model development with TensorFlow and web development
                    using JavaScript. Throughout my studies, I have developed various projects that have honed my
                    technical skills and provided a deep understanding of best practices in AI model development and
                    React JS development.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://drive.google.com/file/d/16kcnKFWp_dA4N9Db7gJXfrWKTWfyFnh3/view?usp=sharing"
                        className="bg-gradient-to-r from-blue-500 to-red-500 rounded-full hover:from-red-500 hover:to-blue-500 ease-in-out px-6 py-3 cursor-pointer transform transition-transform duration-500 hover:scale-125"
                        aria-label="Download My Resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-white font-semibold">My Resume</span>
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;
