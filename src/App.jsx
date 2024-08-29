import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import profile from "./assets/profile.jpg";
import tailwind from "./assets/tailwind.png";
import mysql from "./assets/mysql.png";
import python from "./assets/python.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [dark, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDark) => !prevDark);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Header dark={dark} toggleDarkMode={toggleDarkMode} />
      <section className="flex lg:flex-row flex-col-reverse justify-center items-center h-screen w-full px-10 lg:px-28 xl:px-35 lg:gap-0 gap-10">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-5">
          <span className="text-2xl md:text-5xl font-bold lg:animate-[fromRight_0.5s_ease-in_forwards]">
            Angelo Miguel Parungao
          </span>
          <span className="text-xl md:text-3xl text-red-600  lg:animate-[fromRight_1s_ease-in_forwards]">
            Front-end Developer
          </span>
          <p className="font-medium text-gray-800 dark:text-gray-400 text-center lg:text-left lg:animate-[fromRight_1.5s_ease-in_forwards]">
            I specialize in crafting responsive, user-friendly web interfaces
            with a focus on clean, efficient code. Skilled in HTML, CSS,
            JavaScript, and React, I bring designs to life with a commitment to
            quality and performance. Explore my work to see how I turn ideas
            into seamless digital experiences.
          </p>
          <div className="flex flex-row gap-4 lg:animate-[fromRight_2s_ease-in-out_forwards]">
            <button className="bg-transparent text-red-600 border border-2 border-red-600 py-2 px-4 rounded-xl hover:text-white hover:bg-red-600 transition duration-500">
              Resume
            </button>
            <button className="bg-red-600 text-white border border-2 border-red-600 py-2 px-4 rounded-xl hover:bg-transparent hover:text-red-600 hover:dark:text-white transition duration-500">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-end items-center gap-4 lg:gap-20">
          <div className="outline outline-offset-8 outline-1 outline-black dark:outline-white animate-[wiggle_6s_ease-in-out_infinite]">
            <img
              src={profile}
              alt="Angelo Miguel Parungao"
              className={`w-60 lg:w-96 rounded-full shadow-lg outline outline-offset-8 outline-1 outline-black dark:outline-white animate-[wiggle_3s_ease-in-out_infinite]`}
            />
          </div>
          <div className="flex flex-row lg:flex-col justify-center items-center gap-8 text-xl">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-600 hover:scale-150 lg:animate-[fromLeft_1s_ease-in_forwards]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-600 hover:scale-150 lg:animate-[fromLeft_2s_ease-in_forwards]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="hover:text-gray-600 hover:scale-150 lg:animate-[fromLeft_3s_ease-in_forwards]"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="Linkedin"
              className="hover:text-blue-600 hover:scale-150 lg:animate-[fromLeft_4s_ease-in_forwards]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col items-center w-full px-10 lg:px-28 xl:px-35">
        <div className="flex flex-col items-center w-full">
          <span className="self-start font-bold text-base lg:text-xl mb-4">
            TECHNOLOGIES
          </span>
          <div className="flex flex-wrap justify-center items-center gap-14 py-10">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#E34F26] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_0ms_infinite] dark:animate-[upDark_5s_ease-in-out_0ms_infinite]"
            />
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#1572B6] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_200ms_infinite] dark:animate-[upDark_5s_ease-in-out_200ms_infinite]"
            />
            <img
              src={tailwind}
              className="w-16 rounded-lg p-5 px-4 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_400ms_infinite] dark:animate-[upDark_5s_ease-in-out_400ms_infinite]"
              alt="Tailwind"
            />
            <FontAwesomeIcon
              icon={faJs}
              className="text-[#F7DC6F] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_600ms_infinite] dark:animate-[upDark_5s_ease-in-out_600ms_infinite]"
            />
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#61DAFB] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_800ms_infinite] dark:animate-[upDark_5s_ease-in-out_800ms_infinite]"
            />
            <FontAwesomeIcon
              icon={faPhp}
              className="text-[#777BB4] text-4xl rounded-lg p-3 px-3 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_1000ms_infinite] dark:animate-[upDark_5s_ease-in-out_1000ms_infinite]"
            />
            <img
              src={mysql}
              className="w-16 rounded-lg p-3 px-4 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_1200ms_infinite] dark:animate-[upDark_5s_ease-in-out_1200ms_infinite]"
              alt="MySQL"
            />
            <img
              src={python}
              className="w-16 rounded-lg p-3 px-3 backdrop-blur-md transition duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] hover:dark:shadow-[0_10px_20px_0_rgba(155,155,155,0.5)] hover:animate-none animate-[upLight_5s_ease-in-out_1400ms_infinite] dark:animate-[upDark_5s_ease-in-out_1400ms_infinite]"
              alt="Python"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
