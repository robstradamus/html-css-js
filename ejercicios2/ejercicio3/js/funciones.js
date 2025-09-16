window.addEventListener('load', cargar);

function cargar(){
    var btnEnviar = document.getElementById("enviar");
    btnEnviar.addEventListener('click', cargarSeries);
    var selecReset = document.getElementById('reset')
    selecReset.addEventListener('click', limpiar)
}

function cargarSeries(){
    var selectSerie = parseInt(document.getElementById('series').value);

    switch (selectSerie){
        case 0:
            alert("Seleccione una Serie") 
            break;
        case 1: document.getElementById('dia').value="Lunes";
                document.getElementById('hora').value="18:00";
            break;

        case 2: document.getElementById('dia').value = "Martes";
                document.getElementById('hora').value = "19:00";
                break;

        case 3: document.getElementById('dia').value = "Miercoles";
                document.getElementById('hora').value = "18:00";
                break;

        case 4: document.getElementById('dia').value = "Jueves";
                document.getElementById('hora').value = "20:00";
    }
}
function limpiar(){
    document.getElementById('series').value =0;
    document.getElementById('dia').value ="";
    document.getElementById('hora').value ="";
}