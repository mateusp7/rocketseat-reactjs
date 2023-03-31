import React from "react"
import styles from "./Header.module.css"
import ignitelogo from "../assets/ignite-logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={ignitelogo} alt="Logotipo do Ignite" />
    </header>
  )
}

export default Header
