import { MovementApi } from "./api/movement-list.api";
import { MovementVm } from "./movement-list.vm";

const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("es-ES");

const formatNumber = (value: number): string =>
  value.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const mapMovementListFromApiToVm = (apiMovements: MovementApi[]): MovementVm[] =>
  apiMovements.map(m => ({
    id: m.id,
    description: m.description,
    amount: `${formatNumber(m.amount)} €`,
    balance: `${formatNumber(m.balance)} €`,
    date: formatDate(m.transaction),
    valueDate: formatDate(m.realTransaction),
  }));
