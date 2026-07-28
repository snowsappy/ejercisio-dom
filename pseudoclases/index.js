const tarjeta = document.querySelector(".tarjeta");
 
// mouseenter/mouseleave no burbujean, por eso son mejores que
// mouseover/mouseout para emular hover en un solo elemento
tarjeta.addEventListener("mouseenter", () => {
  tarjeta.classList.add("hover-emulado");
});
 
tarjeta.addEventListener("mouseleave", () => {
  tarjeta.classList.remove("hover-emulado");
});


 
tarjeta.addEventListener("mousedown", () => {
  tarjeta.classList.add("presionado");
});
 
tarjeta.addEventListener("mouseup", () => {
  tarjeta.classList.remove("presionado");
});

