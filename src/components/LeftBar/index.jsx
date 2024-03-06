import styles from "./LeftBar.module.css"
import { JSIcon } from "../Icons/javascript"
import { CSSIcon } from "../Icons/css"
import { HtmlIcon } from "../Icons/html"

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
          <JSIcon className={styles.icon} /> main.js
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
          <HtmlIcon className={styles.icon} /> index.html
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
          <CSSIcon className={styles.icon} /> style.css
        </li>
      </ul>
    </section>
  )
}
