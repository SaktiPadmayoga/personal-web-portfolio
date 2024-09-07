import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 4,
      delay: 0.8,
      ease: [0, 1, 0.2, 1.01]
    }} 
    className="fixed bottom-2 left-0 max-w-[1200px] mx-auto h-10 justify-center items-center text-center  right-0"
    style={{ backdropFilter: "blur(30px)" }}
    >
      <p className=" text-gray-400 text-sm font-semibold glass p-2">
        Created with 🩶 by
        <a href="https://www.instagram.com/saqtii" className="text-orange-500">
          {" "}
          Sakti Padmayoga
        </a>{" "}
        ©️2024
      </p>
    </motion.div>
  );
};

export default Footer;
