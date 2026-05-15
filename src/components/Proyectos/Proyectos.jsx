import "./Proyectos.css";

const PROYECTOS = [
  {
    numero: "01",
    categoria: "Mobile",
    titulo: "21K",
    descripcion:
      "Aplicacion mobile para corredores amateur que combina running y fuerza para preparar una media maraton con seguimiento de progreso.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    insight: "Running, fuerza y progreso",
    previewTitle: "Prepara tu media maraton con un plan claro.",
    previewText:
      "Una app pensada para corredores amateur con entrenamientos y evolucion visible.",
    previewPrimary: "Ver repo",
    previewSecondary: "Stack mobile",
    demo: "",
    repo: "https://github.com/FabriBenitez/21K",
    accent: "#0f766e",
    surface: "#d1fae5",
  },
  {
    numero: "02",
    categoria: "Educacion",
    titulo: "Lista-Estudiante",
    descripcion:
      "Aplicacion web mobile-first para tomar asistencia escolar en segundos por curso, con modo demo y backend en Firebase.",
    stack: ["React", "Vite", "Firebase", "CSS"],
    insight: "Asistencia rapida y flujo mobile",
    previewTitle: "Toma asistencia en 20 segundos.",
    previewText:
      "Pensada para aula real, con foco en velocidad, claridad y uso desde celular.",
    previewPrimary: "Ver repo",
    previewSecondary: "Codigo fuente",
    demo: "",
    repo: "https://github.com/FabriBenitez/Lista-Estudiante",
    accent: "#f97316",
    surface: "#ffedd5",
  },
  {
    numero: "03",
    categoria: "E-commerce",
    titulo: "Grizzly",
    descripcion:
      "Frontend completo para e-commerce de suplementos, con una interfaz comercial trabajada para catalogo, conversion y navegacion clara.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    insight: "Catalogo, marca y conversion",
    previewTitle: "Un e-commerce pensado para vender mejor.",
    previewText:
      "Diseno de tienda, estructura de producto y una experiencia visual mas pulida.",
    previewPrimary: "Ver frontend",
    previewSecondary: "Explorar UI",
    demo: "",
    repo: "https://github.com/FabriBenitez/Grizzly",
    accent: "#2563eb",
    surface: "#dbeafe",
  },
  {
    numero: "04",
    categoria: "Full stack",
    titulo: "Ecommerce",
    descripcion:
      "Aplicacion full stack con backend en ASP.NET Core, frontend en React y base de datos SQL Server para resolver ventas y pagos en un flujo integrado.",
    stack: ["React", "ASP.NET Core", "SQL Server", "Mercado Pago"],
    insight: "Backend, frontend y cobros",
    previewTitle: "Conecta negocio, compra y pago.",
    previewText:
      "Un caso fuerte para mostrar integracion real entre interfaz, API y base de datos.",
    previewPrimary: "Ver repo",
    previewSecondary: "Stack completo",
    demo: "",
    repo: "https://github.com/FabriBenitez/Ecommerce",
    accent: "#7c3aed",
    surface: "#ede9fe",
  },
  {
    numero: "05",
    categoria: "Backend",
    titulo: "api-mercado-pago",
    descripcion:
      "Implementacion de pagos con la API de Mercado Pago usando .NET, Entity Framework Core y SQL Server.",
    stack: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server"],
    insight: "Pagos, API y persistencia",
    previewTitle: "Integra pagos con una base solida.",
    previewText:
      "Ideal para mostrar trabajo backend con integraciones externas y logica de negocio.",
    previewPrimary: "Ver backend",
    previewSecondary: "Mercado Pago",
    demo: "",
    repo: "https://github.com/FabriBenitez/api-mercado-pago",
    accent: "#e11d48",
    surface: "#ffe4e6",
  },
  {
    numero: "06",
    categoria: "SaaS en desarrollo",
    titulo: "AuditFlow",
    descripcion:
      "SaaS propio enfocado en auditorias, seguimiento de hallazgos y trazabilidad de acciones para equipos que necesitan ordenar procesos.",
    stack: ["SaaS", "Auditorias", "Seguimiento", "Producto propio"],
    insight: "Hallazgos, responsables y trazabilidad",
    previewTitle: "Convierte auditorias en un flujo claro.",
    previewText:
      "Lo sume para mostrar lo que estas construyendo hoy y hacia donde evoluciona tu perfil.",
    previewPrimary: "En desarrollo",
    previewSecondary: "Proximo lanzamiento",
    demo: "",
    repo: "",
    accent: "#0891b2",
    surface: "#cffafe",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos" aria-labelledby="proyectos-titulo">
      <div className="proyectos__contenedor">
        <header className="proyectos__encabezado">
          <div>
            <p className="proyectos__eyebrow">Casos destacados</p>
            <h2 id="proyectos-titulo" className="proyectos__titulo">
              Proyectos
            </h2>
          </div>

          <p className="proyectos__descripcion">
            Una seleccion de proyectos reales que mezcla producto, mobile,
            backend, e-commerce y el SaaS que estas construyendo hoy.
          </p>
        </header>

        <div className="proyectos__resumen" aria-label="Resumen de proyectos">
          <span className="proyectos__pill">{PROYECTOS.length} proyectos seleccionados</span>
          <span className="proyectos__pill">Mobile, SaaS, backend y e-commerce</span>
        </div>

        <ul className="proyectos__lista">
          {PROYECTOS.map((proyecto) => (
            <li key={proyecto.numero} className="proyectos__item">
              <article
                className="proyectos__card"
                style={{
                  "--project-accent": proyecto.accent,
                  "--project-surface": proyecto.surface,
                }}
              >
                <div className="proyectos__visual" aria-hidden="true">
                  <div className="proyectos__preview-bar">
                    <p className="proyectos__preview-brand">{proyecto.titulo.split(" ")[0]}</p>

                    <div className="proyectos__preview-nav">
                      {proyecto.stack.slice(0, 3).map((item) => (
                        <span key={item} className="proyectos__preview-nav-item">
                          {item}
                        </span>
                      ))}
                    </div>

                    <span className="proyectos__preview-tag">{proyecto.categoria}</span>
                  </div>

                  <div className="proyectos__preview-canvas">
                    <div className="proyectos__preview-copy">
                      <span className="proyectos__preview-kicker">{proyecto.insight}</span>
                      <p className="proyectos__preview-title">{proyecto.previewTitle}</p>
                      <p className="proyectos__preview-texto">{proyecto.previewText}</p>

                      <div className="proyectos__preview-actions">
                        <span className="proyectos__preview-button">
                          {proyecto.previewPrimary}
                        </span>
                        <span className="proyectos__preview-ghost">
                          {proyecto.previewSecondary}
                        </span>
                      </div>
                    </div>

                    <div className="proyectos__preview-window">
                      <div className="proyectos__preview-window-top">
                        <span className="proyectos__preview-window-pill" />
                        <span className="proyectos__preview-window-pill proyectos__preview-window-pill--wide" />
                        <span className="proyectos__preview-window-dot" />
                      </div>

                      <div className="proyectos__preview-window-body">
                        <div className="proyectos__preview-window-sidebar">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="proyectos__preview-window-content">
                          <span className="proyectos__preview-window-card proyectos__preview-window-card--hero" />
                          <div className="proyectos__preview-window-grid">
                            <span className="proyectos__preview-window-card" />
                            <span className="proyectos__preview-window-card" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="proyectos__contenido">
                  <h3 className="proyectos__nombre">{proyecto.titulo}</h3>
                  <p className="proyectos__texto">{proyecto.descripcion}</p>

                  <ul className="proyectos__stack" aria-label={`Stack de ${proyecto.titulo}`}>
                    {proyecto.stack.map((item) => (
                      <li key={item} className="proyectos__stack-item">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="proyectos__acciones">
                    {proyecto.demo || proyecto.repo ? (
                      <a
                        className="proyectos__link proyectos__link--primario"
                        href={proyecto.demo || proyecto.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="proyectos__link-icon" aria-hidden="true">
                          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.25 4.25H15.75V8.75"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.25 11.75L15.75 4.25"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.75 10.25V13.75C14.75 14.3023 14.3023 14.75 13.75 14.75H6.25C5.69772 14.75 5.25 14.3023 5.25 13.75V6.25C5.25 5.69772 5.69772 5.25 6.25 5.25H9.75"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {proyecto.demo ? "Ver proyecto" : "Ver repositorio"}
                      </a>
                    ) : (
                      <span className="proyectos__link proyectos__link--primario proyectos__link--disabled">
                        En desarrollo
                      </span>
                    )}
                    {proyecto.demo && proyecto.repo ? (
                      <a
                        className="proyectos__link proyectos__link--secundario"
                        href={proyecto.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Codigo fuente
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
