import { useEffect, useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860 && menuAbierto) setMenuAbierto(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuAbierto]);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar">
      <nav className="navbar__contenedor" aria-label="Navegacion principal">
        <a className="navbar__marca" href="#" aria-label="Ir al inicio">
          <span className="navbar__punto-logo" />
          <span className="navbar__nombre">Fabri Benitez</span>
        </a>

        <ul className="navbar__lista-enlaces">
          <li><a className="navbar__enlace" href="#acerca">Acerca</a></li>
          <li><a className="navbar__enlace" href="#tecnologias">Habilidades</a></li>
          <li><a className="navbar__enlace" href="#proyectos">Proyectos</a></li>
          <li><a className="navbar__enlace" href="#certificados">Formacion</a></li>
          <li><a className="navbar__enlace" href="#contacto">Contacto</a></li>
        </ul>

        <div className="navbar__acciones">
          <a className="navbar__boton-cv" href="/CV/CV Benitez Marcelo Fabricio.pdf" download>
            Descargar CV
          </a>

          <button
            className="navbar__boton-hamburguesa"
            aria-label="Menu"
            aria-expanded={menuAbierto}
            aria-controls="navbar-menu-mobile"
            onClick={() => setMenuAbierto((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="navbar-menu-mobile"
        className={`navbar__menu-mobile ${menuAbierto ? "navbar__menu-mobile--abierto" : ""}`}
      >
        <a className="navbar__item-mobile" href="#acerca" onClick={cerrarMenu}>Acerca</a>
        <a className="navbar__item-mobile" href="#tecnologias" onClick={cerrarMenu}>Habilidades</a>
        <a className="navbar__item-mobile" href="#proyectos" onClick={cerrarMenu}>Proyectos</a>
        <a className="navbar__item-mobile" href="#certificados" onClick={cerrarMenu}>Formacion</a>
        <a className="navbar__item-mobile" href="#contacto" onClick={cerrarMenu}>Contacto</a>

        <a className="navbar__cv-mobile" href="/CV/CV Benitez Marcelo Fabricio.pdf" download onClick={cerrarMenu}>
          Descargar CV
        </a>
      </div>
    </header>
  );
}
