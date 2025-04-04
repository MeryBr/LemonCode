import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";

interface Props {
  accountItem: AccountVm;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;

  const formatBalance = (balance: string): string => {
    const parsedBalance = parseFloat(balance);
    if (isNaN(parsedBalance)) return balance;
    return parsedBalance.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
  };

  return (
    <div className={classes.row}>
      <span className={classes.cell}>{accountItem.iban}</span>
      <span className={classes.cell}>{accountItem.type}</span>
      <span className={classes.cell}>{accountItem.name}</span>
      <span className={classes.cell}>{formatBalance(accountItem.balance)}</span>
      <span className={classes.cell}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
    </div>
  );
};
