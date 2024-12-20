import React from 'react';

function LeftResearchCard(props) {

    return(
        <div className='h-[80vh] w-full bg-background flex justify-center items-center'>
            <div className='w-[85%] h-[90%] rounded-2xl shadow-2xl flex justify-between items-center bg-gradient-to-bl from-white to-slate-200'>
                <div className='ml-4 w-[40%] h-[97%] rounded-2xl'>
                    <img src={props.imgsrc} style={{objectFit: props.imageFit}} className='w-full h-full rounded-2xl'></img>
                </div>
                <div className='mr-4 w-[50%] h-[97%] rounded-2xl grid grid-rows-4'>
                    <h1 className='text-black row-start-1 text-right text-6xl font-dmSerif mr-4 mt-2'>{props.title}</h1>
                    <p className='text-black row-start-2 text-right text-2xl font-dmSerif mr-4'>
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftResearchCard;
