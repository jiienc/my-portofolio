import React from 'react';
import ProjectList from '../utils/project-list';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

const Project = () => {
    return (
        <div id="portofolio" className="bg-black flex flex-col items-center justify-center gap-20 m-[80px] mx-[170px]">
            <div className="relative">
                <h1 className="text-5xl px-8 font-semibold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                    My Projects
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-10 mb-20">
                {ProjectList.map(({ id, name, tech }, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center gap-5 p-4 rounded-lg border-2 border-white transition duration-500 cursor-pointer transform hover:scale-105 hover:border-blue-500 hover:bg-gradient-to-r hover:from-neutral-800 hover:to-red-700"
                    >
                        <h3 className="text-[24px] font-semibold">{id}</h3> {/* Reduced font size */}
                        <h2 className="text-[32px] font-extrabold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                            {name}
                        </h2> {/* Reduced font size */}
                        <p className="text-[#d4d4d4] text-[20px] leading-[32px] max-w-[300px]">{tech}</p> {/* Reduced font size */}
                        <div className="flex gap-5 items-center mt-5">
                            <p className="text-[16px]">Read More</p> {/* Reduced font size */}
                            <DoubleArrowRoundedIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
