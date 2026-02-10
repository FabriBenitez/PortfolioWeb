import "./AcercaDeMi.css";

export default function AcercaDeMi() {
  return (
    <section id="acerca" className="acerca" aria-labelledby="acerca-titulo">
      <main className="acerca__contenedor">
        {/* Bloque A: presentación */}
        <article className="acerca__presentacion">
          <header className="acerca__encabezado">
            <h2 id="acerca-titulo" className="acerca__titulo">
              Acerca de mí
            </h2>
          </header>

          <p className="acerca__texto">
            Soy analista programador con foco en el análisis funcional y la
            implementación técnica de soluciones web.
          </p>

          <p className="acerca__texto">
            Me especializo en entender necesidades reales, definir flujos claros
            y desarrollar sistemas simples, mantenibles y orientados al uso real
            del usuario.
          </p>

          <p className="acerca__texto">
            Trabajo tanto en el análisis como en el desarrollo frontend, backend
            y base de datos, buscando siempre soluciones claras antes que
            complejas.
          </p>
        </article>

        {/* Bloque B: servicios */}
        <aside className="acerca__servicios" aria-labelledby="servicios-titulo">
          <header className="acerca__encabezado-servicios">
            <h3 id="servicios-titulo" className="acerca__subtitulo">
              Qué hago / Servicios
            </h3>
          </header>

          <ul className="acerca__grilla-servicios" aria-label="Lista de servicios">
            <li className="acerca__item-servicio">
              <article className="acerca__tarjeta">
                <h4 className="acerca__tarjeta-titulo">Análisis funcional</h4>
                <ul className="acerca__lista">
                  <li>Relevamiento de requerimientos</li>
                  <li>Definición de flujos y casos de uso</li>
                  <li>Traducción de necesidades a soluciones técnicas</li>
                </ul>
              </article>
            </li>

            <li className="acerca__item-servicio">
              <article className="acerca__tarjeta">
                <h4 className="acerca__tarjeta-titulo">Desarrollo frontend</h4>
                <ul className="acerca__lista">
                  <li>Interfaces claras y funcionales</li>
                  <li>Enfoque en usabilidad</li>
                  <li>Integración con APIs</li>
                </ul>
              </article>
            </li>

            <li className="acerca__item-servicio">
              <article className="acerca__tarjeta">
                <h4 className="acerca__tarjeta-titulo">Desarrollo backend</h4>
                <ul className="acerca__lista">
                  <li>APIs REST</li>
                  <li>Lógica de negocio</li>
                  <li>Autenticación y seguridad</li>
                </ul>
              </article>
            </li>

            <li className="acerca__item-servicio">
              <article className="acerca__tarjeta">
                <h4 className="acerca__tarjeta-titulo">Bases de datos</h4>
                <ul className="acerca__lista">
                  <li>Modelado de datos</li>
                  <li>Relaciones</li>
                  <li>Consistencia y simplicidad</li>
                </ul>
              </article>
            </li>
          </ul>
        </aside>
      </main>
    </section>
  );
}
