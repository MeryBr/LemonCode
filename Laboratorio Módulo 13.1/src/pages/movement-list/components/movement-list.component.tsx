import React from "react";
import { MovementVm } from "../movement-list.vm";

interface Props {
  movements: MovementVm[];
}

export const MovementListComponent: React.FC<Props> = ({ movements }) => {
  return (
    <div>
      <h2>Movimientos</h2>
      <table>
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
              <td>{movement.amount}</td>
              <td>{movement.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
