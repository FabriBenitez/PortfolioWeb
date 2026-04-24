import "./Certificados.css";

const CERTIFICADOS = [
  {
    titulo: "C# CoderHouse",
    area: "Backend y logica",
    archivo: "/Certificados/csharp-coderhouse.png",
  },
  {
    titulo: "Desarrollo Web",
    area: "Fundamentos web",
    archivo: "/Certificados/Desarrollo Web.png",
  },
  {
    titulo: "Desarrollo Web con HTML",
    area: "Maquetado semantico",
    archivo: "/Certificados/Desarrollo web con HTML.jpg",
  },
  {
    titulo: "JavaScript",
    area: "Interactividad y logica",
    archivo: "/Certificados/Javascript.png",
  },
  {
    titulo: "React",
    area: "Frontend moderno",
    archivo: "/Certificados/React.png",
  },
  {
    titulo: "Testing QA",
    area: "Calidad de software",
    archivo: "/Certificados/Introducci\u00f3n al software Testing QA.jpg",
  },
  {
    titulo: "Nivel B1",
    area: "Idioma",
    archivo: "/Certificados/certificado B1.jpg.jpeg",
  },
  {
    titulo: "Crypto Lemon",
    area: "Ecosistema cripto",
    archivo: "/Certificados/Crypto Lemon.pdf",
  },
  {
    titulo: "UNAB Blockchain",
    area: "Blockchain",
    archivo: "/Certificados/Unab Blockchain .pdf",
  },
];

function getAssetUrl(path) {
  return path
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");
}

export default function Certificados() {
  return (
    <section id="certificados" className="certificados" aria-labelledby="certificados-titulo">
      <div className="certificados__contenedor">
        <header className="certificados__encabezado">
          <div>
            <p className="certificados__eyebrow">Formacion continua</p>
            <h2 id="certificados-titulo" className="certificados__titulo">
              Certificados
            </h2>
          </div>

          <p className="certificados__descripcion">
            Cursos y programas que refuerzan mi perfil tecnico en desarrollo web,
            testing, logica y herramientas digitales.
          </p>
        </header>

        <div className="certificados__resumen" aria-label="Resumen de certificados">
          <span className="certificados__pill">{CERTIFICADOS.length} credenciales</span>
          <span className="certificados__pill">Imagenes y PDF</span>
        </div>

        <ul className="certificados__lista">
          {CERTIFICADOS.map((certificado) => {
            const assetUrl = getAssetUrl(certificado.archivo);
            const isPdf = certificado.archivo.toLowerCase().endsWith(".pdf");
            const pdfPreviewUrl = `${assetUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`;

            return (
              <li key={certificado.archivo} className="certificados__item">
                <article className="certificados__card">
                  <div className="certificados__preview" aria-hidden="true">
                    {isPdf ? (
                      <object
                        className="certificados__preview-documento"
                        data={pdfPreviewUrl}
                        type="application/pdf"
                      >
                        <div className="certificados__preview-fallback">
                          <strong className="certificados__preview-fallback-title">
                            {certificado.titulo}
                          </strong>
                        </div>
                      </object>
                    ) : (
                      <img
                        src={assetUrl}
                        alt={`Certificado ${certificado.titulo}`}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>

                  <div className="certificados__contenido">
                    <p className="certificados__area">{certificado.area}</p>
                    <h3 className="certificados__nombre">{certificado.titulo}</h3>

                    <a
                      className="certificados__link"
                      href={assetUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver documento
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
