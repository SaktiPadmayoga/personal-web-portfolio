import React from "react";
import profilepic from "../assets/ppic.png";
import tail from "../assets/tail.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiSass, DiBootstrap, DiGithub, DiGit, DiGitCommit, DiJava, DiDart, DiMysql, DiLaravel } from "react-icons/di";
import { motion } from "framer-motion";
// import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div  className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-5 md:p-0 md:p-15 md:pt-3" id="home">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 1, 0.8, 1.01]
      }} className="grid grid-cols-2 md:col-span-5 p-2 glass">
        <img className="w-[400px] " src={profilepic} alt="Profile Pic" />
        <div className="my-auto ml-2 flex-col text-gray-200">
          <p className="text-2xl md:text-3xl font-bold py-1">
            Hi! I am Sakti Padmayoga
            <br /> a/an
            <TypeAnimation sequence={[" Web Developer", 1000, " Software Developer", 1000, " UI Designer", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </p>
          <p className="text-lg md:text:2xl text-gray-400 font-semibold mt-2">with 0 year of experience :D.</p>
          <button className="mt-4 px-4 py-2 text-sm font-bold text-gray-200 bg-primary-color rounded-lg">Download CV  💌</button>
          <button className="mt-4 ml-3 px-4 py-2 text-sm font-bold text-gray-200 bg-zinc-800 rounded-lg">
            <a href="/about">About Me →</a>
          </button>
        </div>
      </motion.div>

      <div className="grid md:col-span-3 gap-6" id="skills">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 4,
            delay: 0.5,
            ease: [0, 1, 0.2, 1.01]
          }} className="p-12 text-7xl text-center glass">
          <p className=" text-gray-200 text-2xl font-bold mb-5">Some of My Tech Stack</p>
          <div className="grid grid-cols-4 text-center justify-center gap-2">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiSass className="text-pink-600" />
            <DiBootstrap className="text-purple-600" />
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
            <img className="max-w-16 pt-4 pl-1" src={tail} alt="" />
            <DiJava className="text-orange-700" />
            <DiMysql className="text-blue-400" />
            <DiLaravel className="text-red-400" />
            <DiGit className="text-red-500" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 5,
      delay: 0.5,
      ease: [0, 1, 0.2, 1.01]
    }}  className="  p-8 glass text-gray-400 text-center">
          <p className=" text-gray-200 text-2xl font-bold ">Find me</p> <br />
          <div className=" text-6xl gap-4 flex justify-center items-center">
            <a href="https://www.linkedin.com/in/sakti-padmayoga/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/SaktiPadmayoga" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
            <a href="https://www.instagram.com/saqtii" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
            
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
