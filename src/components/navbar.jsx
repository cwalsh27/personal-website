import React from 'react';

import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from 'lenis/dist/lenis-react';

function Navbar() {

    const lenis = useLenis();

    const { scrollYProgress } = useScroll();

    const navBackground = useTransform(scrollYProgress, [0.4399, 0.44, 0.50], ["transparent", "#144866", "#6A3125"])
    const signatureMargin = useTransform(scrollYProgress, [0.10, 0.20], ["9vw", "6vw"])

    return (
        <motion.div style={{background: navBackground}} className='top-0 flex justify-between w-full h-[11vh] fixed z-50 drop-shadow-2xl'>
           <motion.div style={{marginLeft: signatureMargin}} className='w-1/6'>
            <a href="#home">
                <img src="../imgs/signature.png" className='h-full w-full'/>
            </a>
           </motion.div>
           <div className='flex justify-around items-center mr-[5vw] mt-[1vh]'>
            <motion.a 
            target="_blank"
            href="https://docs.google.com/document/d/1zx0uWROm3OzecYIdamuV8V3HRh1dGqX3LJWZBgM_R38/edit?usp=drive_link" 
            whileHover={{color: "#a24936"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>RESUME</motion.a>
            <motion.a href="#frc" onClick={() => {lenis?.scrollTo("#frc", {offset:-100});}} whileHover={{color: "#a24936"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>RESEARCH</motion.a>
            <motion.a href="#portTag" onClick={() => {lenis?.scrollTo("#portTag", {offset:-100});}} whileHover={{color: "#a24936"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>PROJECTS</motion.a>
            <motion.a href="mailto:colemanwalsh27@gmail.com" whileHover={{color: "#a24936"}} className='ml-[3vw] text-lg text-navbarDefaultColor'>CONTACT</motion.a>
           </div>
        </motion.div>
        
    )
}

export default Navbar;
