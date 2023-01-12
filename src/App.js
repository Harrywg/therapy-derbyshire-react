import Home from './components/pages/Home'
import Head from './components/Head'
import Services from './components/pages/Services';
import About from './components/pages/About'
import Location from './components/pages/Location'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'

function App() {
  return (
    <div id="main">
      <Head />
      <Home />
      <Services />
      <About />
      <Location />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
