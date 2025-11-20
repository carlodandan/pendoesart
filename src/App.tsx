import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Featured from './components/Featured';
import About from './components/About';
import Commission from './components/Commission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/about" element={<About />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;