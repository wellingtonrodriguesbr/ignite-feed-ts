import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.cover} />
      <div className={styles.profile}>
        <Avatar avatarSrc="https://github.com/wellingtonrodriguesbr.png" />
        <strong>Wellington Rodrigues</strong>
        <span>Frontend Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
