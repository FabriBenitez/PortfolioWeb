import "./Layout.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <Navbar />
      </header>

      <main className="layout__main">
        {children}
      </main>

      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
}
