import React from "react";

function PortfolioCard (props) {
    return (
        <div className="h-[75%] w-[27%] ml-9 mr-9 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-slate-200 flex justify-between flex-col" style={{flex: "0 0 auto"}}>
            <div>
                <h2 className="text-5xl font-dmSerif mt-8 opacity-100">{props.title}</h2>
                <p className="text-xl font-dmSerif mt-8 mx-7 opacity-100">{props.desc}</p>
            </div>
            <div className="mb-8">
                <p className="text-xl font-dmSerif">{props.plurality}{props.langs}</p>
            </div>
        </div>
    )
}

export default PortfolioCard