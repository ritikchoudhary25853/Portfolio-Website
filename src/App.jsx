import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";


const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
       <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
    </>
  );
};

export default App;
