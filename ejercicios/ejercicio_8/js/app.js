window.addEventListener('load', function(){

    function eventImages(idImg, nuevaImg){
        var img = document.getElementById(idImg);
        var imgOriginal = img.src;

        img.addEventListener('dblclick', () =>{
            img.src = nuevaImg;
        });

        img.addEventListener('mouseout', () =>{
            img.src = imgOriginal;
        });
    }
    // Cargar las imagenes por direccion de ruta
    eventImages('img-rg', '/EJERCICIO 8/img/rg-2.jpg');
    eventImages('img-ush', '/EJERCICIO 8//img/ush-2.jpg');
    eventImages('img-th', '/EJERCICIO 8/img/tolhuin-1.jpg');
    
    //Evento para titulo
    function eventTitle(idTitle){
        var title = document.getElementById(idTitle);

        var colorOriginal = getComputedStyle(title).color;
        var sizeOriginal = getComputedStyle(title).fontSize;

        title.addEventListener('mouseover', () => {
            title.style.color = 'blue';
            title.style.fontSize = '2em';
        });

        title.addEventListener('mouseout', () => {
            title.style.color = colorOriginal;
            title.style.fontSize = sizeOriginal;
        });
    }
    //Aplicar los cambios
    eventTitle('title-rg');
    eventTitle('title-ush');    
    eventTitle('title-th');
});