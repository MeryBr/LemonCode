import "./style.css";

// Valores
console.log("Coste total de la cena: 120");
console.log("Coste de bebidas: 18");
console.log("Total amigos: 6");

// Definición de las variables
const totalCena = 120;
const bebidas = 18;
const amigos = 6;

// Calculamos el coste de la cena
const costeSinBebidas = totalCena - bebidas;
const costePorAmigo = costeSinBebidas / amigos;

// Resultado
console.log(
  "Cada amigo debe pagar: ${costePorAmigo.toFixed(2)} € por la cena, ya que a las bebidas las invito yo."
);
