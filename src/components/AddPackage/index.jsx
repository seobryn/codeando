import styles from "./AddPackage.module.css"
import { debounce } from "../../utils/debounce"
import { getPackages } from "../../services/npm.service"
import { PackageList } from "./PackageList"
import { useState } from "react"
import { useRef } from "react"

export function AddPackage({ onAddPackage }) {
  const [packages, setPackages] = useState([])
  const isEmptyList = useRef(false)

  const onInput = async (evt) => {
    const pkgs = await getPackages(evt.target.value)
    isEmptyList.current = pkgs.length === 0
    setPackages(pkgs)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Busca un paquete npm"
          onInput={debounce((evt) => onInput(evt))}
        />
      </form>
      <PackageList
        packages={packages}
        isEmptyList={isEmptyList.current}
        addPackage={onAddPackage}
      />
    </div>
  )
}
