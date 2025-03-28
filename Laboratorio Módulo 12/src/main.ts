import { ClienteParticular } from "@core/cliente-particular";
import { TourOperador } from "@core/tour-operador";
import { ClienteConDesayuno } from "@core/cliente-con-desayuno";
import { Reserva } from "@model/reserva.model";
import { renderText } from "./utils/renderText";

const reservas: Reserva[] = [
  { tipoHabitacion: "standard", pax: 1, noches: 2, desayuno: false },
  { tipoHabitacion: "suite", pax: 2, noches: 1, desayuno: true },
];

const clienteParticular = new ClienteParticular(reservas);
const tourOperador = new TourOperador(reservas);
const clienteConDesayuno = new ClienteConDesayuno(reservas);

const format = (cliente: { subtotal: number; total: number }) => `
Subtotal: ${cliente.subtotal.toFixed(2)} €
Total: ${cliente.total.toFixed(2)} €
`;

renderText("#output-particular", format(clienteParticular));
renderText("#output-tour", format(tourOperador));
renderText("#output-desayuno", format(clienteConDesayuno));
