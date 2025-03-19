import { LineaTicket } from "./models/linea-ticket.js";
import { calcularIvaProductos } from "./auxiliary_functions/calculo-iva-productos.js";
import { calcularTotal } from "./auxiliary_functions/resumen-total.js";
import { obtenerDesgloseIVA } from "./auxiliary_functions/iva-desglose.js";


const productos: LineaTicket[] = [
  { producto: { nombre: "Legumbres", precio: 2, tipoIva: "general" }, cantidad: 2 },
  { producto: { nombre: "Perfume", precio: 20, tipoIva: "general" }, cantidad: 3 },
  { producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" }, cantidad: 6 },
  { producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" }, cantidad: 1 },
];

const lineasResultado = calcularIvaProductos(productos);
const total = calcularTotal(lineasResultado);
const desgloseIva = obtenerDesgloseIVA(lineasResultado);

console.log({ lineas: lineasResultado, total, desgloseIva });
