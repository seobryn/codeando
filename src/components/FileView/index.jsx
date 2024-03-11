import { JSIcon } from "../Icons/javascript"
import { CSSIcon } from "../Icons/css"
import { HtmlIcon } from "../Icons/html"
import styles from './FileView.module.css'

export function FileView({ openFile, selectedFile }) {
    return (
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
    )
}