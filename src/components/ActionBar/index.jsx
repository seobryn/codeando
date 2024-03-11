import styles from "./ActionBar.module.css"
import { BtnList } from "./BtnList"

export function ActionBar({ onSetView, currentView }) {
  const handleChangeView = (clickedView) => {
    if (clickedView !== currentView) {
      onSetView(clickedView)
    }
  }
  return (
    <section className={styles.container}>
      {BtnList.map((view, idx) => (
        <button
          key={`option-btn_${idx}`}
          className={[
            styles["option-btn"],
            currentView === view.viewName ? styles.selected : "",
          ]
            .join(" ")
            .trimEnd()}
          onClick={() => handleChangeView(view.viewName)}
        >
          <img src={view.image} alt="Opción de menú" />
        </button>
      ))}
    </section>
  )
}
