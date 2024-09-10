import React from "react";
import profilepic from "../assets/ppic.png";
import tail from "../assets/tail.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiSass, DiBootstrap, DiGithub, DiGit, DiGitCommit, DiJava, DiDart, DiMysql, DiLaravel, DiPhp, DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { BiLogoFlutter, BiLogoTailwindCss } from "react-icons/bi";


const Hero = () => {
  return (
      <div className=" flex-col justify-center items-center min-h-screen md:min-h-[80vh] max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-5 mb-5 md:px-5 md:mt-3 h-full" id="home">
      <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2, 
          delay: 0.7, 
          ease: [0.25, 0.1, 0.25, 1]
        }}
        exit={{ opacity: 0, x: -100, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" }}}
        exitTransition={{ duration: 0.1, ease: "easeOut" }}
        
        className="grid grid-cols-2 md:col-span-5 py-2 pl-2 pr-2 md:m-0 glass">
        <img className="w-[400px] " src={profilepic} alt="Profile Pic" />
        <div className="my-auto ml-2 flex-col text-gray-200">
          <p className="text-lg md:text-3xl font-bold py-1">
            Hi Fellas!
            <br /> I am Sakti Padmayoga
            <div className="text-base md:text-2xl">
            a/an <br className="sm:hidden"/>
              <TypeAnimation sequence={[" Web Developer", 1000, " Software Developer", 1000, " UI Designer", 1000]} wrapper="span" speed={50} repeat={Infinity} />  
            </div>
            
          </p>
          <p className="text-lg md:text:2xl text-gray-400 font-semibold mt-2 hidden">with 0 year of experience :D.</p>
          <button className="mt-4 px-4 py-2 text-sm font-bold text-gray-200 bg-primary-color rounded-lg ">Download CV  💌</button>
          <button className="mt-4 md:ml-3 px-4 py-2 text-sm font-bold text-gray-200 bg-zinc-800 rounded-lg hover:bg-slate-600 transition duration-300">
            <a href="/about">About Me →</a>
          </button>
        </div>
      </motion.div>

      <div className="grid md:col-span-3 gap-6" id="skills">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1]
          }} 
          exit={{ opacity: 0, y: -100, transition: { delay: 0.5, duration: 0.5, ease: "easeOut" } }}
          exitTransition={{ duration: 0.1, ease: "easeOut" }}
          className="p-8 md:p-12 text-7xl text-center md:mt-2 glass">
          <p className=" text-gray-200 text-2xl font-bold mb-5">Some of My Tech Stack</p>
          <div className="grid grid-cols-4 text-center justify-center gap-2">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiBootstrap className="text-purple-600" />
            <DiPhp className="text-indigo-500" />
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-cyan-400" />
            <BiLogoTailwindCss className="text-teal-500" />
            <DiJava className="text-orange-700" />
            <DiMysql className="text-blue-400" />
            <BiLogoFlutter className="text-sky-500" />
            <DiLaravel className="text-red-400" />
            <DiGit className="text-red-500" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.3,
            ease: [0.25, 0.1, 0.25, 1]
          }}  
          exit={{ opacity: 0, y:100, transition: { delay: 0.7, duration: 0.5, ease: "easeOut" } }}
          exitTransition={{ duration: 0.1, ease: "easeOut" }}
          
          className="  p-8 glass text-gray-400 text-center mb-7  sm:mb-2">
            <p className=" text-gray-200 text-2xl font-bold ">Find me</p> <br />
            <div className=" text-6xl gap-4 flex justify-center items-center ">
            <a href="https://www.linkedin.com/in/sakti-padmayoga/" target="_blank" rel="noopener noreferrer" className=" hover:text-slate-100 transition duration-300"><AiFillLinkedin /></a>
            <a href="https://github.com/SaktiPadmayoga" target="_blank" rel="noopener noreferrer" className=" hover:text-slate-100 transition duration-300"><AiFillGithub/></a>
            <a href="https://www.instagram.com/saqtii" target="_blank" rel="noopener noreferrer" className=" hover:text-slate-100 transition duration-300"><AiFillInstagram/></a>  
            </div>
        </motion.div>
      </div>
    </div>
    
  );
};

export default Hero;
