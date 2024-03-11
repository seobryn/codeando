import styles from "./LeftBar.module.css"
import { ActionBar } from "../ActionBar"
import { useState } from "react"
import { FileView } from "../FileView"
import { AddPackage } from "../AddPackage"

/**
 *
 * @param {{openFile: (type: 'javascript'|'html'|'css')=>void, selectedFile: 'javascript'|'html'|'css'}} props
 * @returns
 */
export function LeftBar({ openFile, selectedFile }) {
  const [currentView, setCurrentView] = useState("fileView")

  const handleChangeView = (newView) => {
    setCurrentView(newView)
  }

  return (
    <section className={styles["left-bar"]}>
      <ActionBar onSetView={handleChangeView} currentView={currentView} />
      {
        currentView === 'fileView' && <FileView openFile={openFile} selectedFile={selectedFile} />
      }

      {
        currentView === 'addPackage' && <AddPackage />
      }
    </section>
  )
}
