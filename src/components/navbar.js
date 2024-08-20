import React from 'react';

function Navbar() {

    return (
        <div className='absolute top-0 flex justify-between w-full h-[13vh]'>
           <div className='w-1/5 ml-[9vw] mt-1'>
            <img src="../imgs/signature.png" className='h-full'></img>
           </div>
           <div className='flex justify-around items-center mr-[5vw] mt-[1vh]'>
            <a className='ml-[3vw] text-lg text-stone-300'>RESUME</a>
            <a className='ml-[3vw] text-lg text-stone-300'>RESEARCH</a>
            <a className='ml-[3vw] text-lg text-stone-300'>PROJECTS</a>
            <a className='ml-[3vw] text-lg text-stone-300'>CONTACT</a>
           </div>
        </div>
        
    )
}

export default Navbar;
