import './App.css';
import Hero from './components/hero';
import RightResearchCard from './components/rightresearchcard';


function App() {
  return (
    <div className="App">
      
      <Hero />
      <RightResearchCard bgcolor="blue" />
      <RightResearchCard bgcolor="blue" />
      <RightResearchCard bgcolor="blue" />
      <div className='h-[100vh] bg-background'></div>
      
      
      
      
    </div>
  );
}

export default App;
