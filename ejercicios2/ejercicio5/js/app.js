function verificarPrestamo(){
    const libro = document.getElementById('libro').value;
    const inputSituacion = document.getElementById('situacion');
    const inputfechaDevolucion = document.getElementById('fechaDevolucion');

    //Limpiar los campos antes de mostrar el nuevo resultado
    inputSituacion.value = "";
    inputfechaDevolucion.value = "";
    
    if(!libro){
        alert("Por favor, selecciona un libro");
        return;
    }

    //Diccionarios de Libros y su respectiva situacion
    const libros = {
        "Divergente":"Solo lectura en la Sala",
        "Frozen":"Prestamo",
        "Sirenas":"Prestamo",
        "Insurgente":"Solo lectura en sala"
    };

    const situacion = libros[libro];
    inputSituacion.value = situacion;

    if(situacion === "Prestamo"){
        const hoy = new Date();
        const fechaDevolucion = new Date(hoy);
        fechaDevolucion.setDate(hoy.getDate()+5);

        const dia = fechaDevolucion.getDate().toString().padStart(2,'0');
        const mes = (fechaDevolucion.getMonth() + 1).toString().padStart(2,'0');
        const anio = fechaDevolucion.getFullYear();

        inputfechaDevolucion.value = `${dia}/${mes}/${anio}`;
    }else{
        inputfechaDevolucion.value = "No aplica";
    }
}