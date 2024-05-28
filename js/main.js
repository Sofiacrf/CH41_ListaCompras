// El código va aquí ->
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let arletaValidacion = document.getElementById("alertValidaciones");
let arletaValidacionesTexto = document.getElementById("alertValidacionesTexto");

function ValidarCantidad() {
  if (txtNumber.value.length == 0) {
    return false;
  }
  return true;
}

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  arletaValidacionesTexto.innerHTML = " ";
  alertValidaciones.style.display = "none";

  if (txtNombre.value.length < 3) {
    arletaValidacionesTexto.innerHTML =
      "El <strong>Nombre</strong> no es correcto";
    alertValidaciones.style.display = "block";
    txtNombre.style.border = "solid red medium";
  }

  if (!ValidarCantidad()) {
    arletaValidacionesTexto.innerHTML =
      "El <strong>Numero</strong> no es correcto";
    alertValidaciones.style.display = "block";
    txtNumber.style.border = "solid red medium";
  }
});
btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.value = " ";
  txtNumber.value = " ";
});
