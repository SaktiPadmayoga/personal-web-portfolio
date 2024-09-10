import React from 'react'
import profilepic from "../assets/ppic5.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";



const About = () => {
  return (
    <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 p-10 md:mt-[85px] md:p-1">
      <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{
        duration: 0.6,
        delay: 1.7,
        ease: [0.25, 0.1, 0.25, 1]
      }}  
      exit={{ opacity: 0, x:-50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.5, ease: "easeOut", delay:0 }}
      className="grid md:col-span-1 gap-6" id="skills">
      <div className="my-auto flex-col text-gray-200 p-2">
          <p className="text-3xl md:text-4xl font-bold py-1">
            <span>About</span> 
            <TypeAnimation sequence={[" Me", 1500, " Sakti", 1500]} speed={50} repeat={Infinity} className="text-white" />
          </p>
          <p className="text-m md:text-lg text-gray-300 pt-2 text-justify">
            My name is Anak Agung Gede Sakti Padmayoga usually called Sakti. Currently, I'm studying at Atma Jaya Yogyakarta University majoring in Informatics. I enjoy creating things that live on the internet. My passion for Web & Software Development started back in September 2021. 
          </p>
          <p className="text-m md:text-lg text-gray-300 pt-4 text-justify">
            I am driven and ambitious. I thrive on challenges and establish goals for myself regularly, so I always have something to strive ahead. I enjoy meeting new people and learning about their experiences and backgrounds.
          </p>
          <button className="mt-4 px-4 py-2 text-md font-bold text-gray-200 bg-primary-color rounded-lg">Download CV</button>
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 2,
        ease: [0.25, 0.1, 0.25, 1]
      }}  
      exit={{ opacity: 0, x:50, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.5, ease: "easeOut", delay:0 }}
      className="hidden md:p-2 glass md:flex justify-center items-center text-center" >
        <img className="w-[330px] h-auto  " src={profilepic} alt="Profile Pic" />
      </motion.div>

    </div>
  )
}

export default About;