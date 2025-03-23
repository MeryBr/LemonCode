import { procesarIBAN } from "./iban.helpers";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form") as HTMLFormElement;
  const input = document.querySelector("#iban") as HTMLInputElement;
  const resultado = document.querySelector("#resultado") as HTMLDivElement;
  const botonBorrar = document.querySelector("#borrar") as HTMLButtonElement;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!input.value.trim()) {
      resultado.innerHTML = "⚠️ Introduce un IBAN para validar.";
      resultado.classList.remove("ocultar");
      return;
    }

    const mensaje = procesarIBAN(input.value);
    resultado.innerHTML = mensaje;
    resultado.classList.remove("ocultar");
    resultado.classList.add("caja-iban");
  });

  botonBorrar.addEventListener("click", () => {
    input.value = "";
    resultado.innerHTML = "";
    resultado.classList.add("ocultar");
    resultado.classList.remove("caja-iban");
  });
  
});
