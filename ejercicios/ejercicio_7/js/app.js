window.addEventListener('load',validarBotones);

var arreglo1 = [];
var arreglo2 = [];
var sumatoria = [];

function validarBotones(){
    var btnIngresarArreglo = document.getElementById('arreglo');
    btnIngresarArreglo.addEventListener('click',cargarDatos);

    var btnImprimirArreglo = document.getElementById('imprimir');
    btnImprimirArreglo.addEventListener('click', imprimirArreglo);

    var btnOrdenar = document.getElementById('ordenar');
    btnOrdenar.addEventListener('click', ordenarArreglo);

    document.getElementById('sumar').addEventListener('click', btnSumar);
}
function cargarDatos(){
    let n = parseInt(prompt('Introduce el tamaño de los Arreglos'));
    
    alert('Cargar el primer arreglo');
    arreglo1 = cargarArreglo(n);

    alert('Cargar el segundo arreglo');
    arreglo2  = cargarArreglo(n);
}

function cargarArreglo(n){
    let arreglo = [];
    for(let i = 0; i<n;i++){
        let valor = parseInt(prompt('Ingrese el valor'));
        arreglo.push(valor);
    }
    return arreglo;
}

function imprimirArreglo(){
    alert('Primer arreglo: ' + arreglo1.join(', '));
    alert('Segundo arrelgo: ' + arreglo2.join(', '));
}
function ordenarArreglo(){
    let orden1 = arreglo1.sort((a, b) => a -b);
    let orden2 = arreglo2.sort((a, b) => a -b);
    
    alert('Primer arreglo ordenado de menor a mayor: ' + orden1.join(', '));
    alert('Segundo arreglo ordenado de menor a mayor: ' + orden2.join(', '))
}
function btnSumar(){
    if(arreglo1.length === 0 || arreglo2.length === 0){
        alert('Por favor, primero cargue ambos arreglos');
        return;
    }
    sumatoria = sumarArreglo(arreglo1,arreglo2);
    alert('La suma de ambos vectores es: ' + sumatoria);
}

function sumarArreglo(arr1, arr2){
    let resultado = [];
    for(let i=0;i<arr1.length;i++){
        resultado.push(arr1[i] + arr2[i]);
    }
    return resultado;
}