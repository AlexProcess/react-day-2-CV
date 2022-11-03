import './App.css';
import { useState } from "react";
import "./App.css";
import {CV} from "./CV"
import {Hero} from "./Components/Hero"
import {About} from "./Components/About"
import {Education} from "./Components/Education"
import {Experience} from "./Components/Experience"
import {More} from "./Components/More"

const { hero, education, experience, languages, habilities, volunteer, about, more } = CV;

function App() {
  
  const [showEducation, setShowEducation] = useState(true)
    

  return (
    <div className="App">
     <Hero hero={hero}></Hero>
      <About></About>
      <Education education={education}></Education>
      <div>
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}
        >
          Experience
        </button>
        
        <div>
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>
      </div>
      
      <Experience></Experience>
        <More>
          languages={languages}
          habilities={habilities}
          volunteer={volunteer}
        </More>
    </div>
  );
}

export default App;
