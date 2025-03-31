import { MovementApi } from "./api/movement-list.api";
import { MovementVm } from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  apiMovements: MovementApi[]
): MovementVm[] =>
  apiMovements.map((m) => ({
    id: m.id,
    description: m.description,
    amount: `${m.amount.toFixed(2)} €`,
    balance: `${m.balance.toFixed(2)} €`,
    date: m.transaction,
    valueDate: m.realTransaction,
  }));
