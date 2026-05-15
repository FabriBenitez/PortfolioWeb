import "./Contacto.css";

const EMAIL = "fabribenitez6@gmail.com";
const MAILTO_LINK = `mailto:${EMAIL}?subject=Contacto%20desde%20tu%20portfolio`;
const LINKEDIN_URL = "https://www.linkedin.com/in/benitezmarcelofabricio/";
const LINKEDIN_LABEL = "linkedin.com/in/benitezmarcelofabricio";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a3 3 0 0 1-3 3h-13.5a3 3 0 0 1-3-3v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 8.25 6.647 5.168a1.38 1.38 0 0 0 1.706 0L19.5 8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.75 8.25A1.5 1.5 0 1 0 6.75 5.25a1.5 1.5 0 0 0 0 3ZM5.5 9.75h2.5v8.75H5.5zM11.25 9.75h2.395v1.202h.034c.333-.632 1.149-1.298 2.365-1.298 2.53 0 2.997 1.666 2.997 3.833v5.013h-2.5v-4.444c0-1.06-.019-2.424-1.477-2.424-1.479 0-1.705 1.155-1.705 2.347v4.521h-2.5V9.75Z"
        fill="currentColor"
      />
      <path
        d="M4.5 3.75h15a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M6.25 13.75 13.75 6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 6.25h6.25V12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CANALES = [
  {
    id: "email",
    eyebrow: "Correo",
    chip: "Canal prioritario",
    titulo: "Charlemos por correo",
    valor: EMAIL,
    descripcion: "La forma mas directa para propuestas, entrevistas, colaboraciones o consultas profesionales.",
    detalle: "Suelo responder con mas contexto y seguimiento por este canal.",
    tags: ["Propuestas", "Freelance", "Consultas"],
    href: MAILTO_LINK,
    accion: "Enviar correo",
    icono: <MailIcon />,
  },
  {
    id: "linkedin",
    eyebrow: "LinkedIn",
    chip: "Networking",
    titulo: "Perfil profesional",
    valor: LINKEDIN_LABEL,
    descripcion: "Ideal para recruiters, networking y un primer acercamiento profesional.",
    detalle: "Perfecto para ver experiencia, recorrido y abrir una conversacion inicial.",
    tags: ["Recruiters", "Networking", "Perfil"],
    href: LINKEDIN_URL,
    accion: "Abrir LinkedIn",
    icono: <LinkedInIcon />,
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="contacto" aria-labelledby="contacto-titulo">
      <div className="contacto__contenedor">
        <div className="contacto__top">
          <header className="contacto__encabezado">
            <p className="contacto__eyebrow">Canales de contacto</p>
            <h2 id="contacto-titulo" className="contacto__titulo">
              Contacto
            </h2>
            <p className="contacto__descripcion">
              Si te interesa mi perfil para una oportunidad, un proyecto o una
              colaboracion, elegi el canal que te resulte mas comodo para
              escribirme.
            </p>
          </header>

          <aside className="contacto__intro" aria-label="Preferencias de contacto">
            <span className="contacto__intro-pill">Disponible para nuevas oportunidades</span>
            <p className="contacto__intro-texto">
              Email para propuestas con mas contexto. LinkedIn para networking,
              recruiters y primer contacto profesional.
            </p>

            <div className="contacto__intro-grid">
              <div className="contacto__intro-item">
                <strong>Respuesta directa</strong>
                <span>Canales claros y faciles de usar.</span>
              </div>
              <div className="contacto__intro-item">
                <strong>Perfil visible</strong>
                <span>Experiencia, proyectos y recorrido profesional.</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="contacto__canales">
          {CANALES.map((canal) => {
            const isExternal = canal.href.startsWith("http");

            return (
              <article key={canal.id} className={`contacto__card contacto__card--${canal.id}`}>
                <div className="contacto__marca" aria-hidden="true">
                  {canal.icono}
                </div>

                <div className="contacto__contenido">
                  <div className="contacto__card-top">
                    <span className="contacto__card-eyebrow">{canal.eyebrow}</span>
                    <span className="contacto__card-chip">{canal.chip}</span>
                  </div>

                  <h3 className="contacto__card-titulo">{canal.titulo}</h3>
                  <p className="contacto__card-valor">{canal.valor}</p>
                  <p className="contacto__card-texto">{canal.descripcion}</p>
                  <p className="contacto__card-detalle">{canal.detalle}</p>

                  <ul className="contacto__tags" aria-label={`Usos recomendados para ${canal.eyebrow}`}>
                    {canal.tags.map((tag) => (
                      <li key={tag} className="contacto__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="contacto__acciones">
                    <a
                      className="contacto__boton"
                      href={canal.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      <span>{canal.accion}</span>
                      <span className="contacto__boton-icono" aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
