import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import {
  LoginPage,
  AccountListPage,
  AccountPage,
  MovementListPage,
  TransferPage,
} from "@/pages";
import { AppLayout } from "@/layouts/app/app-layout";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={appRoutes.root} element={<LoginPage />} />
      
      <Route element={<AppLayout />}>
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.createAccount} element={<AccountPage />} />
        <Route path={appRoutes.editAccount} element={<AccountPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route path={appRoutes.transferFromAccount} element={<TransferPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
