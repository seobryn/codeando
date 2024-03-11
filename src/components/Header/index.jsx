import { DonationButton } from "../DonationButton"
import styles from "./header.module.css"

export function Header({ onShare }) {
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          src="/codeando.svg"
          className={styles.logo}
          alt="Logo de Codeando"
        />
        <h3>Proyecto</h3>
      </a>
      <div className={styles["btn-bar"]}>
        <button onClick={onShare}>
          Compartir{" "}
          <img
            className={styles.icon}
            src="/share-icon.svg"
            alt="Compartir Proyecto"
          />
        </button>
        <DonationButton />
      </div>
    </header>
  )
}
