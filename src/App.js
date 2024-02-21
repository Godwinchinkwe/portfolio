import './App.css';
import Header from './Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './Header/About/About';
import Skills from './Header/Skills/Skills';
import Education from './Header/Education/Education';
import Experience from './Header/Experience/Experience';
import Projects from './Header/Project/Project';
import ProjectDisplay from './Header/Project/ProjectDisplay';
import ParticlesBackground from './Components/Config/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
       <Router>
        <Header/>
  <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Skills" element={<Skills />}/>
    <Route path="/Education" element={<Education/>}/>
    <Route path="/projects/:id" element={<ProjectDisplay />} />
    <Route path="/Experience" element={<Experience />}/>
    <Route path="/Projects" element={<Projects />}/>
  </Routes>
  </Router>
     
    </div>
  );
}

export default App;
