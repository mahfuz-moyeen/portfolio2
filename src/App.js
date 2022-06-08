import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import CustomCursor from "custom-cursor-react";
import 'custom-cursor-react/dist/index.css';
import './App.css';
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import MyServices from "./components/MyServices/MyServices";


function App() {
  return (
    <div >
      <CustomCursor
        targets={['.link','a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',]}
        customClass='custom-cursor'
        dimensions={40}
        fill='#8ED1FC'
        opacity={0.4}
        targetOpacity={0.7}
        targetScale={1.5}
      />

      <div className='hidden md:block'>
        <Sidebar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<MyServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div >
  );
}

export default App;
