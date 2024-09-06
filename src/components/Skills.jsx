import React from "react";
import profilepic from "../assets/ppic.png";
import tail from "../assets/tail.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiSass, DiBootstrap, DiGithub, DiGit, DiGitCommit, DiJava, DiDart, DiMysql, DiLaravel, DiCode, DiPhp } from "react-icons/di";
// import ShinyEffect from "./ShinyEffect";

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5 pt-10 m:p-15 md:pt-10" id="home">

        <div className="p-11 text-7xl text-center glass">
          <p className=" text-gray-200 text-3xl font-bold mb-10">Things that I've worked with</p>
          <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center justify-center gap-8">
            <a href="">
              <div className="p-4 glass  hover:bg-slate-700 transition duration-300 ">
                <DiHtml5 className="flex text-orange-600 item-center m-auto"/>
                <p className="m-auto mt-2 text-gray-300">HTML</p>
              </div>
            </a>
            
            <div className="p-4 glass ">
              <DiCss3 className="flex text-blue-600 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">CSS</p>
            </div>
            <div className="p-4 glass ">
              <DiJavascript1 className="flex text-yellow-600 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Javascript</p>
            </div>
            <div className="p-4 glass ">
              <DiBootstrap className="flex text-purple-600 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Bootstrap</p>
            </div>
            <div className="p-4 glass ">
              <DiSass className="flex text-pink-600 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Sass</p>
            </div>
            <div className="p-4 glass ">
              <div className="flex justify-center items-center mt-3">
                <img className="w-20 h-12" src={tail} alt="Tailwind" />
              </div>
              <p className="mt-5 text-gray-300">Tailwind</p>
            </div>
            <div className="p-4 glass ">
              <DiReact className="flex text-cyan-500 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">React</p>
            </div>
            <div className="p-4 glass ">
              <DiNodejsSmall className="flex text-green-500 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">NodeJs</p>
            </div>
            <div className="p-4 glass ">
              <DiJava className="flex text-orange-700 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Javascript</p>
            </div>
            <div className="p-4 glass ">
              <DiLaravel className="flex text-red-400 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Laravel</p>
            </div>
            <div className="p-4 glass ">
              <DiMysql className="flex text-sky-800 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">MySql</p>
            </div>
            <div className="p-4 glass ">
              <DiDart className="flex text-sky-400 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Dart </p>
            </div>
            <div className="p-4 glass ">
              <DiGithub className="flex text-gray-500 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">GitHub</p>
            </div>
            <div className="p-4 glass ">
              <DiGit className="flex text-red-500 item-center m-auto" />
              <p className="m-auto mt-2 text-gray-300">Git</p>
            </div>
            
          </div>
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

      
    </div>
  );
};

export default Skills;
