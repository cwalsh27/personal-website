import React from 'react';

function RightResearchCard(props) {

    return(
        <div className='h-[80vh] w-full bg-background flex justify-center items-center'>
            <div className='w-[85%] h-[90%] bg-white rounded-2xl shadow-2xl flex justify-between items-center'>
                <div className='ml-4 w-[50%] h-[97%] bg-black rounded-2xl'>
                    
                </div>
                <div className='mr-4 w-[40%] h-[97%] rounded-2xl'>
                    <img src={props.imgsrc} style={{objectFit: props.imageFit}} className='w-full h-full rounded-2xl'></img>
                </div>
            </div>
        </div>
    )
}

export default RightResearchCard;
