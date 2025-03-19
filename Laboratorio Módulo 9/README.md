# Laboratorio Módulo 9.1 - Calculadora de Ticket de Compra

Este repositorio contiene un programa que calcula el precio de un ticket de compra, teniendo en cuenta los productos, cantidades y tipos de IVA aplicados. La función principal, `calcularTicket`, devuelve un ticket detallado con toda la información necesaria.

## ¿Qué hace el programa?

Este programa calcula el precio de un ticket de compra y presenta la siguiente información para cada producto:

- Nombre del producto.
- Cantidad del producto.
- Precio sin IVA.
- Tipo de IVA aplicable.
- Precio con IVA.

Adicionalmente, el programa calcula:

- El total sin IVA de todos los productos.
- El IVA total aplicado en el ticket.
- El desglose del IVA por tipo.
- El total final con IVA incluido.

## Estructura del Código

### Interfaces

#### `LineaTicket`
Define la estructura de cada línea del ticket, que contiene:

- `nombre`: Nombre del producto.
- `cantidad`: Cantidad del producto.
- `precioSinIva`: Precio del producto sin IVA.
- `tipoIva`: Tipo de IVA aplicado al producto.
- `precioConIva`: Precio del producto con IVA incluido.

#### `TicketResult`
Define la estructura de los totales del ticket, que incluye:

- `totalSinIva`: Total sin IVA de todos los productos.
- `totalConIva`: Total con IVA de todos los productos.
- `totalIva`: Total del IVA aplicado en el ticket.

#### `TotalIVA`
Representa el desglose del IVA por tipo, con los siguientes campos:

- `tipoIva`: Tipo de IVA.
- `cuantia`: Cuantía del IVA aplicado a ese tipo.

#### `TicketFinal`
Es el objeto final que contiene toda la información del ticket, estructurado de la siguiente manera:

- `lineas`: Un arreglo con los resultados de cada línea de ticket (`LineaTicket`).
- `total`: Objeto que contiene los totales del ticket (`TicketResult`).
- `desgloseIva`: Arreglo con el desglose del IVA por tipo (`TotalIVA`).

### Función Principal - `calcularTicket`

La función `calcularTicket` recibe un arreglo de líneas de ticket (`LineaTicket[]`) y devuelve un `TicketFinal`. La función realiza los siguientes pasos:

1. Calcula las líneas del ticket utilizando la función `calcularLineasTicket`.
2. Calcula los totales del ticket con la función `calcularTotales`.
3. Calcula el desglose del IVA por tipo con la función `calcularDesglosePorIVA`.

Finalmente, la función devuelve un objeto `TicketFinal` con toda la información calculada.

### Código de la Función `calcularTicket`

```javascript
const calcularTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
    const lineas : LineaTicket[] = calcularLineasTicket(lineasTicket);
    const totales : TicketResult = calcularTotales(lineas);
    const desgloseIVA : TotalIVA[] = calcularDesglosePorIVA(lineas);

    const ticketFinal : TicketFinal = {
        lineas: lineas,
        total: totales,
        desgloseIva: desgloseIVA
    }

    return ticketFinal;
}
```