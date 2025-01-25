// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creacion de la arreglo de nombres de los amigos
let listadeaAmigos = [];
let inputAmigo = document.getElementById("amigo");
let li = document.getElementById("listaAmigos");
let resutado = document.getElementById("resultado");
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
    limpiesa();
    PintarListaAmigos();
  }
  console.log(listadeaAmigos);
}
//limpiar la entrada
function limpiesa() {
  inputAmigo.value = "";
  li.innerHTML = "";
  resutado.innerHTML = "";
}
function PintarListaAmigos() {
  for (let i = 0; i < listadeaAmigos.length; i++) {
    const element = listadeaAmigos[i];
    pintar(element, li);
  }
}
function validarListaDeAmigos() {
  if (listadeaAmigos.length == 0) {
    alert("no hay amigos para sortear");
    return false;
  }
  return true;
}

function generarNUmoeroRamodom() {
  let numero = Math.floor(Math.random() * listadeaAmigos.length);
  return numero;
}
function sortearAmigo() {
  if (validarListaDeAmigos()) {
    let dato = listadeaAmigos[generarNUmoeroRamodom()];
    limpiesa();
    pintar(`Tu amigo secreto es = ${dato}`, resutado);
  }
}

function pintar(nombre, li) {
  li.innerHTML += `<li>${nombre}<li>`;
}
