import * as React from "react";
import { useEffect, useState } from "react";
import { getMovements } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { MovementVm } from "./movement-list.vm";

import "../../style.css";

export const MovementListPage: React.FC = () => {
  const [movements, setMovements] = useState<MovementVm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const accountId = "1";
      const apiMovements = await getMovements(accountId);
      const vmMovements = mapMovementListFromApiToVm(apiMovements);
      setMovements(vmMovements);
    };

    fetchData();
  }, []);

  return (
    <div className="movements-container">
      <h2>Movimientos</h2>
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
          {movements.map((movement, index) => (
            <tr key={index}>
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
