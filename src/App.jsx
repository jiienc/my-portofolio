import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="bg-black font-montserrat text-white">
            <Navbar />
            <Header />
            <AboutMe />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
