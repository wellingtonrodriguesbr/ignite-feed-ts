import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteLogo}
        alt="Dois triângulos verdes em 45 graus um em cima do outro"
      />
      <strong>Ignite Feed</strong>
    </header>
  );
}
