import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLink } from "react-icons/io5";

import Navbar from "./Navbar"


function Hero() {

    return (
        <div className='relative h-[500vh] bg-red-500'>
            <div className='sticky top-0 h-[100vh] bg-forestGreen grid grid-cols-12 grid-rows-10'>
                <Navbar></Navbar>
                {/* Third attempt, restructured layout for more minimalist artsy feel */}
                <div className='col-start-12 col-end-12 row-start-4 row-end-8 flex flex-col justify-between items-center pr-2'>
                    <a className='rounded-full p-4 hover:bg-slate-200'>
                        <IconContext.Provider value={{ color: "gray", size: "2em" }}>
                            <FiMail/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.linkedin.com/in/coleman-walsh27/" className='rounded-full p-4 hover:bg-slate-200'>
                        <IconContext.Provider value={{ color: "gray", size: "2em" }}>
                            <FaLinkedinIn/>
                        </IconContext.Provider>
                    </a>
                    <a href="" className='rounded-full p-4 hover:bg-slate-200'>
                        <IconContext.Provider value={{ color: "gray", size: "2em" }}>
                            <FaGithub/>
                        </IconContext.Provider>
                    </a>
                    <a href="" className='rounded-full p-4 hover:bg-slate-200'>
                        <IconContext.Provider value={{ color: "gray", size: "2em" }}>
                            <IoLink/>
                        </IconContext.Provider>
                    </a>
                </div>

                {/* Second attempt at layout with more overlap */}
                <div className='col-start-8 col-end-12 row-start-3 row-end-10'>
                    <img src="../imgs/sadie.JPG" className='object-fill w-full h-full rounded-lg'></img>
                </div>
                <div className='col-start-2 col-end-11 row-start-1 row-end-7'>
                    <div className='flex justify-center align-middle'>
                        <h1 className='text-[11vw] text-white font-dmSerif'>Coleman Walsh</h1>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Hero;