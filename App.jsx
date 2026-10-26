import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Saffron and Stone home">
            <span className="brand-mark">S<span>&</span>S</span>
            <span className="brand-name">SAFFRON <span>&</span> STONE</span>
          </a>

          <nav className="navigation" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#story">Our story</a>
            <a href="#visit">Visit us</a>
          </nav>

          <a className="header-cta" href="#visit">Book a table <span>↗</span></a>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <a className="footer-brand" href="#home">SAFFRON <span>&</span> STONE</a>
          <p>Good food. Good company. Always.</p>
          <span className="footer-note">A neighborhood table, made with love.</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
