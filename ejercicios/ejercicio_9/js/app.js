function verificarPassword(){
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;
    const resultado = document.getElementById("resultado");

    if(pass1 === "" || pass2 === ""){
        resultado.textContent = alert("Por favor, completa ambos campos");
        resultado.style.color = "orange";
    }else if(pass1 === pass2){
        resultado.textContent = alert("Las contraseñas coinciden");
        resultado.style.color = "green";
    }else{
        resultado.textContent = alert("Las contraseñas no coinciden");
        resultado.style.color = "red";
    }
}