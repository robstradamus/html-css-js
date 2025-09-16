function calcularEdad(){
    const inputFecha = document.getElementById('fechaNacimiento').value;

    if(!inputFecha){
        alert('Por favor, selecciona una fecha de nacimiento');
        return;
    }

    const fechaNacimiento = new Date(inputFecha);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNaciemieto = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    //Hacemos el ajuste si aun no ha cumplido años este año
    if(mesActual<mesNaciemieto || (mesActual === mesNaciemieto && diaActual < diaNacimiento)){
        edad --;
    }

    document.getElementById('edad').value = edad + " años";
}