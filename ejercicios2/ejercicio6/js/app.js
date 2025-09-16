const precios = {
    "Vaio Intel Core i3": 16000,
    "Lenovo Intel Core i7": 20000,
    "Compaq Intel Cre i7": 15000,
    "RCA Intel Core i3": 8000,
    "BGH Core i7": 16000,
    "Impresora HP": 1400,
    "Tablet Philco": 4700,
    "Tablet Huawei": 5400,
};

//Actualiza el Precio Unitario al seleccionar articulo
function actualizarPrecio(selectElement, index){
    const articulo = selectElement.value;
    const precioInput = document.getElementById(`precio${index}`);
    precioInput.value = precios[articulo] || '';
}

//Calcular el subtotal de un articulo
function calcularSubtotal(index){
    const precio = parseFloat(document.getElementById(`precio${index}`).value);
    const cantidad = parseInt(document.getElementById(`cantidad${index}`).value);
    const subtotalInput = document.getElementById(`subtotal${index}`);
    
    if(!isNaN(precio) && !isNaN(cantidad)){
        subtotalInput.value = precio * cantidad;
    }else{
        subtotalInput.value = '';
    }
}

//Calcular el total de la venta
function calcularTotal(){
    let total = 0;
    for(let i=0;i<3;i++){
        const subtotal = parseFloat(document.getElementById(`subtotal${i}`).value);
        if(!isNaN(subtotal)){
            total += subtotal;
        }
    }
    document.getElementById('total').value = total;
}

//Funcion para resetear todos los campos
function resetear(){
    for(let i=0;i<3;i++){
        document.querySelectorAll('select')[i].selectedIndex = 0;
        document.getElementById(`precio${i}`).value = '';
        document.getElementById(`cantidad${i}`).value = '';
        document.getElementById(`subtotal${i}`).value = '';
    }
    document.getElementById('total').value = '';
}