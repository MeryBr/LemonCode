import React from "react";
import styles from "./header.component.module.css";

export const HeaderComponent: React.FC = () => (
  <header className={styles.header}>
    <img src="/assets/logo_header_white.svg" alt="Logo" className={styles.logo} />
    <span className={styles.welcome}>Bienvenido</span>
  </header>
);
