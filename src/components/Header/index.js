import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>Portal Empreendorismo</span>
      <nav>
        <a>Home</a>
        <a>Entrar</a>
      </nav>
    </header>
  );
}
export default Header;
