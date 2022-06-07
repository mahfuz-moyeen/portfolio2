import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About";

function App() {
  return (
    <div >
      <Sidebar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

    </div >
  );
}

export default App;
