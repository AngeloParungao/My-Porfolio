import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import profile from "./assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram , faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [dark, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDark => !prevDark);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="lg:absolute w-full">
        <Header dark={dark} toggleDarkMode={toggleDarkMode} />
      </div>
      <section className="flex lg:flex-row flex-col-reverse justify-center items-center h-screen w-full px-10 lg:px-28 xl:px-35 lg:gap-0 gap-10">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-4">
          <span className="text-2xl md:text-5xl font-bold">Angelo Miguel Parungao</span>
          <span className="text-xl md:text-3xl text-red-600">Front-end Developer</span>
          <p className="text-gray-600 text-center lg:text-left">
            I am currently a third-year BSIT student specializing in Web and Mobile Development 
            at Bulacan State University. I want to become a front-end developer.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-xl">Resume</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-xl">Contact Me</button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-end items-center gap-4 lg:gap-20">
          <div className="outline outline-offset-8 outline-1 outline-black dark:outline-white animate-[wiggle_6s_ease-in-out_infinite]">
            <img src={profile} alt="Angelo Miguel Parungao" className={`w-60 lg:w-96 rounded-full shadow-lg outline outline-offset-8 outline-1 outline-black dark:outline-white animate-[wiggle_3s_ease-in-out_infinite]`} />
          </div>
          <div className="flex flex-row lg:flex-col justify-center items-center gap-8 text-xl">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com" aria-label="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
