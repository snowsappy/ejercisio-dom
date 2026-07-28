const foto = document.getElementById("foto");
const campo = document.getElementById("campoNombre");

foto.setAttribute("src", "gatos.jpg");
foto.setAttribute("alt", "Un gato");


const textoAlternativo = foto.getAttribute("alt");
console.log(textoAlternativo); // "Un gato"
campo.removeAttribute("readonly");
if (campo.hasAttribute("disabled")) {
  console.log("El campo está deshabilitado");
}

const tarea = document.querySelector(".tarea");
 
// Leer valores (siempre llegan como string)
console.log(tarea.dataset.id);          // "42"
console.log(tarea.dataset.prioridad);   // "alta"
 
// data-completada -> dataset.completada
console.log(tarea.dataset.completada);  // "false"
 
// Modificar o crear un nuevo data-*
tarea.dataset.completada = "true";
tarea.dataset.fechaLimite = "2026-08-01"; // crea data-fecha-limite
