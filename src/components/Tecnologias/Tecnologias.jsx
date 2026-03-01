import "./Tecnologias.css";

const TECNOLOGIAS = [
  { nombre: "HTML", archivo: "/Iconos/Html-5.svg", glow: "227, 79, 38" },
  { nombre: "CSS", archivo: "/Iconos/Css-3.svg", glow: "38, 77, 228" },
  { nombre: "Sass", archivo: "/Iconos/Sass.svg", glow: "204, 102, 153" },
  { nombre: "React", archivo: "/Iconos/React.svg", glow: "97, 218, 251" },
  { nombre: "JavaScript", archivo: "/Iconos/Javascript.svg", glow: "247, 223, 30" },
  { nombre: "Python", archivo: "/Iconos/Python.svg", glow: "55, 118, 171" },
  { nombre: "Django", archivo: "/Iconos/Django.svg", glow: "9, 46, 32" },
  { nombre: "C#", archivo: "/Iconos/csharp.svg", glow: "155, 79, 150" },
  { nombre: ".NET", archivo: "/Iconos/dotnet.svg", glow: "81, 43, 212" },
  { nombre: "Supabase", archivo: "/Iconos/supabase.svg", glow: "62, 207, 142" },
  { nombre: "Trello", archivo: "/Iconos/trello.svg", glow: "0, 121, 191" },
  { nombre: "Miro", archivo: "/Iconos/miro.svg", glow: "255, 221, 0" },
  { nombre: "Mercado Pago", archivo: "/Iconos/mercado-pago.svg", glow: "0, 169, 255" },
  { nombre: "Postman", archivo: "/Iconos/postman.svg", glow: "255, 108, 55" },
  { nombre: "Vercel", archivo: "/Iconos/vercel.svg", glow: "180, 180, 180" },
  { nombre: "Firebase", archivo: "/Iconos/firebase.svg", glow: "255, 202, 40" },
  { nombre: "Android", archivo: "/Iconos/Android.svg", glow: "61, 220, 132" },
  { nombre: "React Native", archivo: "/Iconos/React-Native.svg", glow: "97, 218, 251" },
  { nombre: "Git", archivo: "/Iconos/git.svg", glow: "240, 80, 51" },
  { nombre: "GitHub", archivo: "/Iconos/Github.svg", glow: "110, 84, 148" },
  { nombre: "SQL Server", archivo: "/Iconos/sql-server.svg", glow: "204, 43, 43" },
];

const GLOW_PRESETS = [
  { spread: 8, blur: 18 },
  { spread: 9, blur: 20 },
  { spread: 10, blur: 22 },
  { spread: 11, blur: 24 },
];

const GLOW_PRESETS_ACCENT = [
  { spread: 13, blur: 30 },
  { spread: 14, blur: 32 },
  { spread: 15, blur: 34 },
];

function hashText(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function getGlowVars(nombre) {
  const hash = hashText(nombre);
  const isAccent = hash % 5 === 0 || hash % 7 === 0;
  const presetBase = GLOW_PRESETS[hash % GLOW_PRESETS.length];
  const presetAccent = GLOW_PRESETS_ACCENT[hash % GLOW_PRESETS_ACCENT.length];
  const preset = isAccent ? presetAccent : presetBase;

  return {
    "--glow-size": `${preset.spread}px`,
    "--glow-blur": `${preset.blur}px`,
    "--ring-alpha": isAccent ? "0.22" : "0.18",
    "--glow-alpha": isAccent ? "0.34" : "0.26",
    "--outer-alpha": isAccent ? "0.16" : "0.08",
  };
}

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias" aria-labelledby="tecnologias-titulo">
      <header className="tecnologias__encabezado">
        <h2 id="tecnologias-titulo" className="tecnologias__titulo">Tecnologias</h2>
        <p className="tecnologias__descripcion">
          Herramientas que uso para analisis, desarrollo e integracion.
        </p>
      </header>

      <figure className="tecnologias__nube" aria-label="Nube de tecnologias">
        <ul className="tecnologias__lista">
          {TECNOLOGIAS.map((t) => (
            <li
              key={t.nombre}
              className="tecnologias__item"
              style={{ "--logo-glow": t.glow, ...getGlowVars(t.nombre) }}
            >
              <img className="tecnologias__icono" src={t.archivo} alt={t.nombre} />
              <span className="tecnologias__tooltip" aria-hidden="true">{t.nombre}</span>
            </li>
          ))}
        </ul>
      </figure>
    </section>
  );
}
