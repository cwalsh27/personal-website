import React from 'react';

import { motion, useScroll, useTransform } from "framer-motion";

function Navbar() {

    const { scrollYProgress } = useScroll();

    const navBackground = useTransform(scrollYProgress, [0, 0.52, 0.53], ["transparent", "transparent", "#a24936"])

    return (
        <motion.div style={{background: navBackground}} className='top-0 flex justify-between w-full h-[13vh] fixed'>
           <div className='w-1/6 ml-[9vw] mt-1'>
            <img src="../imgs/signature.png" className='h-full w-full'></img>
           </div>
           <div className='flex justify-around items-center mr-[5vw] mt-[1vh]'>
            <a className='ml-[3vw] text-lg text-backgroundGrey'>RESUME</a>
            <a className='ml-[3vw] text-lg text-slate-400'>RESEARCH</a>
            <a className='ml-[3vw] text-lg text-slate-400'>PROJECTS</a>
            <a className='ml-[3vw] text-lg text-slate-400'>CONTACT</a>
           </div>
        </motion.div>
        
    )
}

export default Navbar;
