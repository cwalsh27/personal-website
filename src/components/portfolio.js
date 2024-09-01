import React from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import PortfolioCard from "./portfoliocard";

function Portfolio() {

    return (
        <div class="scrolling-wrapper" className="w-full h-[80vh] bg-background overflow-x-scroll overflow-y-hidden whitespace-nowrap">
            <PortfolioCard></PortfolioCard>
            <PortfolioCard></PortfolioCard>
            <PortfolioCard></PortfolioCard>
            <PortfolioCard></PortfolioCard>
            <PortfolioCard></PortfolioCard>
        </div>  
    )
}

export default Portfolio;