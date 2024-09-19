import React from 'react';

import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from 'lenis/dist/lenis-react';

function Navbar() {

    const lenis = useLenis();

    const { scrollYProgress } = useScroll();

    const navBackground = useTransform(scrollYProgress, [0.4, 0.44, 0.50], ["transparent", "#2b4141", "#a24936"])

    return (
        <motion.div style={{background: navBackground}} className='top-0 flex justify-between w-full h-[11vh] fixed z-50'>
           <div className='w-1/6 ml-[9vw]'>
            <a href="#home">
                <img src="../imgs/signature.png" className='h-full w-full'/>
            </a>
           </div>
           <div className='flex justify-around items-center mr-[5vw] mt-[1vh]'>
            <motion.a 
            target="_blank"
            href="https://docs.google.com/document/d/1zx0uWROm3OzecYIdamuV8V3HRh1dGqX3LJWZBgM_R38/edit?usp=drive_link" 
            whileHover={{color: "#dbdfe6"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>RESUME</motion.a>
            <motion.a href="#frc" onClick={() => {lenis?.scrollTo("#frc", {offset:-100});}} whileHover={{color: "#dbdfe6"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>RESEARCH</motion.a>
            <motion.a href="#portTag" onClick={() => {lenis?.scrollTo("#portTag", {offset:-100});}} whileHover={{color: "#dbdfe6"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>PROJECTS</motion.a>
            <motion.a href="" whileHover={{color: "#dbdfe6"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>CONTACT</motion.a>
           </div>
        </motion.div>
        
    )
}

export default Navbar;
