import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import AcercaDeMi from './components/AcercaDeMi/AcercaDeMi'; 
import Tecnologias from './components/Tecnologias/Tecnologias';
import Proyectos from './components/Proyectos/Proyectos';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <AcercaDeMi />
        <Tecnologias />
        <Proyectos />
        <Certificados />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App
