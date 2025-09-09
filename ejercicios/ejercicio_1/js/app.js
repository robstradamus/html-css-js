window.addEventListener('load',cargar)

var nombre = prompt('Ingrese su nombre');
var apellido = prompt('Ingrese su Apellido');
var telefono = parseFloat(prompt('Ingrese su numero de Telefono'));
var email = prompt('Ingrese su E-mail');

function cargar(){
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('telefono').value = telefono;
    document.getElementById('email').value = email;
}
