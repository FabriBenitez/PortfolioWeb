import "./Proyectos.css";

const PROYECTOS = [
  {
    numero: "01",
    categoria: "Sistema interno",
    titulo: "Plataforma de ventas y stock",
    descripcion:
      "Gestion de productos, pedidos, clientes y reportes para una operacion comercial con seguimiento diario.",
    objetivo:
      "Centralizar ventas y stock en una sola vista para reducir errores y ordenar el circuito operativo.",
    stack: ["React", "C#", ".NET", "SQL Server"],
    insight: "Dashboard operativo y trazabilidad",
    previewTitle: "Ordena ventas y stock sin friccion.",
    previewText:
      "Un flujo claro para catalogo, pedidos, clientes y reportes diarios.",
    previewPrimary: "Ver panel",
    previewSecondary: "Agendar demo",
    demo: "https://example.com/",
    repo: "https://github.com/",
    accent: "#0f766e",
    surface: "#ccfbf1",
  },
  {
    numero: "02",
    categoria: "Servicios",
    titulo: "Portal de turnos y seguimiento",
    descripcion:
      "Agenda online con estados, historial y panel administrativo para coordinar servicios de punta a punta.",
    objetivo:
      "Mejorar la experiencia de reserva y darle al equipo una herramienta clara para organizar disponibilidad.",
    stack: ["React", "Django", "Python", "PostgreSQL"],
    insight: "Reservas, estados y automatizacion",
    previewTitle: "Reserva turnos con seguimiento en vivo.",
    previewText:
      "Agenda, estados e historial en una experiencia simple para cliente y equipo.",
    previewPrimary: "Agendar ahora",
    previewSecondary: "Panel admin",
    demo: "https://example.com/",
    repo: "https://github.com/",
    accent: "#f97316",
    surface: "#ffedd5",
  },
  {
    numero: "03",
    categoria: "E-commerce",
    titulo: "Tienda online con checkout integrado",
    descripcion:
      "Catalogo, carrito, pagos y seguimiento de compra para un negocio que necesita vender de forma simple.",
    objetivo:
      "Convertir visitas en compras con un flujo corto, claro y bien integrado con el canal de cobro.",
    stack: ["React", "Mercado Pago", "Firebase", "Sass"],
    insight: "Catalogo, carrito y pago directo",
    previewTitle: "Compra rapido y paga en pocos pasos.",
    previewText:
      "Una tienda pensada para vender mejor con checkout integrado y menos friccion.",
    previewPrimary: "Explorar tienda",
    previewSecondary: "Ir al pago",
    demo: "https://example.com/",
    repo: "https://github.com/",
    accent: "#2563eb",
    surface: "#dbeafe",
  },
  {
    numero: "04",
    categoria: "Analitica",
    titulo: "Dashboard de indicadores operativos",
    descripcion:
      "Panel con metricas, comparativas y filtros para que un equipo pueda leer el negocio en tiempo real.",
    objetivo:
      "Traducir datos dispersos en decisiones rapidas con una capa visual clara para usuarios no tecnicos.",
    stack: ["React", "Supabase", "Charting", "SQL"],
    insight: "KPIs, filtros y lectura ejecutiva",
    previewTitle: "Entiende el negocio de un vistazo.",
    previewText:
      "Indicadores, comparativas y filtros para decidir rapido con contexto real.",
    previewPrimary: "Abrir reportes",
    previewSecondary: "Comparar",
    demo: "https://example.com/",
    repo: "https://github.com/",
    accent: "#7c3aed",
    surface: "#ede9fe",
  },
  {
    numero: "05",
    categoria: "Marketing",
    titulo: "Landing de captacion de leads",
    descripcion:
      "Sitio orientado a conversion con secciones comerciales, pruebas sociales y captura de consultas.",
    objetivo:
      "Mostrar propuesta de valor, ordenar el mensaje y recibir contactos listos para seguimiento comercial.",
    stack: ["React", "EmailJS", "Analytics", "CSS"],
    insight: "Conversion, formularios y embudo",
    previewTitle: "Convierte visitas en leads calificados.",
    previewText:
      "Una landing enfocada en propuesta de valor, confianza y respuesta rapida.",
    previewPrimary: "Ver landing",
    previewSecondary: "Analitica",
    demo: "https://example.com/",
    repo: "https://github.com/",
    accent: "#e11d48",
    surface: "#ffe4e6",
  },
  {
    numero: "06",
    categoria: "Colaboracion",
    titulo: "Workspace de tareas para equipos",
    descripcion:
      "Tableros, prioridades, comentarios y seguimiento para ordenar trabajo interno en proyectos compartidos.",
    objetivo:
      "Dar visibilidad al avance, evitar cuellos de botella y mejorar la coordinacion entre areas.",
    stack: ["React", "Node", "REST API", "Trello style UX"],
    insight: "Tableros, prioridades y contexto",
    previewTitle: "Alinea equipo, tareas y contexto.",
    previewText:
      "Workflows compartidos para priorizar mejor y destrabar entregas entre areas.",
    previewPrimary: "Ver workspace",
    previewSecondary: "Tablero sprint",
    demo: "https://example.com/",
    repo: "https://github.com/",
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
            Te deje 6 proyectos armados con una estructura comoda de editar para
            que despues reemplaces textos, stacks, links y capturas con tus
            casos reales.
          </p>
        </header>

        <div className="proyectos__resumen" aria-label="Resumen de proyectos">
          <span className="proyectos__pill">{PROYECTOS.length} proyectos listos para editar</span>
          <span className="proyectos__pill">Analisis, frontend y backend</span>
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
                    <a
                      className="proyectos__link proyectos__link--primario"
                      href={proyecto.demo}
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
                      Ver proyecto
                    </a>
                    <a
                      className="proyectos__link proyectos__link--secundario"
                      href={proyecto.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Codigo fuente
                    </a>
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
