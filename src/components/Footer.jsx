import React from 'react';

const Footer = () => {
    return (
        <div className="mx-[170px] flex flex-col gap-8">
            <hr/>
            <div className="flex justify-between text-[15px] mb-4">
                <div className="w-[80%]">
                    <p>Copyright &copy; 2024 Gian Nathan Christyo Nugroho. All rights reserved.</p>
                </div>
                <div className="flex gap-[50px] w-[20%]">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
