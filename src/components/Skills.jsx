import React, { useState, useEffect } from "react";
import tail from "../assets/tail.png";
import { DiHtml5, DiCss3, DiSass, DiBootstrap, DiJavascript1, DiReact, DiNodejsSmall, DiJava, DiLaravel, DiMysql, DiDart, DiGithub, DiGit, DiPhp, DiJsBadge, DiJavascript, DiMongodb, DiVisualstudio } from "react-icons/di";
import { motion } from "framer-motion";
import { BiLogoFigma, BiLogoFlutter, BiLogoGithub, BiLogoPhp, BiLogoTailwindCss, BiLogoVisualStudio } from "react-icons/bi";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1, // Duration for the parent div
      ease: "easeInOut",
      staggerChildren: 0.2 ,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Skills = () => {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItems(true);
    }, 2000); // Adjust this value to control the delay

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <motion.div
      onAnimationComplete={() => setShowItems(true)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition= {{
        ease: "easeInOut",
        staggerChildren: 0.2,
        duration :1,
        delay: 1.5,
      }}
      exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.1, ease: "easeOut" }}
      className="flex-col justify-center items-center h-[75vh] max-w-[1200px] pb-5 mx-auto my-auto pt-10 md:p-7 md:pt-10 p-7 mb-48"
      id="home"
    >
      <div className="p-11 text-7xl text-center glass">
        <p className="text-gray-200 text-3xl font-bold mb-10">Things that I've worked with</p>

        <motion.div
        onAnimationComplete={() => setShowItems(true)}
          className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={showItems ? "show" : "hidden"}
          transition={{ delay: 0.4 }}
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
            <DiJavascript className="flex text-yellow-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">JavaScript</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiBootstrap className="flex text-purple-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Bootstrap</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiPhp className="flex text-indigo-400 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">PHP</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <BiLogoTailwindCss className="flex text-teal-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Tailwind</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiReact className="flex text-cyan-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">React</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiMongodb className="flex text-green-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">MongoDB</p>
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
            <DiDart className="flex text-blue-600 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Dart</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <BiLogoFlutter className="flex text-sky-400 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Flutter</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <BiLogoGithub className="flex text-gray-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">GitHub</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiGit className="flex text-red-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Git</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <DiVisualstudio className="flex text-blue-500 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">VS Code</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-4 glass hover:bg-slate-700 transition duration-300">
            <BiLogoFigma className="flex text-orange-400 item-center m-auto" />
            <p className="m-auto mt-2 text-gray-300">Figma</p>
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
              <DiJavascript className="text-yellow-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiBootstrap className="text-purple-600" />
            </div>
            <div className="flex justify-center items-center">
              <BiLogoPhp className="text-indigo-400" />
            </div>
            <div className="flex justify-center items-center">
              <BiLogoTailwindCss className="text-teal-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiReact className="text-cyan-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiMongodb className="text-green-500" />
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
              <DiDart className="text-blue-600" />
            </div>
            <div className="flex justify-center items-center">
              <BiLogoFlutter className="text-sky-400" />
            </div>
            <div className="flex justify-center items-center">
              <BiLogoGithub className="text-gray-500" />
            </div>
            <div className="flex justify-center items-center">
              <DiGit className="text-red-500" />
            </div>
            <div className="flex justify-center items-center">
              <BiLogoVisualStudio className="text-blue-500" />
            </div>
            <div className="flex justify-center items-center">
              <BiLogoFigma className="text-orange-400" />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
