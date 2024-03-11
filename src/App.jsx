import styles from "./App.module.css"
import Editor from "@monaco-editor/react"
import { LeftBar } from "./components/LeftBar"
import { useState } from "react"
import { Header } from "./components/Header"
import { Preview } from "./components/Preview"
import { ESMSH_URL, defaultCSS, defaultHTML, defaultJS } from "./constants"
import { DonationCompleted } from "./components/DonationCompleted"
import { useEffect } from "react"
import { useRef } from "react"
import { cleanStringForImport } from "./utils/strings"

const files = {
  javascript: "javascript",
  html: "html",
  css: "css",
}

function App() {
  const [currentFile, setCurrentFile] = useState(files.html)
  const [html, setHTML] = useState(defaultHTML)
  const [css, setCSS] = useState(defaultCSS)
  const [js, setJS] = useState(defaultJS)

  const importedProject = useRef(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const donationStatus = params.get("donation")

    if (donationStatus === "completed") {
      setIsModalOpen(true)
    }

    const importProject = params.get("i")
    if (importProject && !importedProject.current) {
      const data = JSON.parse(decodeURIComponent(atob(importProject)))
      setJS(data.js)
      setCSS(data.css)
      setHTML(data.html)
      importedProject.current = true
      alert("Proyecto importado correctamente!")
    }

    if (params.size !== 0) {
      history.replaceState({}, document.title, location.origin)
    }
  }, [])

  const onShare = () => {
    const data = {
      js,
      css,
      html,
    }
    const urlData = btoa(encodeURIComponent(JSON.stringify(data)))
    navigator.clipboard.writeText(`https://codeando.link?i=${urlData}`)
    alert("Enlace copiado en el clipboard")
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  const onOpenFile = (fileType) => {
    setCurrentFile(files[fileType])
  }

  const onAddPackage = (pkg) => {
    const importString = `import ${cleanStringForImport(pkg.name)} from '${ESMSH_URL}/${pkg.name}@${pkg.version}'`
    setJS(`${importString}
${js}`)
  }

  const onChangeValue = (evt) => {
    if (currentFile === "javascript") {
      setJS(evt)
    } else if (currentFile === "css") {
      setCSS(evt)
    } else if (currentFile === "html") {
      setHTML(evt)
    }
  }

  const getCurrentValue = () => {
    if (currentFile === "javascript") {
      return js
    } else if (currentFile === "css") {
      return css
    } else if (currentFile === "html") {
      return html
    }
  }

  const getGeneratedHTML = () => `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Codeando</title>
    </head>
    <style>
      ${css}
    </style>
    <body>
      ${html}
    <script type="module">
      ${js}
    </script>
    </body>
    </html>`

  return (
    <>
      <Header onShare={onShare} />
      <div className={styles.container}>
        <LeftBar
          selectedFile={currentFile}
          openFile={onOpenFile}
          onAddPackage={onAddPackage}
        />
        <Editor
          height="100%"
          width="100%"
          language={currentFile}
          theme="vs-dark"
          value={getCurrentValue()}
          options={{
            fontSize: "16px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            minimap: {
              enabled: false,
            },
          }}
          onChange={onChangeValue}
        />
        <Preview content={getGeneratedHTML()} />
        {isModalOpen && <DonationCompleted onCloseModal={onCloseModal} />}
      </div>
    </>
  )
}

export default App
