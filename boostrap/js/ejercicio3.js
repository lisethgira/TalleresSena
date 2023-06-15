Number.prototype.toString = function(){
    if(this < 10){
        return '0' + this;
    }else{
        return this;
    }
}

var peticion = null;
var intervalo = null;
var noticias = [];
var numeroElemento = null;

window.onload = function(){
    intervalo= setInterval(descargaNoticia,1000);
    document.getElementById('detener').onclick = detener;
    document.getElementById('anterior').onclick = anterior;
    document.getElementById('siguiente').onclick = siguiente;
}

function descargaNoticia(){
    if(peticion == null){
        if(window.XMLHttpRequest){
            peticion = new XMLHttpRequest();
        }else{
            peticion = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }else{
      peticion.abort();  
    }

    peticion.onreadystatechange = procesaNoticia;

    peticion.open ('GET', 'http://localhost/RUTA_HASTA_ARCHIVO/generaContenidos.php'+'?nocache='+Math.random(),true);
    peticion.send (null);
}

function procesaNoticia(){
    if(peticion.readyState == 4){
        if(peticion.status == 200){
            var fechaHora = new Date();
            var hora = fechaHora.getHours().toString() + ":" + fechaHora.getMinutes().toString() + ":" + fechaHora.getSeconds().toString();
            noticias.push({
                hora: hora,
                titular: peticion.responseText
            });
            muestraNoticia(noticias[noticias.length - 1]);
        }
    }
}

function detener(){
    clearInterval(intervalo);
    this.value = 'Iniciar';
    this.onclick = iniciar;
}

function iniciar(){
    intervalo= setInterval(descargaNoticia,1000);
    this.value = 'Detener';
    this.onclick = detener;

    numeroElemento = null;
}

function anterior(){
    var detener = document.getElementById('detener');
    clearInterval(intervalo);
    detener.value = 'Iniciar'
    detener.onclick = iniciar;

    if(numeroElemento == null){
        numeroElemento = noticias.length - 1;
    }

    if(numeroElemento > 0){
        numeroElemento--;
    }

    var noticia = noticias [numeroElemento];
    muestraNoticia(noticia);
}

function siguiente(){
    var detener = document.getElementById('detener');
    clearInterval(intervalo);
    detener.value = 'Iniciar'
    detener.onclick = iniciar;

    if(numeroElemento == null){
        numeroElemento = noticias.length - 1;
    }

    if(numeroElemento < noticias.length -1){
        numeroElemento++;
    }

    var noticia = noticias [numeroElemento];
    muestraNoticia(noticia);
}

function muestraNoticia(noticia){
    var ticker = document.getElementById('ticker');
    ticker.innerHTML = "<strong>"+ noticia.hora + "</strong>" + noticia.titular;
    ticker.style.backgroundColor = '#FFFF99';
    setTimeout(limpiaTicker, 300);
}

function limpiaTicker(){
    var ticker = document.getElementById('ticker');
    ticker.style.backgroundColor = '#FAFAFA';
}