//console.log("conexion correcta")

window.addEventListener('load', validar);
var vec = [];

function validar(){
    var btnCargar = document.getElementById('cargar');
    btnCargar.addEventListener('click',cargarArreglo);

    var btnImprimir = document.getElementById('imprimir');
    btnImprimir.addEventListener('click', imprimirArreglo);

    var btnValorAcumulador = document.getElementById('valor_acumulado');
    btnValorAcumulador.addEventListener('click', valorAcumulado);

    var btnMayorDiez = document.getElementById('mayor_diez');
    btnMayorDiez.addEventListener('click',valorMayorDiez);
    
    var btnMayorCincuenta = document.getElementById('mayor_cincuenta');
    btnMayorCincuenta.addEventListener('click',cantidadMayorCincuenta);
}

function cargarArreglo(){
    for(let i = 0;i<8;i++){
        let valor = parseInt(prompt("Ingresar un numero"));
        vec[i] = valor; // cargar el valor en el arreglo
    }
}

function imprimirArreglo(){
    for(let i=0;i<8;i++){
        alert(vec[i]);
    }
}

function valorAcumulado(){
    let acumulador = 0;
    for(let i=0;i<8; i++){
        acumulador += vec[i];
    }
    alert('Valor Acumulado: ' + acumulador);

}

function valorMayorDiez(){
    let acumuladoMayorDiez = 0;
    for(let i=0;i<8;i++){
        if(vec[i]>10){
            acumuladoMayorDiez += vec[i];
        }
    }
    alert('Valores acumulados de los elementos mayores a 10: ' + acumuladoMayorDiez);

}

function cantidadMayorCincuenta(){
    let cantidadMayorCincuenta = 0;
    for(let i=0;i<8;i++){
        if(vec[i]>50){
            cantidadMayorCincuenta++;
        }
    }
    alert('Cantidad de valores mayores a 50: ' + cantidadMayorCincuenta);
}


