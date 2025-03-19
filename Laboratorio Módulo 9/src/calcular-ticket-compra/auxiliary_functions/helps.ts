import { ResultadoLineaTicket, TipoIva, TotalPorTipoIva } from "../modelo";
import { calculoDiferenciaIVA } from "../motor"; // Asegurar que está correctamente exportado desde motor.ts

// Agrupar líneas de ticket por tipo de IVA y calcular el total de cada grupo
const calcularIVAporTipo = (lineas: ResultadoLineaTicket[]): Record<TipoIva, number> => {
    return lineas.reduce((acumulado, linea) => {
        const diferenciaIVA = calculoDiferenciaIVA(linea.precioConIva, linea.precioSinIva); // CORREGIDO: `precionSinIva` → `precioSinIva`
        acumulado[linea.tipoIva] = (acumulado[linea.tipoIva] || 0) + diferenciaIVA;
        return acumulado;
    }, {} as Record<TipoIva, number>);
};

// Convertir el objeto en un array estructurado con tipo y cuantía
const transformarIVAaArray = (ivaPorTipo: Record<TipoIva, number>): TotalPorTipoIva[] => {
    return Object.entries(ivaPorTipo).map(([tipo, cuantia]) => ({
        tipoIva: tipo as TipoIva,
        cuantia: Number(cuantia.toFixed(2)) // Asegurar precisión decimal
    }));
};

// Función principal que devuelve el desglose de IVA en formato requerido
export const obtenerDesgloseIVA = (lineas: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
    const ivaPorTipo = calcularIVAporTipo(lineas);
    return transformarIVAaArray(ivaPorTipo);
};
