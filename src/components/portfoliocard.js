import React from "react";
import { motion } from "framer-motion";

function PortfolioCard (props) {
    return (
        <motion.a  
        href={props.link}
        whileHover={{scale: 1.1}}
        className="h-[75%] w-[27%] mx-20 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-slate-200 flex justify-between flex-col hover:scale-105" style={{flex: "0 0 auto"}}>
            <div>
                <h2 className="text-5xl font-dmSerif mt-8 opacity-100">{props.title}</h2>
                <p className="text-xl font-dmSerif mt-8 mx-7 opacity-100">{props.desc}</p>
            </div>
            <div className="mb-8">
                <p className="text-xl font-dmSerif">{props.plurality}{props.langs}</p>
            </div>
        </motion.a>
    )
}

export default PortfolioCard