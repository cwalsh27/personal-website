import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLink } from "react-icons/io5";

import Navbar from "./Navbar"


function Hero() {

    return (
        <div className='relative h-[500vh]'>
            <div className='sticky top-0 h-[100vh] bg-forestGreen grid grid-cols-12 grid-rows-12'>
                <Navbar></Navbar>

                {/* Third attempt, restructured layout for more minimalist artsy feel */}
                <div className='col-start-12 col-end-12 row-start-5 row-end-10 flex flex-col justify-between items-center pr-2'>
                    <a href="mailto:colemanwalsh27@gmail.com" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "af3800", size: "2em" }}>
                            <FiMail/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.linkedin.com/in/coleman-walsh27/" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "af3800", size: "2em" }}>
                            <FaLinkedinIn/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://github.com/cwalsh27" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "af3800", size: "2em" }}>
                            <FaGithub/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://docs.google.com/document/d/1zx0uWROm3OzecYIdamuV8V3HRh1dGqX3LJWZBgM_R38/edit?usp=drive_link" className='rounded-full p-4 hover:bg-slate-400'>
                        <IconContext.Provider value={{ color: "#af3800", size: "2em" }}>
                            <IoLink/>
                        </IconContext.Provider>
                    </a>
                </div>

                {/* Second attempt at layout with more overlap */}
                <div className='col-start-7 col-end-11 row-start-4 row-end-12 mt-6 ml-12 -mr-8'>
                    <img src="../imgs/sadie.JPG" className='object-fill w-full h-full rounded-lg' alt="Coleman Walsh Headshot"></img>
                </div>
                <div className='row-start-2 w-[100vw] flex justify-left'>
                    <h1 className='text-[9vw] text-backgroundGrey font-dmSerif ml-[10vw] mt-[4vh]'>Coleman Walsh</h1>
                </div>
                <div className='row-start-2 w-[100vw] flex justify-left'>
                    <h1 className='text-[2.5vw] text-backgroundGrey font-dmSerif ml-[2vw] mt-[25vh]'>Cognition <span style={{color: "#af3800", fontWeight: "bold"}}>|</span> Linguistics <span style={{color: "#af3800", fontWeight: "bold"}}>|</span> Computer Science</h1>
                </div>
               
            </div>
        </div>
    );
}

export default Hero;