import "./style.css";

let generoPopRock : string = "🎵 Pop Rock";
let generoRock : string = "🎸 Rock";
let generoHardRock : string = "🤘 Hard Rock";
let generoClasica : string = "🎼 Clásica";

interface MusicBand{
  name: string;
  yearFounded: number;
  isActive: boolean;
  genre: string;
}

const musicBand1: MusicBand = { name: "The Beatles", yearFounded: 1960, isActive: true, genre: generoPopRock };
const musicBand2: MusicBand = { name: "Queen", yearFounded: 1970, isActive: false, genre: generoRock };
const musicBand3: MusicBand = { name: "AC DC", yearFounded: 1973, isActive: true, genre: generoHardRock };
const musicBand4: MusicBand = { name: "Ludwig van Beethoven", yearFounded: 1770, isActive: false, genre: generoClasica };
const musicBand5: MusicBand = { name: "The Rolling Stones", yearFounded: 1962, isActive: true, genre: generoRock };


console.log(`%c${musicBand1.name}`, "font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${musicBand1.yearFounded} del género musical (${musicBand1.genre}). ¿Están activos? ${musicBand1.isActive ? 'Sí, activos' : 'No, no activos'}`);

console.log(`%c${musicBand2.name}`, "font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${musicBand2.yearFounded} del género musical (${musicBand2.genre}). ¿Están activos? ${musicBand2.isActive ? 'Sí, activos' : 'No, no activos'}`);

console.log(`%c${musicBand3.name}`, "font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${musicBand3.yearFounded} del género musical (${musicBand3.genre}). ¿Están activos? ${musicBand3.isActive ? 'Sí, activos' : 'No, no activos'}`);

console.log(`%c${musicBand4.name}`, "font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${musicBand4.yearFounded} del género musical (${musicBand4.genre}). ¿Están activos? ${musicBand4.isActive ? 'Sí, activos' : 'No, no activos'}`);

console.log(`%c${musicBand5.name}`, "font-weight:bold;font-size:20px;background-color:green;");
console.log(`Fundado en ${musicBand5.yearFounded} del género musical (${musicBand5.genre}). ¿Están activos? ${musicBand5.isActive ? 'Sí, activos' : 'No, no activos'}`);