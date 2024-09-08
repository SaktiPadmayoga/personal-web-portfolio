import React from "react";
import tail from "../assets/tail.png";
import { DiHtml5, DiCss3, DiSass, DiBootstrap, DiJavascript1, DiReact, DiNodejsSmall, DiJava, DiLaravel, DiMysql, DiDart, DiGithub, DiGit } from "react-icons/di";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Controls the delay between animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0, 1, 0.8, 1.01]
      }}
      className="flex-col justify-center items-center min-h-screen md:min-h-[80vh] max-w-[1200px] pb-5 mx-auto pt-10 md:p-0 md:pt-10 p-7" id="home">
      <div className="p-11 text-7xl text-center glass">
        <p className="text-gray-200 text-3xl font-bold mb-10">Things that I've worked with</p>
        <motion.div
          className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiHtml5 className="flex text-orange-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">HTML</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiCss3 className="flex text-blue-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">CSS</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiJavascript1 className="flex text-yellow-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">JavaScript</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiBootstrap className="flex text-purple-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Bootstrap</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiSass className="flex text-pink-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Sass</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <div className="flex justify-center items-center mt-3">
              <img className="w-20 h-12" src={tail} alt="Tailwind" />
            </div>
            <p className="mt-5 text-gray-300">Tailwind</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiReact className="flex text-cyan-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">React</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiNodejsSmall className="flex text-green-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Node.js</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiJava className="flex text-orange-700 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Java</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiLaravel className="flex text-red-400 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Laravel</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiMysql className="flex text-sky-800 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">MySQL</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiDart className="flex text-sky-400 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Dart</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiGithub className="flex text-gray-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">GitHub</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiGit className="flex text-red-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Git</p>
          </motion.div>
        </motion.div>
        <div className="sm:hidden grid grid-cols-4 text-center gap-2">
            <div className="flex justify-center items-center">
              <DiHtml5 className="text-orange-600" />
            </div>
            <div className="flex justify-center items-center">
              <DiCss3 className="text-blue-600" />
            </div>
            <div className="flex justify-center items-center">
              <DiSass className="text-pink-600" />
            </div>
            <div className="flex justify-center items-center">
              <DiBootstrap className="text-purple-600" />
            </div>
            <div className="flex justify-center items-center">
              <DiJavascript1 className="text-yellow-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiReact className="text-blue-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiNodejsSmall className="text-green-500" />
            </div>
            <div className="flex justify-center items-center">
              <img className="max-w-16 pt-4 pl-1" src={tail} alt="Tailwind CSS" />
            </div>
            <div className="flex justify-center items-center">
              <DiJava className="text-orange-700" />
            </div>
            <div className="flex justify-center items-center">
              <DiLaravel className="text-red-400" />
            </div>
            <div className="flex justify-center items-center">
              <DiMysql className="text-sky-800" />
            </div>
            <div className="flex justify-center items-center">
              <DiDart className="text-sky-400" />
            </div>
            <div className="flex justify-center items-center">
              <DiGithub className="text-gray-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiGit className="text-red-500" />
            </div>
          </div>

      </div>
    </motion.div>
  );
};

export default Skills;
