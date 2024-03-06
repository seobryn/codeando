import styles from "./App.module.css"
import Editor from "@monaco-editor/react"
import { LeftBar } from "./components/LeftBar"
import { useState } from "react"
import { Header } from "./components/Header"
import { Preview } from "./components/Preview"
import { defaultCSS, defaultHTML, defaultJS } from "./constants"

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

  const onOpenFile = (fileType) => {
    setCurrentFile(files[fileType])
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
    <script>
      ${js}
    </script>
    </body>
    </html>`

  return (
    <>
      <Header />
      <div className={styles.container}>
        <LeftBar selectedFile={currentFile} openFile={onOpenFile} />
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
      </div>
    </>
  )
}

export default App
