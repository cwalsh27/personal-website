import React from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import PortfolioCard from "./portfoliocard";

function Portfolio() {

    return (
        
        <div class="scrolling-wrapper" className="w-full h-[80vh] bg-background flex flex-nowrap overflow-x-auto items-center">
            <PortfolioCard title="JobNav" desc="Worked on a team of four software engineers to develop a website with two career quizzes, one with multiple choice answer and one that implements ChatGPT API to produce customized outputs for novel question responses."></PortfolioCard>
            <PortfolioCard title="Bigram/Trigram Language Model" desc="Built algorithm that trains on a corpus of common sentences and then produces novel ones based on next word probabilities. Further adapted that algorithm into a rudimentary predictive text algorithm for a hypothetical email client."></PortfolioCard>
            <PortfolioCard title="SLAM Lab Data Reconciliation" desc="Authored scripts to automate existing manual data reconciliation process, reducing its duration by 70%"></PortfolioCard>
            <PortfolioCard title="Seafloor Rasterizer" desc="Worked on small team to develop rasterization scripts for sonar imagery of seafloor, preparing the data for AI segmentation tasks with ResNet-18 backbone."></PortfolioCard>
            <PortfolioCard title="Project Title" desc="THis is hte desc of the project"></PortfolioCard>
        </div>  
        
    )
}

export default Portfolio;