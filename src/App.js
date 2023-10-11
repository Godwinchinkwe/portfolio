import './App.css';
import Header from './Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './Header/About/About';
import Skills from './Header/Skills/Skills';
import Education from './Header/Education/Education';
import Experience from './Header/Experience/Experience';
import Project from './Header/Project/Project';

function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
<Routes>
  <Route path="/" element={<Hero />}/>
  <Route path="/About" element={<About />}/>
  <Route path="/Skills" element={<Skills />}/>
  <Route path="/Education" element={<Education/>}/>
  <Route path="/Experience" element={<Experience />}/>
  <Route path="/Project" element={<Project />}/>
</Routes>
</Router>
     
     {/* <h1>port folio</h1> */}
    </div>
  );
}

export default App;
