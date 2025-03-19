# Laboratorio Módulo 9.1 - Calculadora de Ticket de Compra

Este programa calcula el precio de un ticket de compra, teniendo en cuenta los productos, cantidades y los diferentes tipos de IVA.  

La función principal, `calcularTicket`, devuelve un resumen detallado con toda la información del ticket.

---

## ¿Qué hace el programa?

El programa calcula el precio de un ticket y muestra lo siguiente para cada producto:

- Nombre  
- Cantidad  
- Precio sin IVA  
- Tipo de IVA aplicado  
- Precio con IVA  

Además, también obtiene:  

- El total sin IVA  
- El IVA total aplicado  
- Un desglose del IVA por tipo  
- El total final con impuestos  

---

## Estructura del Código  

### Interfaces  

- **LineaTicket**: Representa cada línea del ticket.  
- **TicketResult**: Contiene los totales del ticket.  
- **TotalIVA**: Guarda el desglose del IVA por tipo.  
- **TicketFinal**: Estructura completa con las líneas, totales y el desglose de IVA.  

---

## Función `calcularTicket`

La función `calcularTicket` recibe una lista de productos y calcula todo lo necesario:  

1. Obtiene los datos de cada producto.  
2. Suma los totales sin IVA y con IVA.  
3. Calcula el desglose del IVA.  
4. Devuelve un objeto con toda la información organizada.  

---

## Código de la función principal  

```ts
const calcularTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
    const lineas: LineaTicket[] = calcularLineasTicket(lineasTicket);
    const totales: TicketResult = calcularTotales(lineas);
    const desgloseIVA: TotalIVA[] = calcularDesglosePorIVA(lineas);

    return {
        lineas,
        total: totales,
        desgloseIva: desgloseIVA
    };
};
