import styles from "./Avatar.module.css";

interface AvatarProps {
  avatarSrc: string;
  hasBorder?: boolean;
}

export function Avatar({ avatarSrc, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarSrc}
      alt=""
    />
  );
}
