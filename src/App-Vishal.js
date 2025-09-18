import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import ThemeColorPicker from './components/ThemeColorPicker';
import ContactForm from './components/ContactForm';
import ReachCure from './components/ReachCure';
import CodSoft from './components/CodSoft';

import './index.css';
import './App.css';

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout Hider based on route
function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayoutOnRoutes = ['/reachcure', '/codsoft'];
  const shouldHideLayout = hideLayoutOnRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
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
          <Route path="/reachcure" element={<ReachCure />} />
          <Route path="/codsoft" element={<CodSoft />} />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for doesn't exist.</p>
              </div>
            }
          />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
