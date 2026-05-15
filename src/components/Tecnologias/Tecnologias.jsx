import "./Tecnologias.css";

const GRUPOS_TECNOLOGIAS = [
  {
    categoria: "Frontend",
    descripcion: "Interfaces web y mobile con foco en uso real.",
    tecnologias: [
      { nombre: "React", archivo: "/Iconos/React.svg" },
      { nombre: "React Native", archivo: "/Iconos/React-Native.svg" },
      { nombre: "JavaScript", archivo: "/Iconos/Javascript.svg" },
      { nombre: "HTML", archivo: "/Iconos/Html-5.svg" },
      { nombre: "CSS", archivo: "/Iconos/Css-3.svg" },
      { nombre: "Sass", archivo: "/Iconos/Sass.svg" },
    ],
  },
  {
    categoria: "Backend y datos",
    descripcion: "APIs, logica de negocio, persistencia e integraciones.",
    tecnologias: [
      { nombre: "C#", archivo: "/Iconos/csharp.svg" },
      { nombre: ".NET", archivo: "/Iconos/dotnet.svg" },
      { nombre: "Python", archivo: "/Iconos/Python.svg" },
      { nombre: "Django", archivo: "/Iconos/Django.svg" },
      { nombre: "SQL Server", archivo: "/Iconos/sql-server.svg" },
      { nombre: "Supabase", archivo: "/Iconos/supabase.svg" },
      { nombre: "Firebase", archivo: "/Iconos/firebase.svg" },
    ],
  },
  {
    categoria: "Herramientas",
    descripcion: "Trabajo diario, despliegue, pruebas y documentacion.",
    tecnologias: [
      { nombre: "Git", archivo: "/Iconos/git.svg" },
      { nombre: "GitHub", archivo: "/Iconos/Github.svg" },
      { nombre: "Postman", archivo: "/Iconos/postman.svg" },
      { nombre: "Vercel", archivo: "/Iconos/vercel.svg" },
      { nombre: "Mercado Pago", archivo: "/Iconos/mercado-pago.svg" },
      { nombre: "Trello", archivo: "/Iconos/trello.svg" },
      { nombre: "Miro", archivo: "/Iconos/miro.svg" },
    ],
  },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias" aria-labelledby="tecnologias-titulo">
      <div className="tecnologias__contenedor">
        <header className="tecnologias__encabezado">
          <p className="tecnologias__eyebrow">Habilidades</p>
          <h2 id="tecnologias-titulo" className="tecnologias__titulo">Mi stack de trabajo</h2>
          <p className="tecnologias__descripcion">
            Las tecnologias estan agrupadas por uso real dentro de un proyecto:
            interfaz, backend, datos, integraciones y herramientas de trabajo.
          </p>
        </header>

        <div className="tecnologias__grupos">
          {GRUPOS_TECNOLOGIAS.map((grupo) => (
            <article key={grupo.categoria} className="tecnologias__grupo">
              <div className="tecnologias__grupo-header">
                <h3 className="tecnologias__grupo-titulo">{grupo.categoria}</h3>
                <p className="tecnologias__grupo-descripcion">{grupo.descripcion}</p>
              </div>

              <ul className="tecnologias__lista" aria-label={grupo.categoria}>
                {grupo.tecnologias.map((tecnologia) => (
                  <li key={tecnologia.nombre} className="tecnologias__item">
                    <span className="tecnologias__icono-wrap" aria-hidden="true">
                      <img className="tecnologias__icono" src={tecnologia.archivo} alt="" />
                    </span>
                    <span className="tecnologias__nombre">{tecnologia.nombre}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
