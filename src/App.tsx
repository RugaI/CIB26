import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Topics from './components/Topics';
import Program from './components/Program';
import Register from './components/Register';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Topics />
      <Program />
      <Register />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
