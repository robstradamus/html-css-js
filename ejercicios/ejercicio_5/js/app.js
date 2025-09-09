window.addEventListener('load',function(){
    document.getElementById('calcular_edad').addEventListener('click', calcularEdad);

    function calcularEdad(){
        var fechaNacimiento = new Date(document.getElementById('f_nacimiento').value);
        var fechaActual = document.getElementById('f_actual').value;
        var fActual = fechaActual ? new Date(fechaActual): new Date();
        
        if(isNaN(fechaNacimiento.getTime())){
            alert('Por favor. Ingrese su fecha de Nacimiento');
            return;
        }
        if(fechaNacimiento > fActual){
            alert('La fecha de Nacimiento no puede ser mayor a la fecha actual');
            return;
        }
        //Calcular edad por mes
        var edad = fActual.getFullYear() - fechaNacimiento.getFullYear();
        
        document.getElementById('mostrar_años').value = edad;
    };
});