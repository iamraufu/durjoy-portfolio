import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UndergraduatePortfolio from './pages/UndergraduatePortfolio';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<UndergraduatePortfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/project/:id' element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
