import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovements } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { MovementVm } from "./movement-list.vm";
import { MovementListComponent } from "./components/movement-list.component";

export const MovementListPage: React.FC = () => {
  const { id } = useParams();
  const [movements, setMovements] = useState<MovementVm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined && id !== null) {
        const apiMovements = await getMovements(id);
        const vmMovements = mapMovementListFromApiToVm(apiMovements);
        setMovements(vmMovements);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="movements-container">
      <div className="movement-header">
        <h1 className="section-title">Saldos y Últimos movimientos</h1>
        <div className="saldo-top">
          <p className="saldo-title">SALDO DISPONIBLE</p>
          <p className="saldo-amount">1490 €</p>
        </div>
      </div>

      <div className="account-summary">
        <p><strong>Alias:</strong> Gastos mes</p>
        <p><strong>IBAN:</strong> ES91 2100 0418 4502 0005 1332</p>
      </div>

  
      <MovementListComponent movements={movements} />
    </div>
  );
  
    
};
