import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contenedor">
        <p className="footer__texto">
          © {new Date().getFullYear()} Benitez Marcelo Fabricio - Analista Programador
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
          <a
            className="footer__link"
            href="https://github.com/FabriBenitez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://tiktok.com/@fabribenitez00"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
