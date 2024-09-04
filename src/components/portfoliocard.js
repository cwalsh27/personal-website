import React from "react";

function PortfolioCard (props) {
    return (
        <div className="h-[75%] w-[27%] bg-slate-200 ml-9 mr-9 rounded-2xl shadow-2xl" style={{flex: "0 0 auto"}}>
            <h2 className="text-5xl font-dmSerif mt-8">{props.title}</h2>
            <p className="text-xl font-dmSerif mt-8 mx-7">{props.desc}</p>
            
        </div>
    )
}

export default PortfolioCard