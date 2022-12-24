import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UndergraduatePortfolio from './pages/UndergraduatePortfolio';
import Contact from './pages/Contact';
import P1 from './pages/Projects/P1';
import P2 from './pages/Projects/P2';
import P3 from './pages/Projects/P3';
import P4 from './pages/Projects/P4';
import P5 from './pages/Projects/P5';
import P6 from './pages/Projects/P6';
import P7 from './pages/Projects/P7';
import P8 from './pages/Projects/P8';
import P9 from './pages/Projects/P9';
import P10 from './pages/Projects/P10';
import P11 from './pages/Projects/P11';
import P12 from './pages/Projects/P12';
import P13 from './pages/Projects/P13';
import P14 from './pages/Projects/P14';
import P15 from './pages/Projects/P15';
import P16 from './pages/Projects/P16';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<UndergraduatePortfolio />} />
      <Route path="/contact" element={<Contact />} />
      {/* Projects */}
      <Route path="/project-1" element={<P1 />} />
      <Route path="/project-2" element={<P2 />} />
      <Route path="/project-3" element={<P3 />} />
      <Route path="/project-4" element={<P4 />} />
      <Route path="/project-5" element={<P5 />} />
      <Route path="/project-6" element={<P6 />} />
      <Route path="/project-7" element={<P7 />} />
      <Route path="/project-8" element={<P8 />} />
      <Route path="/project-9" element={<P9 />} />
      <Route path="/project-10" element={<P10 />} />
      <Route path="/project-11" element={<P11 />} />
      <Route path="/project-12" element={<P12 />} />
      <Route path="/project-13" element={<P13 />} />
      <Route path="/project-14" element={<P14 />} />
      <Route path="/project-15" element={<P15 />} />
      <Route path="/project-16" element={<P16 />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
