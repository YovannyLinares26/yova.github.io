/*const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";

document.querySelector("html").onclick = function () {
  alert("¡Ouch! ¡Deja de pincharme!");};


let nombreDeLaVariable = "Bob";

/*console.log(nombreDeLaVariable);

nombreDeLaVariable;

let miVariable = [1,'Bob','Steve',10];
console.log(miVariable[0], miVariable[1])*/

let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "./images/5dec47012d257.jpeg") {
    miImage.setAttribute("src", "./images/download.jpeg");
  } else {
    miImage.setAttribute("src", "./images/5dec47012d257.jpeg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
  }
}
/*function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Mozilla es genial," + miNombre;
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}*/

miBoton.onclick = function () {
  estableceNombreUsuario();
};

