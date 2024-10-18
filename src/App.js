import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Navigation from './component/Navigation'; 

const App = () => {
    return (
        <Router>
            <div>
                <Navigation /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/skills" element={<Skills />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
