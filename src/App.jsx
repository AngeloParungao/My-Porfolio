import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
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
  const MotionFontAwesomeIcon = motion(FontAwesomeIcon);

  //--------------------------------------Screen Sizes--------------------------------------
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1025px)' });
  
  const toggleDarkMode = () => {
    setDarkMode((prevDark) => !prevDark);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Header dark={dark} toggleDarkMode={toggleDarkMode} />
      <section className="flex lg:flex-row flex-col-reverse justify-center items-center h-screen w-full px-10 lg:px-28 xl:px-35 lg:gap-0 gap-10">
        <motion.div 
          className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-5"
          initial={{ 
            x: isSmallScreen ? "0" : "-3rem",
            y: isSmallScreen ? "3rem" : "0",  
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span className="text-2xl md:text-5xl font-bold">
            Angelo Miguel Parungao
          </span>
          <span className="text-xl md:text-3xl text-red-600">
            Front-end Developer
          </span>
          <p className="font-medium text-gray-800 dark:text-gray-400 text-center lg:text-left">
            I specialize in crafting responsive, user-friendly web interfaces
            with a focus on clean, efficient code. Skilled in HTML, CSS,
            JavaScript, and React, I bring designs to life with a commitment to
            quality and performance. Explore my work to see how I turn ideas
            into seamless digital experiences.
          </p>
          <div className="flex flex-row gap-4">
            <button className="bg-transparent text-red-600 border border-2 border-red-600 py-2 px-4 rounded-xl hover:text-white hover:bg-red-600 transition duration-500">
              Resume
            </button>
            <button className="bg-red-600 text-white border border-2 border-red-600 py-2 px-4 rounded-xl hover:bg-transparent hover:text-red-600 hover:dark:text-white transition duration-500">
              Contact Me
            </button>
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-end items-center gap-4 lg:gap-20">
          <motion.div 
            className="outline outline-offset-8 outline-1 outline-black dark:outline-white animate-[wiggle_6s_ease-in-out_infinite]"
            initial={{ 
              x: isSmallScreen ? "0" : "3rem",
              y: isSmallScreen ? "3rem" : "0",  
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <img
              src={profile}
              alt="Angelo Miguel Parungao"
              className={`w-60 lg:w-96 rounded-full shadow-lg outline outline-offset-8 outline-1 outline-black dark:outline-white animate-[wiggle_3s_ease-in-out_infinite]`}
            />
          </motion.div>
          <div className="flex flex-row lg:flex-col justify-center items-center gap-8 text-xl">
            <motion.a
              href="https://www.facebook.com"
              aria-label="Facebook"
              initial={{ 
                x: isSmallScreen ? "0" : "1rem",
                y: isSmallScreen ? "1rem" : "0",  
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              aria-label="Instagram"
              initial={{ 
                x: isSmallScreen ? "0" : "1rem",
                y: isSmallScreen ? "1rem" : "0",  
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              aria-label="Instagram"
              initial={{ 
                x: isSmallScreen ? "0" : "1rem",
                y: isSmallScreen ? "1rem" : "0",  
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              aria-label="Linkedin"
              initial={{ 
                x: isSmallScreen ? "0" : "1rem",
                y: isSmallScreen ? "1rem" : "0",  
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1.5,
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center items-center w-full px-10 lg:px-28 xl:px-35">
        <div className="flex flex-col items-center w-full">
          <motion.span className="w-full font-medium text-base lg:text-xl mb-4 border-b-2 border-dashed border-gray-400 dark:border-gray-600 pb-3"
            initial={{
              translateX: "-10%",
              opacity: 0,
            }}
            whileInView={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
          >
            TECHNOLOGIES
          </motion.span>
          <div className="flex flex-wrap justify-center items-center gap-14 py-10">
            <MotionFontAwesomeIcon
              icon={faHtml5} title="HTML"
              className="text-[#E34F26] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <MotionFontAwesomeIcon
              icon={faCss3} title="CSS"
              className="text-[#1572B6] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <motion.img
              src={tailwind} title="Tailwind"
              className="w-16 rounded-lg p-5 px-4 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <MotionFontAwesomeIcon
              icon={faJs} title="javascript"
              className="text-[#F7DC6F] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <MotionFontAwesomeIcon
              icon={faReact} title="React"
              className="text-[#61DAFB] text-5xl rounded-lg p-2 px-3 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <MotionFontAwesomeIcon
              icon={faPhp} title="PHP"
              className="text-[#777BB4] text-4xl rounded-lg p-3 px-3 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <motion.img
              src={mysql} title="MySQL"
              className="w-16 rounded-lg p-3 px-4 backdrop-blur-md transition duration-100 cursor-pointer cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
            <motion.img
              src={python} title="Python"
              className="w-16 rounded-lg p-3 px-3 backdrop-blur-md transition duration-100 cursor-pointer"
              initial={{ 
                y: "0rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
              }}
              animate={{
                y: ["0rem", "-1rem", "0rem"],
                boxShadow: [
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                  dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                  dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 5,
                delay: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: "-1rem",
                boxShadow: dark ? "0 10px 20px rgba(255,255,255,0.5)" : "0 10px 20px rgba(0,0,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
