// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creacion de la arreglo de nombres de los amigos
let listadeaAmigos = [];
let inputAmigo = document.getElementById("amigo");
//capturar el valor
function caturarValor() {
  const entradaAmigo = inputAmigo.value;
  return entradaAmigo;
}

//funcion de validacion
function valdiacionDeDato(nombre) {
  if (nombre === "") {
    alert("Porfavor ingresar un nombre");
    return false;
  }
  return true;
}
//agregar a valor a la lista
function agregarAmigo() {
  let valorCapturado = caturarValor();
  if (valdiacionDeDato(valorCapturado)) {
    listadeaAmigos.push(valorCapturado);
    limpiarLaEntrada();
  }
  console.log(listadeaAmigos);
}
//limpiar la entrada
function limpiarLaEntrada() {
  inputAmigo.value = "";
}
