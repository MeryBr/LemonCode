import React from "react";
import { MovementVm } from "../movement-list.vm";
import "./movement-list.component.css";

interface Props {
  movements: MovementVm[];
}

const formatAmount = (amount: string): string => {
  return amount.startsWith("-") ? `- ${amount.slice(1)}` : amount;
};

export const MovementListComponent: React.FC<Props> = ({ movements }) => (
  <div className="movements-container">
    <h2></h2>
    <table className="movements-table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Fecha valor</th>
          <th>Descripción</th>
          <th>Importe</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        {movements.map((movement) => (
          <tr key={movement.id}>
            <td>{movement.date}</td>
            <td>{movement.valueDate}</td>
            <td>{movement.description}</td>
            <td className={movement.amount.startsWith("-") ? "negative" : ""}>
              {formatAmount(movement.amount)}
            </td>
            <td>{movement.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);