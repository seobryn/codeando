import Markdown from "react-markdown"
import styles from "./PackageList.module.css"
import { useState } from "react"

export function PackageList({
  packages = [],
  isEmptyList = false,
  addPackage,
}) {
  const [selectedPackage, setSelectedPackage] = useState({})

  const onAddPkg = () => {
    addPackage({ ...selectedPackage })
    setSelectedPackage({})
  }

  const onCloseInfo = () => {
    setSelectedPackage({})
  }

  const onClickPkg = (pkg) => {
    setSelectedPackage(pkg)
  }

  return (
    <>
      <ul className={styles.list}>
        {packages.map((pkg, idx) => (
          <li
            key={`package_${idx}`}
            className={styles["list-item"]}
            role="button"
            onClick={() => onClickPkg(pkg)}
          >
            <span className={styles.name}>{pkg.name}</span>
            <span className={styles.version}>{pkg.version}</span>
          </li>
        ))}
        {isEmptyList && (
          <span className={styles.empty}>
            No se encontró este paquete en NPM
          </span>
        )}
      </ul>
      {selectedPackage.name && (
        <div className={styles["package-info-backdrop"]}>
          <div className={styles["package-info"]}>
            <button className={styles["close-btn"]} onClick={onCloseInfo}>
              &times;
            </button>
            <span
              className={styles["package-name"]}
            >{`${selectedPackage.name} v.${selectedPackage.version}`}</span>
            <span className={styles["package-publisher"]}>
              Publicada por <b>{selectedPackage.publisher}</b>
            </span>
            <p className={styles["package-description"]}>
              <Markdown>{selectedPackage.description}</Markdown>
            </p>
            <button className={styles["add-package"]} onClick={onAddPkg}>
              Agregar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
