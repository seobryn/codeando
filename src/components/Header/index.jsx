import { DonationButton } from "../DonationButton"
import styles from "./header.module.css"

export function Header({ onShare }) {
  return (
    <header className={styles.header}>
      <a href="/codeando">
        <img
          src="/codeando/codeando.svg"
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
            src="/codeando/share-icon.svg"
            alt="Compartir Proyecto"
          />
        </button>
        <DonationButton />
      </div>
    </header>
  )
}
