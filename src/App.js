import './App.css';
import Hero from './components/hero';
import RightResearchCard from './components/rightresearchcard';
import LeftResearchCard from './components/leftresearchcard';

import { ReactLenis } from "lenis/dist/lenis-react";
import Portfolio from './components/portfolio';


function App() {
  return (
    <div className="App">
      <ReactLenis root>
        <Hero />
        <RightResearchCard 
        idFix="frc"
        title="Trustworthy AI Lab" 
        imgsrc="../imgs/fintech.png" 
        imageFit="cover"
        text="Research under Dr. Xi Peng applying computer vision segmentation methods to the sonar domain to improve seafloor mapping of erosion patterns."
        />
        <LeftResearchCard title="CMU Glaciology REU" imgsrc="../imgs/cmu_poster.JPG" imageFit="fill"
        text="Summer 2024 REU program at Carnegie Mellon University, studying glaciology under Dr. David Rounce. I worked with Claire Wilson to produce data products for her PyGEM-EB glacier model so that it could include data form wildfire emissions and consequent black carbon deposition."
        />
        <RightResearchCard title="Voice & Motor Lab" imgsrc="../imgs/banner.png"/>
        <LeftResearchCard title="SLAM Lab" imgsrc="../imgs/banner.png"/>
        <Portfolio idFix="portTag"></Portfolio>
        <div className='h-[100vh] bg-background'></div>
        
        
      </ReactLenis>
      
      
      
      
    </div>
  );
}

export default App;
