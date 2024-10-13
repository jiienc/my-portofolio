import React from 'react';
import { assets } from "../assets/images/image.js";

const AboutMe = () => {
    const skills = [
        { name: 'Python', width: '60%' },
        { name: 'JavaScript', width: '50%' },
        { name: 'Tensorflow', width: '60%' },
        { name: 'React JS', width: '45%' },
        { name: 'AWS', width: '45%' },
    ];

    const experiences = [
        { number: '1+', text: 'YEARS OF EXPERIENCE' },
        { number: '10+', text: 'PROJECTS COMPLETED' },
        { number: '5+', text: 'GOOD FEEDBACKS' }
    ];

    return (
        <div id="about" className="bg-black flex flex-col items-center justify-center gap-20 m-[80px] mx-[170px]">
            <div className="relative">
                <h1 className="text-5xl px-8 font-semibold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                    About Me
                </h1>
            </div>
            <div className="flex gap-20">
                <div className="w-[25%]">
                    <img src={assets.img1} alt="Profile"
                         className="w-full h-full rounded-lg"/>
                </div>
                <div className="flex flex-col gap-20 w-[75%]">
                    <div className="flex flex-col gap-5 text-24px font-medium">
                        <p>As a recent graduate from Duta Wacana Christian University, Yogyakarta with a Bachelor's degree in Informatics, I have specialized in Deep Learning model development using TensorFlow and web development using JavaScript. Throughout my studies, I have been involved in various projects that have honed my technical skills and provided a deep understanding of best practices in AI model development and React JS development.</p>
                        <p>One of my notable projects involved creating a deep learning model for image recognition, where I utilized TensorFlow to design, train, and optimize the model. This project allowed me to gain hands-on experience in data preprocessing, model evaluation, and fine-tuning hyperparameters. Additionally, I developed several web applications using React JS, where I focused on creating dynamic and responsive user interfaces. These projects not only enhanced my proficiency in JavaScript but also taught me the importance of state management, component lifecycle, and effective debugging techniques.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {skills.map(skill => (
                            <div key={skill.name} className="flex gap-12 items-center transition-transform duration-300 hover:scale-105">
                                <p className="min-w-[150px] text-[24px] font-medium">{skill.name}</p>
                                <div className="h-2 rounded-full ml-4 bg-gradient-to-r from-blue-500 to-red-500" style={{ width: skill.width }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-around mb-20">
                {experiences.map((experience, index) => (
                    <React.Fragment key={experience.text}>
                        <div className="flex flex-col items-center gap-2.5 transition-transform duration-500 hover:scale-125">
                            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
                                {experience.number}
                            </h1>
                            <p className="text-gray-300 mt-2">{experience.text}</p>
                        </div>
                        {index < 2 && (
                            <div className="h-24">
                                <div className="h-full w-1 bg-neutral-100 rounded-full"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;
