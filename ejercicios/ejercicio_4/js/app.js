window.addEventListener('load', function(){
    
    function mostrarCaracteristicas(id){
        var productos = {
            img1: "Batidora: 500W, 5 velocidades",
            img2: "Cafetera: 1.2L, autoapagado",
            img3: "Cocina: 4 hornillas, vidrio templado",
            img4: "Freidora: 3.5L, temperatura ajustable",
            img5: "Heladera: 300L, no frost",
            img6: "Horno: 30L, termostato ajustable",
            img7: "Lavarropas: 8kg, 12 programas",
            img8: "Licuadora: 700W, vaso de vidrio",
            img9: "Pava: 1L, autoapagado",
            img10: "Plancha: 1200W, vapor ajustable"
        };
        var elemento = document.getElementById(id);
        if(elemento){ 
            elemento.title =  productos[id];
        };
    };
    function mostrarPrecios(id){
        var precios = {
            img1: "$120.99 $USD",
            img2: "$89.99 $USD",
            img3: "$350.50 $USD",
            img4: "$150.00 $USD",
            img5: "$799.99 $USD",
            img6: "$220.75 $USD",
            img7: "$599.50 $USD",
            img8: "$65.99 $USD",
            img9: "$45.25 $USD",
            img10: "$75.30 $USD"
        }; 
        alert('Precio:' + precios[id]);
    }
    function descuentos(id){
        var conDescuentos = ["img1", "img4", "img6", "img10"];
        if(conDescuentos.includes(id)){
            alert('Este producto tiene Descuento');
        }else{
            alert('Este producto no tiene descuentos');
        }
    };
    for(let i=1;i<=10;i++){
        var imgID = "img" + i;
        var img = document.getElementById(imgID);
        if(img){
            img.onmouseover = function(){mostrarCaracteristicas(this.id);};
            img.onmouseout = function(){mostrarPrecios(this.id);};
            img.onclick = function(){descuentos(this.id);};
        }; 
    };
});