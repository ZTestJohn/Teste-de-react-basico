import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Link to="/">
          <span>Portal Empreendedorismo</span>
        </Link>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Article">Artigo</Link>
      </nav>
    </header>
  );
}
export default Header;
