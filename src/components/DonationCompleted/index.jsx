import styles from "./DonationCompleted.module.css"

export function DonationCompleted({ onCloseModal }) {
  return (
    <section className={styles["dc-container"]}>
      <article className={styles["dc-frame"]}>
        <h2 className={styles.heading}>¡Hemos recibido tu donación!</h2>
        <img src="/thanks.webp" />
        <p>
          Con tu donación agradeces el esfuerzo que hemos puesto para que
          disfrutes <b>Codeando</b>
        </p>
        <button className={styles["btn-close-modal"]} onClick={onCloseModal}>
          Cerrar
        </button>
      </article>
    </section>
  )
}
