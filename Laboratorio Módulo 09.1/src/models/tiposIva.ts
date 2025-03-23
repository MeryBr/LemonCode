export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

export const IVAS: Record<TipoIva, number> = {
  general: 21,
  reducido: 10,
  superreducidoA: 5,
  superreducidoB: 4,
  superreducidoC: 0,
  sinIva: 0,
};
