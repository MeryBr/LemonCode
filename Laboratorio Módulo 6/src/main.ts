import { Partida, inicializarPartida } from './model';
import { configurarUI } from './ui';

let partida: Partida = inicializarPartida();
configurarUI(partida);
