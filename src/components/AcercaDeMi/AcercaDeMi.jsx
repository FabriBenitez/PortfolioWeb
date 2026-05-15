import "./AcercaDeMi.css";

const SERVICIOS = [
  {
    titulo: "Analisis funcional",
    items: [
      "Relevamiento de requerimientos",
      "Definicion de flujos y casos de uso",
      "Bajada tecnica de necesidades reales",
    ],
  },
  {
    titulo: "Desarrollo frontend",
    items: [
      "Interfaces claras y usables",
      "React y aplicaciones web",
      "Integracion con APIs",
    ],
  },
  {
    titulo: "Desarrollo backend",
    items: [
      "APIs REST",
      "Logica de negocio",
      "Autenticacion y seguridad",
    ],
  },
  {
    titulo: "Bases de datos",
    items: [
      "Modelado de datos",
      "Relaciones y consultas",
      "Consistencia y simplicidad",
    ],
  },
];

const PROCESO = [
  {
    paso: "01",
    titulo: "Entender",
    texto: "Relevar contexto, usuarios, datos disponibles y problema real.",
  },
  {
    paso: "02",
    titulo: "Ordenar",
    texto: "Definir alcance, flujo principal y prioridades antes de construir.",
  },
  {
    paso: "03",
    titulo: "Implementar",
    texto: "Desarrollar una version usable, conectada y facil de iterar.",
  },
];

export default function AcercaDeMi() {
  return (
    <section id="acerca" className="acerca" aria-labelledby="acerca-titulo">
      <div className="acerca__contenedor">
        <article className="acerca__presentacion">
          <p className="acerca__eyebrow">Sobre mi trabajo</p>
          <h2 id="acerca-titulo" className="acerca__titulo">
            Desarrollo con una mirada funcional.
          </h2>

          <div className="acerca__texto-grupo">
            <p className="acerca__texto">
              Soy analista programador. Me interesa entender primero que problema
              hay que resolver y despues construir una solucion que sea facil de
              usar, mantener y explicar.
            </p>

            <p className="acerca__texto">
              Trabajo en el recorrido completo: analisis, definicion de flujos,
              frontend, backend y base de datos. Esa mezcla me ayuda a conversar
              tanto con usuarios como con la parte tecnica del proyecto.
            </p>
          </div>

          <div className="acerca__nota">
            <span className="acerca__nota-label">Forma de trabajo</span>
            <p>
              Priorizar claridad, avanzar por entregables concretos y evitar
              complejidad innecesaria.
            </p>
          </div>
        </article>

        <aside className="acerca__servicios" aria-labelledby="servicios-titulo">
          <header className="acerca__encabezado-servicios">
            <p className="acerca__eyebrow">Servicios</p>
            <h3 id="servicios-titulo" className="acerca__subtitulo">
              Donde puedo aportar
            </h3>
          </header>

          <ul className="acerca__grilla-servicios" aria-label="Lista de servicios">
            {SERVICIOS.map((servicio) => (
              <li key={servicio.titulo} className="acerca__item-servicio">
                <article className="acerca__tarjeta">
                  <h4 className="acerca__tarjeta-titulo">{servicio.titulo}</h4>
                  <ul className="acerca__lista">
                    {servicio.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>

          <section className="acerca__proceso" aria-labelledby="proceso-titulo">
            <div className="acerca__proceso-encabezado">
              <p className="acerca__eyebrow">Como trabajo</p>
              <h3 id="proceso-titulo" className="acerca__subtitulo">
                Primero claridad, despues codigo
              </h3>
            </div>

            <ol className="acerca__linea">
              {PROCESO.map((item) => (
                <li key={item.paso} className="acerca__linea-item">
                  <span className="acerca__linea-punto">{item.paso}</span>
                  <div className="acerca__linea-contenido">
                    <h4>{item.titulo}</h4>
                    <p>{item.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </section>
  );
}
