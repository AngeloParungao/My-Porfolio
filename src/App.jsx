import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Toaster , toast } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header";
import "./App.css";
import logos from "./assets/images";
import profile from "./assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowDown, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [dark, setDarkMode] = useState(false);

  //--------------------------------------Screen Sizes--------------------------------------
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1025px)" });

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottomThreshold = 100;
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const isScrolledToBottom = scrollPosition >= pageHeight - bottomThreshold;
      setShowScrollDown(!isScrolledToBottom);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDark) => !prevDark);
  };

  const srcs = [
    { title: "HTML", logo: logos.html },
    { title: "CSS", logo: logos.css },
    { title: "JavaScript", logo: logos.js },
    { title: "React", logo: logos.react },
    { title: "Tailwind", logo: logos.tailwind },
    { title: "MySQL", logo: logos.mysql },
    { title: "PHP", logo: logos.php },
    { title: "Python", logo: logos.python },
    { title: "Figma", logo: logos.figma },
  ];

  const techAnimations = {
    initial: {
      y: "0rem",
      boxShadow: dark
        ? "0 10px 20px rgba(255,255,255,0)"
        : "0 10px 20px rgba(0,0,0,0)",
    },
    animate: {
      y: ["0rem", "-1rem", "0rem"],
      boxShadow: [
        dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
        dark
          ? "0 10px 20px rgba(255,255,255,0.5)"
          : "0 10px 20px rgba(0,0,0,0.5)",
        dark ? "0 10px 20px rgba(255,255,255,0)" : "0 10px 20px rgba(0,0,0,0)",
      ],
    },
    whileHover: {
      y: "-1rem",
      boxShadow: dark
        ? "0 10px 20px rgba(255,255,255,0.5)"
        : "0 10px 20px rgba(0,0,0,0.5)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className={dark ? "dark" : ""}>
      {showSplash && (
        <motion.div
          className="h-dvh  flex justify-center items-center overflow-hidden dark"
          initial={{ y: "0%" }}
          animate={{
            y: "-100%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
        >
          <motion.span
            className="flex text-6xl md:text-8xl font-bold text-center overflow-hidden"
            initial={{ x: "-100%" }}
            animate={{
              x: "0%",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            HELL0
            <motion.img
              src={logos.icon}
              alt="icon"
              className="self-end w-4 h-4 md:w-6 md:h-6"
              initial={{ y: "-100%", opacity: 0 }} // Start from the top of the screen
              animate={{
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.6,
                  ease: "easeOut",
                  type: "spring", // Add bounce effect
                  stiffness: 100,
                  damping: 10,
                },
              }}
            />
          </motion.span>
        </motion.div>
      )}
      {!showSplash && (
        <div>
          <Header dark={dark} toggleDarkMode={toggleDarkMode} />
          {showScrollDown && <motion.div className="fixed bottom-8 right-24 hidden lg:block z-10"
            initial={{ y: "100%" , opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}

          >
            <FontAwesomeIcon icon={faArrowDown} size="1x" className="absolute text-gray-700 dark:text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"/>
            <motion.img
              src={dark ? logos.dark_scroll : logos.scroll}
              alt=""
              className="w-20 hover:cursor-pointer"
              animate={{
                transform: ["rotate(0deg)", "rotate(360deg)"],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  loop: Infinity,
                },
              }}
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            />
          </motion.div>}
          {/*--------------------------------------Home Section--------------------------------------*/}
          <section
            id="home"
            className="flex lg:flex-row flex-col-reverse justify-center items-center h-dvh w-full px-10 lg:px-24 xl:px-35 lg:gap-0 md:gap-15 gap-10 h-screen"
          >
            <motion.div
              className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-5 lg:gap-7"
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
              <span
                className="text-4xl md:text-7xl font-bold"
                style={{
                  WebkitTextStroke: `0.4px ${dark ? "gray" : "black"}`,
                  color: "transparent",
                }}
              >
                FRONT END DEV
              </span>
              <span className="text-xl md:text-2xl font-normal">
                Hi there, I'm{" "}
                <span className="text-red-600 font-medium">Angelo</span>
              </span>
              <p className="font-bold text-2xl md:text-5xl md:px-10 lg:px-0 text-gray-800 lg:pr-4 dark:text-gray-400 text-center lg:text-left">
                Turning ideas into seamless, high-quality digital experiences.
              </p>
              <div className="flex flex-row gap-4">
                <button className="bg-red-600 text-white border border-2 border-red-600 py-2 px-4 rounded-xl hover:bg-transparent hover:text-red-600 hover:dark:text-white transition duration-500">
                  Contact Me
                </button>
                <button className="bg-transparent text-red-600 border border-2 border-red-600 py-2 px-4 rounded-xl hover:text-white hover:bg-red-600 transition duration-500">
                  Resume
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
                  href="https://www.facebook.com/parungao.angelo.2802/"
                  aria-label="Facebook"
                  className="text-black dark:text-white hover:text-[#4267B2] hover:dark:text-[#4267B2]"
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
                  href="https://www.instagram.com/eyemel_/"
                  aria-label="Instagram"
                  className="text-black dark:text-white hover:text-[#C13584] hover:dark:text-[#C13584]"
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
                  href="https://github.com/AngeloParungao"
                  aria-label="Github"
                  className="text-black dark:text-white hover:text-[#24292F] hover:dark:text-[#24292F]"
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
                  className="text-black dark:text-white hover:text-[#0077B5] hover:dark:text-[#0077B5]"
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
          {/*--------------------------------------About Section--------------------------------------*/}
          <section
            id="about"
            className="h-dvh flex flex-col justify-center items-center w-full px-10 lg:px-28 xl:px-35"
          >
            <div className="flex flex-col items-center w-full">
              <motion.span
                className="w-full font-medium text-base lg:text-xl mb-4 border-b-2 border-dashed border-gray-400 dark:border-gray-600 pb-3"
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
                {srcs.map((src, index) => {
                  return (
                    <div
                      className="flex flex-col justify-center items-center"
                      key={src.title}
                    >
                      <motion.img
                        src={src.logo}
                        title={src.title}
                        className="w-16 rounded-lg p-3 px-3 backdrop-blur-md cursor-pointer"
                        initial={techAnimations.initial}
                        animate={techAnimations.animate}
                        whileHover={techAnimations.whileHover}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        alt={src.title}
                      />
                      <span className="text-sm text-gray-600 font-medium">
                        {src.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section id="contact" className="h-dvh w-full px-10 lg:px-28 xl:px-35 flex justify-center items-center">
              <Toaster position="bottom-right" reverseOrder={false}/>
              <div className="w-full flex flex-col md:flex-row justify-center lg:items-center gap-10 md:gap-0">
                <div className="md:w-1/2 flex flex-col justify-center gap-5 md:p-5">
                  <span className="text-4xl md:text-6xl font-medium">Let's start a project together</span>
                  <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">Get in touch</span>
                  <div className="flex flex-col items-center gap-3 py-3 md:px-5">
                    <div className="flex items-center w-full h-[3rem] bg-gray-200 dark:bg-black rounded-lg p-3 hover:cursor-pointer">
                      <FontAwesomeIcon icon={faEnvelope} className="text-md p-3" />
                      <span
                        onClick={() => {
                          navigator.clipboard.writeText("angeloparungao.ap@gmail.com");
                          toast.success("Email copied to clipboard");
                        }}
                      >
                        angeloparungao.ap@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center w-full h-[3rem] bg-gray-200 dark:bg-black rounded-lg p-3 hover:cursor-pointer">
                      <FontAwesomeIcon icon={faPhone} className="text-md p-3" />
                      <span
                        onClick={() => {
                          navigator.clipboard.writeText("+63 992 404 6185");
                          toast.success("Phone number copied to clipboard");
                        }}
                      >
                        +63 992 404 6185
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center md:w-1/2 pt-10 md:p-10 border-t-2 md:border-t-0 md:border-l-2 border-gray-200 dark:border-gray-600">
                  <form action="" className="flex flex-col gap-5">
                    <span className="text-2xl font-medium">Send me a message</span>
                    <input type="text" placeholder="Email" className="w-full h-[2.5rem] bg-gray-200 dark:bg-black rounded-lg pl-5 dark:placeholder:text-gray-500 focus:outline-black focus:dark:outline-white"/>
                    <input type="text" placeholder="Subject" className="w-full h-[2.5rem] bg-gray-200 dark:bg-black rounded-lg pl-5 dark:placeholder:text-gray-500 focus:outline-black focus:dark:outline-white"/>
                    <label htmlFor="Message" className="text-sm text-gray-600 dark:text-gray-400">Tell me about your project</label>
                    <textarea placeholder="Message" id="Message" className="w-full h-[10rem] bg-gray-200 dark:bg-black rounded-lg p-5 resize-none dark:placeholder:text-gray-500 focus:outline-black focus:dark:outline-white"/>
                    <button className="w-full h-[2.5rem] bg-red-500 rounded-lg text-white">Send</button>
                  </form>
                </div>
              </div>
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
