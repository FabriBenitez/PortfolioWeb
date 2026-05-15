import "./Proyectos.css";

const PROYECTOS = [
  {
    numero: "01",
    categoria: "Mobile",
    titulo: "21K",
    estado: "En desarrollo",
    descripcion:
      "App mobile para registrar entrenamientos de running y fuerza, pensada para preparar una media maraton con seguimiento ordenado.",
    stack: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Supabase",
      "React Navigation",
      "React Native Paper",
    ],
    insight: "Running, fuerza y progreso",
    previewTitle: "Prepara tu media maraton con un plan claro.",
    previewText:
      "Una app pensada para corredores amateur con entrenamientos y evolucion visible.",
    demo: "",
    repo: "https://github.com/FabriBenitez/21K",
    accent: "#0f766e",
    surface: "#d1fae5",
  },
  {
    numero: "02",
    categoria: "Educacion",
    titulo: "Lista-Estudiante",
    estado: "Repositorio publico",
    descripcion:
      "Aplicacion web mobile-first para tomar asistencia escolar en pocos pasos, con Firebase y un flujo simple para uso en aula.",
    stack: ["React", "Vite", "Firebase", "React Router", "JavaScript", "CSS"],
    insight: "Asistencia rapida y flujo mobile",
    previewTitle: "Toma asistencia en 20 segundos.",
    previewText:
      "Pensada para aula real, con foco en velocidad, claridad y uso desde celular.",
    demo: "",
    repo: "https://github.com/FabriBenitez/Lista-Estudiante",
    accent: "#f97316",
    surface: "#ffedd5",
  },
  {
    numero: "03",
    categoria: "Full stack",
    titulo: "Grizzly",
    estado: "Full stack",
    descripcion:
      "E-commerce fullstack de suplementos con catalogo, Supabase, TypeScript e integraciones para venta online.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Sass",
      "Recharts",
      "React Router",
      "Vitest",
    ],
    insight: "Catalogo, datos y venta online",
    previewTitle: "Un e-commerce completo para vender mejor.",
    previewText:
      "Frontend, datos e integraciones en una experiencia comercial mas ordenada.",
    demo: "",
    repo: "https://github.com/FabriBenitez/Grizzly",
    accent: "#2563eb",
    surface: "#dbeafe",
  },
  {
    numero: "04",
    categoria: "Full stack",
    titulo: "Ecommerce",
    estado: "Full stack",
    descripcion:
      "Aplicacion full stack con ASP.NET Core, React y SQL Server para integrar ventas, datos y pagos en un mismo flujo.",
    stack: [
      "React",
      "Vite",
      "ASP.NET Core",
      ".NET 7",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Mercado Pago",
      "Swagger",
    ],
    insight: "Backend, frontend y cobros",
    previewTitle: "Conecta negocio, compra y pago.",
    previewText:
      "Un caso fuerte para mostrar integracion real entre interfaz, API y base de datos.",
    demo: "",
    repo: "https://github.com/FabriBenitez/Ecommerce",
    accent: "#7c3aed",
    surface: "#ede9fe",
  },
  {
    numero: "05",
    categoria: "Backend",
    titulo: "api-mercado-pago",
    estado: "Backend",
    descripcion:
      "Backend en .NET para implementar pagos con Mercado Pago, persistencia y logica de negocio.",
    stack: [
      "ASP.NET Core",
      ".NET 7",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "MercadoPagoCore",
      "Swagger",
      "React",
      "Vite",
      "Axios",
    ],
    insight: "Pagos, API y persistencia",
    previewTitle: "Integra pagos con una base solida.",
    previewText:
      "Ideal para mostrar trabajo backend con integraciones externas y logica de negocio.",
    demo: "",
    repo: "https://github.com/FabriBenitez/api-mercado-pago",
    accent: "#e11d48",
    surface: "#ffe4e6",
  },
  {
    numero: "06",
    categoria: "SaaS en desarrollo",
    titulo: "AuditFlow",
    estado: "SaaS en desarrollo",
    descripcion:
      "SaaS propio para auditorias, hallazgos y seguimiento de acciones. Lo estoy usando como producto para ordenar procesos reales.",
    stack: ["SaaS", "Auditorias", "Seguimiento", "Producto propio"],
    insight: "Hallazgos, responsables y trazabilidad",
    previewTitle: "Convierte auditorias en un flujo claro.",
    previewText:
      "Lo sume para mostrar lo que estas construyendo hoy y hacia donde evoluciona tu perfil.",
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
            Proyectos propios y trabajos en desarrollo donde muestro como pienso,
            organizo y construyo soluciones con codigo.
          </p>
        </header>

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

                    <span className="proyectos__preview-tag">{proyecto.categoria}</span>
                  </div>

                  <div className="proyectos__preview-canvas">
                    <div className="proyectos__preview-copy">
                      <span className="proyectos__estado">{proyecto.estado}</span>
                      <span className="proyectos__preview-kicker">{proyecto.insight}</span>
                      <p className="proyectos__preview-title">{proyecto.previewTitle}</p>
                      <p className="proyectos__preview-texto">{proyecto.previewText}</p>
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
                  <div className="proyectos__contenido-top">
                    <h3 className="proyectos__nombre">{proyecto.titulo}</h3>
                    <span className="proyectos__contenido-estado">{proyecto.estado}</span>
                  </div>
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
