
import React, {useState} from 'react'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai'

const projects = [
    {
      img: project1,
      title: "Project #1",
      description:
        "UI for frontend development using React.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "A fullstack application built with Node.js and MongoDB.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project3,
      title: "Project #3",
      description: "A responsive website designed with modern CSS.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Project #4",
      description:
        "An e-commerce platform with various features.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project5,
      title: "Project #5",
      description: "A mobile-friendly application using React Native.",
      links: {
        site: "#",
        github: "#",
      },
    }
]

const Work = () => {

  const [currentProject, setCurrentProject] = useState(0)

  return (

    <div className='h-[75vh] mt-6 mb-3 max-w-[1200px] pr-4 md:pr-0 md:mx-auto grid grid-cols-8 gap-6'>

      <div className='z-10 col-span-3 grid place-items-center grid-cols-1 relative'>
        <p className='ml-10 text-gray-200 text-lg md:text-2xl '><span className='text-xl md:text-3xl font-bold'>Latest project that I've built.
        </span> More on my <span>
            <a href="https://github.com/SaktiPadmayoga" target="_blank" rel="noopener noreferrer" className=' text:lg md:text-2xl text-orange-600 glass py-1 px-2 rounded-none hover:bg-slate-700 transition duration-300 inline-block mt-2'>Github</a>
          </span>
        </p>


        <p className='text-gray-200 font-bold text-lg mt-3 md:mt-0 md:text-3xl -skew-y-6 '>Select Project</p>

        <img src={arrow} className='absolute w-7 top-[200px] right-0 left-36 md:w-[50px] md:top-[165px] md:left-80' />

        <ul className='ml-6 flex flex-row text-lg md:flex-col gap-6 flex-wrap justify-center md:gap-1
        space-y-2 md:space-y-4 md:text-2xl'>
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 rounded-3xl px-3 py-1 hover:bg-slate-600
              transition duration-300 ${currentProject === index ? 'glass text-orange-500 ' : ''}`}>
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <div className='z-5 glass w-full col-span-5 justify-center'>
        <div className='w-full h-[400px] md:h-[450px]'>
          <img src={projects[currentProject].img} alt={projects[currentProject].title} className='w-full h-full object-cover  p-6 '/>
        </div>
        <div className='mb-6 mx-6 text-gray-300 flex justify-center'>
          <p className=' text-base md:text-2xl'>{projects[currentProject].description}</p>
        </div>
        <div className='flex space-x-4 pl-5 justify-center'>
          <a href={projects[currentProject].links.site} className='text-lg md:text-xl px-4 py-2 text-gray-200 rounded-lg glass hover:bg-slate-700 transition duration-300'>View Site</a>
          <a href={projects[currentProject].links.github} className=' text-2xl md:text-3xl px-4 py-2 text-gray-200 rounded-lg glass hover:bg-slate-700 transition duration-300'><AiFillGithub/></a>
        </div>

      </div>

    </div>
  )
}

export default Work