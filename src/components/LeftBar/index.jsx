import styles from "./LeftBar.module.css"

/**
 *
 * @param {{openFile: (type: 'javascript'|'html'|'css')=>void, selectedFile: 'javascript'|'html'|'css'}} props
 * @returns
 */
export function LeftBar({ openFile, selectedFile }) {
  return (
    <section className={styles["left-bar"]}>
      <ul className={styles.folder}>
        <li
          className={[
            styles.file,
            selectedFile === "javascript" ? styles["selected-file"] : "",
          ]
            .join(" ")
            .trimEnd()}
          role="button"
          onClick={() => openFile("javascript")}
        >
          {selectedFile === "javascript" ? "📂" : "📁"} main.js
        </li>
        <li
          className={[
            styles.file,
            selectedFile === "html" ? styles["selected-file"] : "",
          ]
            .join(" ")
            .trimEnd()}
          role="button"
          onClick={() => openFile("html")}
        >
          {selectedFile === "html" ? "📂" : "📁"} index.html
        </li>
        <li
          className={[
            styles.file,
            selectedFile === "css" ? styles["selected-file"] : "",
          ]
            .join(" ")
            .trimEnd()}
          role="button"
          onClick={() => openFile("css")}
        >
          {selectedFile === "css" ? "📂" : "📁"} style.css
        </li>
      </ul>
    </section>
  )
}
