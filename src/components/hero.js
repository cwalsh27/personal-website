import { React, useRef } from 'react';

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLink } from "react-icons/io5";

import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "./Navbar"


function Hero() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Accent Triangle Animations
    const accentTriX = useTransform(scrollYProgress, [0.0, 0.35, 0.46, 0.47], ["0vw", "0vw", "15vw", "0vw"]);
    const accenTriVis = useTransform(scrollYProgress, [0.0, 0.45, 0.46], ["visible", "visible", "hidden"]);

    // Title text animations
    const titleX = useTransform(scrollYProgress, [0.0, 0.05, 0.46, 0.47], ["0vw", "0vw", "-90vw", "0vw"]);
    const titleXVis = useTransform(scrollYProgress, [0.0, 0.45, 0.46], ["visible", "visible", "hidden"]);
    const subtitleX = useTransform(scrollYProgress, [0.0, 0.1, 0.46, 0.47], ["0vw", "0vw", "-90vw", "0vw"]);
    const subtitleXVis = useTransform(scrollYProgress, [0.0, 0.45, 0.46], ["visible", "visible", "hidden"]);

    // Contact Icon Animations
    const iconAX = useTransform(scrollYProgress, [0.03, 0.15, 0.3], ["0vw", "0vw", "-3vw"])
    const iconAY = useTransform(scrollYProgress, [0.03, 0.15, 0.3], ["0vh", "-20vh", "-30vh"])
    const iconAVis = useTransform(scrollYProgress, [0.03, 0.3], ["visible", "hidden"])

    const iconBX = useTransform(scrollYProgress, [0.05, 0.15, 0.32], ["0vw", "0vw", "-3vw"])
    const iconBY = useTransform(scrollYProgress, [0.05, 0.15, 0.32], ["0vh", "-20vh", "-41vh"])
    const iconBVis = useTransform(scrollYProgress, [0.05, 0.32], ["visible", "hidden"])

    const iconCX = useTransform(scrollYProgress, [0.07, 0.15, 0.34], ["0vw", "0vw", "-3vw"])
    const iconCY = useTransform(scrollYProgress, [0.07, 0.15, 0.34], ["0vh", "-20vh", "-52vh"])
    const iconCVis = useTransform(scrollYProgress, [0.07, 0.34], ["visible", "hidden"])

    const iconDX = useTransform(scrollYProgress, [0.09, 0.15, 0.36], ["0vw", "0vw", "-3vw"])
    const iconDY = useTransform(scrollYProgress, [0.09, 0.15, 0.36], ["0vh", "-20vh", "-63vh"])
    const iconDVis = useTransform(scrollYProgress, [0.09, 0.36], ["visible", "hidden"])

    return (
        <div ref={targetRef} className='relative h-[500vh]'>
            <div className='sticky top-0 h-[100vh] bg-forestGreen grid grid-cols-12 grid-rows-12'>
                <Navbar></Navbar>

                {/* Background Shapes */}
                <motion.div style={{marginLeft: accentTriX, visibility: accenTriVis}} className='col-start-11 col-end-11 top-0 right-0 h-0 w-0 border-b-accentOne border-l-transparent border-b-[100vh] border-l-[8.4vw]'></motion.div>
                <motion.div style={{marginLeft: accentTriX, visibility: accenTriVis}} className='col-start-12 col-end-13 bg-accentOne h-[100vh]'></motion.div>
                
                {/* Third attempt, restructured layout for more minimalist artsy feel */}
                <div className='col-start-12 col-end-12 row-start-5 row-end-10 flex flex-col justify-between items-center pr-2'>
                    <motion.a style={{ x: iconAX, y: iconAY, visibility: iconAVis }} href="mailto:colemanwalsh27@gmail.com" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "dbdfe6", size: "2em" }}>
                            <FiMail/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a style={{ x: iconBX, y: iconBY, visibility: iconBVis }} href="https://www.linkedin.com/in/coleman-walsh27/" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "dbdfe6", size: "2em" }}>
                            <FaLinkedinIn/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a style={{ x: iconCX, y: iconCY, visibility: iconCVis }} href="https://github.com/cwalsh27" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "dbdfe6", size: "2em" }}>
                            <FaGithub/>
                        </IconContext.Provider>
                    </motion.a>
                    <motion.a style={{ x: iconDX, y: iconDY, visibility: iconDVis }} href="https://docs.google.com/document/d/1zx0uWROm3OzecYIdamuV8V3HRh1dGqX3LJWZBgM_R38/edit?usp=drive_link" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "#dbdfe6", size: "2em" }}>
                            <IoLink/>
                        </IconContext.Provider>
                    </motion.a>
                </div>

                {/* Text + Images */}
                <div className='col-start-7 col-end-11 row-start-4 row-end-12 mt-6 ml-12 -mr-8'>
                    <img src="../imgs/sadie.JPG" className='object-cover w-full h-full rounded-lg' alt="Coleman Walsh Headshot"></img>
                </div>
                <motion.div style={{x: titleX, visibility: titleXVis}} className='row-start-3 row-end-5 w-[100vw] flex justify-left items-center'>
                    <h1 className='text-[9vw] text-backgroundGrey font-dmSerif ml-[10vw]'>Coleman Walsh</h1>
                </motion.div>
                <div className='row-start-5 w-[80vw] flex justify-left items-top'>
                    <motion.h1 style={{x: subtitleX, visibility: subtitleXVis}} className='text-[2.1vw] text-backgroundGrey font-dmSerif ml-[10.5vw] xl:mt-[1vw]'>Cognitive Science <span style={{color: "#a24936", fontWeight: "bold"}}>|</span> Linguistics <span style={{color: "#a24936", fontWeight: "bold"}}>|</span> Computer Science</motion.h1>
                </div>
                
               
            </div>
        </div>
    );
}

export default Hero;