import React from 'react'
import profilepic from "../assets/ppic.png";
import { TypeAnimation } from "react-type-animation";


const Education = () => {
  return (
    <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-6 pl-10  md:mt-[110px] md:p-1" id="home">
      <p className="text-3xl md:text-4xl font-bold primary-color">
            Education 
      </p>
      <div className="grid md:col-span-1 gap-6">

      </div>

      <div className="grid md:col-span-1 gap-6" id="skills">

        <div className="mt-3 flex-col ">
          <p className="text-m md:text-2xl text-gray-300 m:pt-1  text-justify">
            Atma Jaya Yogyakarta University
          </p>
          <div className="grid grid-cols-5 mt-3">
            <p className="ml-7 my-auto col-span-2 text-m md:text-lg text-gray-300 p-2 glass text-center">
            2022 - Present 
            </p>
            <p className="my-auto col-span-3 text-m md:text-xl text-gray-300 p-3">
            Yogyakarta, Indonesia. 
            </p>
          </div>
          <p className="text-m md:text-lg text-gray-300 ml-10 pt-1  text-justify">
          Bachelor of Informatics
          </p>
          <p className="text-m md:text-2xl text-gray-300 mt-4 text-justify">
            SMAN 1 Bangli
          </p>
          <div className="grid grid-cols-5 mt-2">
            <p className="ml-7 my-auto col-span-2 text-m md:text-lg text-gray-300 p-2 glass text-center">
            2019 - 2022 
            </p>
            <p className="my-auto col-span-3 text-m md:text-xl text-gray-300 p-3">
            Bali, Indonesia. 
            </p>
          </div>
          <p className="text-m md:text-lg text-gray-300 ml-10 mb-20 pt-1 text-justify">
          Highschool Diploma, Natural sciences
          </p>
        </div>
      </div>

    </div>
  )
}

export default Education;