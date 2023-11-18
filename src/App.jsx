import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/react-portfolio' element={<Home />} />
        <Route path='/react-portfolio/about' element={<About />} />
        <Route path='/react-portfolio/portfolio' element={<Portfolio />} />
        <Route path='/react-portfolio/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;