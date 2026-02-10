import "./Hero.css";
import FotoPerfil from "../../assets/FotoPerfi.jpg";

export default function Hero() {
  return (
    <section className="hero">
      {/* Círculos decorativos */}
      <span className="hero__circulo hero__circulo--violeta" />
      <span className="hero__circulo hero__circulo--verde" />
      <span className="hero__circulo hero__circulo--naranja" />
      <span className="hero__circulo hero__circulo--azul" />
      <span className="hero__circulo hero__circulo--rosa" />
      <span className="hero__circulo hero__circulo--celeste" />
      <span className="hero__circulo hero__circulo--rojo" />
      <span className="hero__circulo hero__circulo--lila" />
      <span className="hero__circulo hero__circulo--verde-claro" />

      {/* Chispas de fondo*/}
      <span className="hero__chispa_fondo1">✦</span>
      <span className="hero__chispa_fondo2">✦</span>
      <span className="hero__chispa_fondo3">✦</span>
      <span className="hero__chispa_fondo4">✦</span>
      <span className="hero__chispa_fondo5">✦</span>
      <span className="hero__chispa_fondo6">✦</span>
      <span className="hero__chispa_fondo7">✦</span>
      <span className="hero__chispa_fondo8">✦</span>



      <svg className="hero__orbitas" viewBox="0 0 1200 600" aria-hidden="true">
        <path
          d="M70,320 C280,120 520,120 700,220 C880,320 980,480 1140,420"
          fill="none"
          stroke="rgba(40, 114, 128, 0.42)"
          strokeWidth="1"
        />
        <path
          d="M110,360 C320,170 520,170 690,260 C860,350 980,510 1120,450"
          fill="none"
          stroke="rgba(40, 114, 128, 0.42)"
          strokeWidth="1"
        />
      </svg>

      <div className="hero__contenedor">
        <div className="hero__columna-izquierda">
          <div className="hero__aro-foto">
            <div className="hero__foto-perfil">
              <img src={FotoPerfil} alt="Foto de perfil" />
            </div>
          </div>
        </div>
        <div className="hero__columna-derecha">
          <div className="hero__saludo">
            <span className="hero__chispa">✦</span>
          </div>

          <h1 className="hero__titulo">
            Benitez Marcelo Fabricio <br /> 
          </h1>

          <div className="hero__roles">
            <span className="hero__punto-rol" />
            <div className="hero__roles-texto">
              <p>Analista funcional con capacidad de implementación técnica</p>
            </div>
          </div>

          <p className="hero__descripcion">
            Analizo requerimientos, diseño flujos y desarrollo soluciones web completas, desde el frontend hasta la base de datos.
          </p>

          <div className="hero__acciones">
            <a className="hero__boton hero__boton--primario" href="#contacto">
              Contactarme ✦
            </a>
            <a className="hero__boton hero__boton--fantasma" href="#proyectos">
              Ver proyectos
            </a>
            <a className="hero__boton hero__boton--oscuro" href="../../../public/CV/CV Benitez Marcelo Fabricio.pdf" download>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
