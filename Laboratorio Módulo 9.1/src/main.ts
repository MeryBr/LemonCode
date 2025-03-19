import { calculaTicket } from "./services/calculaTicket";
import { productos } from "./data/productos";

const ticketFinal = calculaTicket(productos);
console.log(JSON.stringify(ticketFinal, null, 2));
