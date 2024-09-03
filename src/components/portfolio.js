import React from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import PortfolioCard from "./portfoliocard";

function Portfolio() {

    return (
        
        <div class="scrolling-wrapper" className="w-full h-[80vh] bg-background flex flex-nowrap overflow-x-auto items-center">
            <PortfolioCard title="Project Title" desc="THis is hte desc of the project"></PortfolioCard>
            <PortfolioCard title="Project Title" desc="THis is hte desc of the project"></PortfolioCard>
            <PortfolioCard title="Project Title" desc="THis is hte desc of the project"></PortfolioCard>
            <PortfolioCard title="Project Title" desc="THis is hte desc of the project"></PortfolioCard>
            <PortfolioCard title="Project Title" desc="THis is hte desc of the project"></PortfolioCard>
        </div>  
        
    )
}

export default Portfolio;