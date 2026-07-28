const caja = document.getElementById("caja");
 
// Añadir una clase



caja.classList.add("resaltado");
 
// Se pueden añadir varias a la vez
caja.classList.add("resaltado", "sombra");
caja.classList.remove("resaltado");
 
// También admite varios argumentos
caja.classList.remove("resaltado", "sombra");
btnTema.addEventListener("click", () => {
  // Si "modo-oscuro" existe en <body>, la quita; si no, la agrega
  document.body.classList.toggle("modo-oscuro");
});
if (document.body.classList.contains("modo-oscuro")) {
  console.log("El modo oscuro está activo");
} else {
  console.log("El modo oscuro está desactivado");
}
