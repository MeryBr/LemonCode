import React from "react";
import styles from "./footer.component.module.css";

export const FooterComponent: React.FC = () => (
  <footer className={styles.footer}>
    <img src="/assets/logo_footer.svg" alt="Logo" className={styles.logo} />
    <span className={styles.secureText}>
      <img src="/assets/secure_site.svg" alt="Secure" />
    </span>
  </footer>
);
