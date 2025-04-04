import * as React from "react";
import {
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
} from "./components";
import classes from "./app-layout.module.css";
import { Outlet } from "react-router-dom"; 

export const AppLayout: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <main className={classes.mainContent}>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};
