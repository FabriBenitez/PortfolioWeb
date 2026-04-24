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
                <div className="proyectos__visual">
                  <div className="proyectos__visual-top">
                    <p className="proyectos__numero">Caso {proyecto.numero}</p>
                    <span className="proyectos__tipo">{proyecto.categoria}</span>
                  </div>

                  <div className="proyectos__visual-copy">
                    <h3 className="proyectos__visual-titulo">{proyecto.insight}</h3>
                    <p className="proyectos__visual-texto">
                      Espacio pensado para tu futura captura o mockup del proyecto.
                    </p>
                  </div>
                </div>

                <div className="proyectos__contenido">
                  <p className="proyectos__categoria">{proyecto.categoria}</p>
                  <h3 className="proyectos__nombre">{proyecto.titulo}</h3>

                  <p className="proyectos__texto">{proyecto.descripcion}</p>

                  <div className="proyectos__detalle">
                    <span className="proyectos__detalle-label">Objetivo</span>
                    <p className="proyectos__detalle-texto">{proyecto.objetivo}</p>
                  </div>

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
                      Ver demo
                    </a>
                    <a
                      className="proyectos__link proyectos__link--secundario"
                      href={proyecto.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver codigo
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
