import React from 'react';
import { AiFillHome, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className=" flex-col justify-center items-center min-h-screen md:min-h-[80vh] max-w-[1200px] mx-auto my-auto grid md:grid-cols-10 gap-6 p-10 mb-7 md:glass" id="home">
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: [0, 0.8, 0.8, 1.01]
      }}
      exit={{ opacity: 0, x:-50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.5, ease: "easeOut", delay:0 }}
      className="md:col-span-4 p-4 md:p-8 glass py-8 md:my-5 md:ml-14 w-full">
        <div className="flex-col text-gray-200 p-2">
          <p className="text-2xl md:text-4xl font-bold py-1">
            <span>Contact Me</span> 
          </p>
          <p className="text-md md:text-2xl text-gray-300 pt-2">
            Let's Get in Touch! 
          </p>
          <p className="text-md md:text-xl text-gray-300 pt-2">
            I'd love to hear your message
          </p>
          <div className='text-2xl md:text-4xl flex pt-3 text-white'>
            <AiFillLinkedin className='p-1 mt-2 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-md md:text-lg text-gray-300 pt-1 ml-3">
              A. A. GEDE SAKTI PADMAYOGA
            </p>
          </div>
          <div className='text-2xl md:text-4xl flex pt-3 text-white'>
            <AiFillMail className='p-1 mt-2 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-md md:text-lg text-gray-300 pt-1 ml-3">
              saktipadmayoga@gmail.com
            </p>
          </div>
          <div className='text-2xl md:text-4xl flex pt-3 text-white'>
            <AiFillHome className='p-1 mt-2 md:mt-0 bg-primary-color rounded-md'/>
            <p className="text-md md:text-lg text-gray-300 pt-1 ml-3">
              Bali - Indonesia
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.6,
        ease: [0, 1, 0.8, 1.01]
      }}
      exit={{ opacity: 0, x:50, transition: { delay: 0, duration: 0.5, ease: "easeOut" }}}
      exitTransition={{ duration: 0.5, ease: "easeOut", delay:0 }}
      className="md:col-span-6 p-4 md:ml-9 flex text-black">
        <form action="https://getform.io/f/bnlekwkb" method="POST" className='w-full p-5 md:p-10'>
          <input 
            type="text"
            id="name"
            placeholder='Your name' 
            name='name'
            className='mb-3 w-full rounded-md border-gray-400 bg-gray-100 py-2 pl-2 pr-4'
          />
          <input 
            type="email"
            id="email"
            placeholder='Email address' 
            name='email'
            className='mb-3 w-full rounded-md border-gray-400 bg-gray-100 py-2 pl-2 pr-4'
          />
          <textarea
            id="message"
            cols="40"
            rows="6"
            placeholder='Message' 
            name='message'
            className='mb-2 w-full rounded-md border-gray-400 bg-gray-100 py-2 pl-2 pr-4'
          />
          <div className='flex justify-evenly'>
            <button type='submit' className="md:w-full px-4 py-2 text-md font-bold text-gray-200 bg-primary-color rounded-lg">
              Send message 🚀
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact;
