import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import VillaRoundedIcon from '@mui/icons-material/VillaRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a4d3592b-2b8d-488c-9fbe-7c770100eee9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Form Submitted Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
        }
    };

    return (
        <div id="contact" className="bg-black flex flex-col items-center justify-center gap-20 m-[80px] mx-[20px] lg:mx-[170px]">
            <ToastContainer />
            <div className="relative">
                <h1 className="text-5xl px-8 font-semibold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                    Get In Touch
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
                <div className="flex flex-col gap-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-orange-300 bg-clip-text text-transparent">Let's talk</h1>
                    <p className="max-w-[550px] text-[#D8D8D8] text-[18px] leading-[30px]">
                        I'm open to taking on new projects, so don't hesitate to reach out with any work you have in mind. You can contact me at any time.
                    </p>
                    <div className="flex flex-col gap-6 text-[#D8D8D8] text-[20px]">
                        <div className="flex items-center gap-4">
                            <EmailRoundedIcon />
                            <p>giannathan61@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PhoneRoundedIcon />
                            <p>+62 851-5542-3226</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <VillaRoundedIcon />
                            <p>Magelang, Indonesia</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                    <label htmlFor="name" className="text-[#D8D8D8] text-[20px] font-medium">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder='Enter your name'
                        name='name'
                        className="border-none w-full h-[68px] pl-5 rounded-[4px] bg-[#32323c] text-[#ΑΘΑΘΑΘ] text-[18px] font-outfit focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="email" className="text-[#D8D8D8] text-[20px] font-medium">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter your email'
                        name='email'
                        className="border-none w-full h-[68px] pl-5 rounded-[4px] bg-[#32323c] text-[#ΑΘΑΘΑΘ] text-[18px] font-outfit focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="message" className="text-[#D8D8D8] text-[20px] font-medium">Write your message here</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="8"
                        placeholder='Enter your message'
                        className="w-full border-none p-[20px] rounded-[4px] bg-[#32323c] text-[#ΑΘΑΘΑΘ] font-outfit text-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <button
                        type='submit'
                        className="border-none text-white rounded-[50px] text-[20px] py-[15px] px-[20px] mb-[50px] bg-gradient-to-r from-blue-500 to-red-500 cursor-pointer duration-350 transform transition-transform duration-300 hover:scale-110"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
