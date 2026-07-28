const divBoton = document.querySelector(".boton-personalizado");
 
divBoton.addEventListener("focus", () => {
  divBoton.classList.add("enfocado");
});
 
divBoton.addEventListener("blur", () => {
  divBoton.classList.remove("enfocado");
});
