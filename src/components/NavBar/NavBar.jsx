import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Cerrar menú al hacer resize a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860 && menuAbierto) setMenuAbierto(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuAbierto]);

  // Cerrar menú al clickear un link
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar">
      <nav className="navbar__contenedor">
        <div className="navbar__marca">
          <span className="navbar__punto-logo" />
          <span className="navbar__nombre">Fabri</span>
        </div>

        {/* Links desktop */}
        <ul className="navbar__lista-enlaces">
          <li><a className="navbar__enlace" href="#acerca">ACERCA</a></li>
          <li><a className="navbar__enlace" href="#proyectos">PROYECTOS</a></li>
          <li><a className="navbar__enlace" href="#experiencia">EXPERIENCIA</a></li>
          <li><a className="navbar__enlace" href="#blog">BLOG</a></li>
          <li><a className="navbar__enlace" href="#contacto">CONTACTO</a></li>
        </ul>

        <div className="navbar__acciones">
          {/* Botón CV (desktop) */}
          <a className="navbar__boton-cv" href="/cv.pdf" download>
            Descargar CV
          </a>

          {/* Hamburguesa (solo mobile) */}
          <button
            className="navbar__boton-hamburguesa"
            aria-label="Menú"
            aria-expanded={menuAbierto}
            aria-controls="navbar-menu-mobile"
            onClick={() => setMenuAbierto((v) => !v)}
          >
            ≡
          </button>
        </div>
      </nav>

      {/* Menú Mobile (aparece al abrir) */}
      <div
        id="navbar-menu-mobile"
        className={`navbar__menu-mobile ${menuAbierto ? "navbar__menu-mobile--abierto" : ""}`}
      >
        <a className="navbar__item-mobile" href="#acerca" onClick={cerrarMenu}>ACERCA</a>
        <a className="navbar__item-mobile" href="#proyectos" onClick={cerrarMenu}>PROYECTOS</a>
        <a className="navbar__item-mobile" href="#experiencia" onClick={cerrarMenu}>EXPERIENCIA</a>
        <a className="navbar__item-mobile" href="#blog" onClick={cerrarMenu}>BLOG</a>
        <a className="navbar__item-mobile" href="#contacto" onClick={cerrarMenu}>CONTACTO</a>

        <a className="navbar__cv-mobile" href="/cv.pdf" download onClick={cerrarMenu}>
          Descargar CV
        </a>
      </div>
    </header>
  );
}
