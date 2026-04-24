import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__contenedor">
        <p className="footer__texto">
          Â© {new Date().getFullYear()} Benitez Marcelo Fabricio â€” Analista Programador
        </p>

        <div className="footer__links">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/benitezmarcelofabricio/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="footer__link" href="https://github.com/">GitHub</a>
          <a className="footer__link" href="https://tiktok.com/">TikTok</a>
        </div>
      </div>
    </div>
  );
}
