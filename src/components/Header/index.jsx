import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="/codeando.svg" className={styles.logo} />
        <h3>Project</h3>
      </a>
    </header>
  )
}
