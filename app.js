let amigos = [];

/* Agrega amigos y valida que el campo NO esté vacío*/
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre");
  } else if (amigos.includes(nombreAmigo)) { // Agregamos la validación de duplicados aquí
    alert("Este nombre ya ha sido agregado.");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    muestraListaAmigos();
  }
}

/*Muestra listado de amigos ingresados en una lista UL */
function muestraListaAmigos() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/* Realiza sorteo y muestra al amigo sorteado, validando que la lista no esté vacía*/
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte al menos un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
  // Comprueba si la tecla presionada es 'Enter' (código 13)
document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    agregarAmigo();
  }

});
//reiniciar sorteo
