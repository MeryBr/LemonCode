import React from "react";
import { NavLink } from "react-router-dom";
import { appRoutes } from "@/core/router";
import styles from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const accountId = "1"; 

  return (
    <nav className={styles.navbar}>
      <NavLink
        to={appRoutes.accountList}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Mis Cuentas
      </NavLink>
      <NavLink
        to={`/movements/${accountId}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Movimientos
      </NavLink>
      <NavLink
        to={appRoutes.transfer}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Transferencias
      </NavLink>
    </nav>
  );
  
};
