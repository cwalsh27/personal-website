import React from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import PortfolioCard from "./portfoliocard";

function Portfolio() {

    return (
        
        <div class="scrolling-wrapper" className="w-full h-[80vh] bg-background flex flex-nowrap overflow-x-auto items-center">
            <PortfolioCard 
                link="https://jassaini101.github.io/JobNav/" 
                title="JobNav" 
                plurality="Languages: " langs="Typescript, CSS, HTML" 
                desc="Worked on a team of four software engineers to develop a website with two career quizzes, one with multiple choice answer and one that implements ChatGPT API to produce customized outputs for novel question responses.">

            </PortfolioCard>
            <PortfolioCard 
                link="https://github.com/cwalsh27/N-Gram-Language-Model" 
                title="Bigram/Trigram Language Model" 
                plurality="Language: " langs="C++" 
                desc="Built algorithm that trains on a corpus of common sentences and then produces novel ones based on next word probabilities. Further adapted that algorithm into a rudimentary predictive text algorithm for a hypothetical email client.">

            </PortfolioCard>
            <PortfolioCard 
                link="https://github.com/DREAL-VIP/seafloor-mapping"
                title="Seafloor Rasterizer" 
                plurality="Language: " langs="Python" 
                desc="Worked on small team to develop rasterization scripts for sonar imagery of seafloor, preparing the data for AI segmentation tasks with ResNet-18 backbone.">

            </PortfolioCard>
            <PortfolioCard 
                link="https://github.com/cwalsh27/VoiceMotorLabScripts"
                title="VoiceApp" 
                plurality="Languages: " langs="Python (Flask), HTML, CSS" 
                desc="Web app porting scripts designed with the Voice & Motor Lab. Functions include spreadsheet parsing and document editing for various projects. Most complicated example performs audio spectrum analysis to define intervals for MRI runs.">

            </PortfolioCard>
            <PortfolioCard 
                link="https://github.com/cwalsh27/Coder-File-Reconciling"
                title="SLAM Lab Data Reconciliation" 
                plurality="Languages: " langs="Python, Java, Linux" 
                desc="Authored scripts to automate existing manual data reconciliation process, reducing its duration by 70%">

            </PortfolioCard>
        </div>  
        
    )
}

export default Portfolio;