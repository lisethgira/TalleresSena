function muestraOculta(){
    //Obtener el ID del elemento
    var id = this.id;
    id = id.split('_');
    id = id[1];
    //Obtener el elemento a mostrar
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('enlace_'+id);

    //Mostrar u ocultar el elemento
    if(elemento.style.display == "" || elemento.style.display == "block"){
        elemento.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    }else{
        elemento.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    }
}

window.onload = function(){
    document.getElementById('enlace_1').onclick = muestraOculta;
    document.getElementById('enlace_2').onclick = muestraOculta;
    document.getElementById('enlace_3').onclick = muestraOculta;
}