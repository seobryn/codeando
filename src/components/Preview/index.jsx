import styles from "./preview.module.css"

export function Preview({ content }) {
  return <iframe className={styles.preview} srcDoc={content}></iframe>
}
