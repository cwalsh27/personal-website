import './App.css';
import Hero from './components/hero';
import RightResearchCard from './components/rightresearchcard';
import { ReactLenis } from "lenis/dist/lenis-react";


function App() {
  return (
    <div className="App">
      <ReactLenis root>
        <Hero />
        <RightResearchCard bgcolor="blue" imgsrc="../imgs/fintech.png" imageFit="cover"/>
        <RightResearchCard bgcolor="blue" imgsrc="../imgs/cmu_poster.JPG" imageFit="fill"/>
        <RightResearchCard bgcolor="blue" imgsrc="../imgs/banner.png"/>
        <div className='h-[100vh] bg-background'></div>
      </ReactLenis>
      
      
      
      
    </div>
  );
}

export default App;
