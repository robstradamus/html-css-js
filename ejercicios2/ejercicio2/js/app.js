function calcularEstado(){
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const asistencia = parseInt(document.getElementById('asistencia'));

    const estadoAcademico = document.getElementById('estado');

    if(isNaN(parcial1) || isNaN(parcial2)){
        estadoAcademico.value = 'Ingrese ambas notas';
        return;
    }

    const promedio = (parcial1 + parcial2) / 2;

    let estado = '';

    if(asistencia<70){
        estado = 'Libre';
    }else if(promedio<6){
        estado = 'Desaprobado';
    }else{
        estado = 'Regular';
    }

    estadoAcademico.value = estado;
}

function resetear(){
    document.getElementById('parcial1').value = '';
    document.getElementById('parcial2').value = '';
    document.getElementById('asistencia').value = '';
    document.getElementById('estado').value = '';
}