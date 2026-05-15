import "./Hero.css";
import FotoPerfil from "../../assets/FotoPerfi.jpg";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <div className="hero__contenedor">
        <div className="hero__contenido">
          <p className="hero__eyebrow">Analista programador freelance</p>

          <h1 id="hero-titulo" className="hero__titulo">
            Fabricio
            <span> Benitez</span>
          </h1>

          <p className="hero__rol">
            Bajo problemas reales a sistemas web claros: analisis, frontend,
            backend, base de datos e integraciones.
          </p>

          <p className="hero__descripcion">
            Si una empresa necesita ordenar un proceso, validar una idea o dejar
            funcionando una herramienta interna, puedo entrar desde el relevamiento
            y avanzar hasta una version usable.
          </p>

          <div className="hero__acciones" aria-label="Acciones principales">
            <a className="hero__boton hero__boton--primario" href="#contacto">
              Hablemos
            </a>
            <a className="hero__boton hero__boton--fantasma" href="#proyectos">
              Ver trabajos
            </a>
            <a className="hero__boton hero__boton--simple" href="/CV/CV Benitez Marcelo Fabricio.pdf" download>
              Descargar CV
            </a>
          </div>

          
        </div>

        <aside className="hero__perfil" aria-label="Perfil de Fabricio">
          <p className="hero__nombre-fondo" aria-hidden="true">FABRICIO</p>
          <span className="hero__trazo" aria-hidden="true" />
          <div className="hero__foto-card">
            <img src={FotoPerfil} alt="Foto de perfil de Benitez Marcelo Fabricio" />
          </div>

          <div className="hero__panel">
            <span className="hero__panel-label">Disponible para conversar</span>
            <p>
              Me interesa trabajar con equipos que necesitan resolver algo concreto:
              relevar, definir alcance y construir con criterio tecnico.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
