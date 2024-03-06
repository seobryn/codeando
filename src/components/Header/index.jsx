import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="/codeando.svg" className={styles.logo} />
        <h3>Project</h3>
      </a>
      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_top"
        className="donate-container"
      >
        <input type="hidden" name="hosted_button_id" value="RNRKC4PPWUSAL" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
      </form>
    </header>
  )
}
