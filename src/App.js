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
import './index.css';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Services />
              <ThemeColorPicker />
      <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
