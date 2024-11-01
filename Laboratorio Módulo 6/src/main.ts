import { Motor } from './motor';
import { UI } from './ui';

const motor = new Motor();
const ui = new UI(motor);
window.onload = () => ui.inicializarJuego();
