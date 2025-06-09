import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import ThemeColorPicker from "./components/ThemeColorPicker";
import ContactForm from "./components/ContactForm";
import ReachCure from "./components/ReachCure";
import CodSoft from "./components/CodSoft";

import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Services />
                <ThemeColorPicker />
                <ContactForm />
              </>
            }
          />
          <Route path="/codsoft" element={<CodSoft />} />
          <Route path="/ReachCure" element={<ReachCure />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
