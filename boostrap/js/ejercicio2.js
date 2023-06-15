var READY_STATE_COMPLETE = 4;
var peticion_http = null;

function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function comprobar() {
    var user = document.getElementById("user").value;
    peticion_http = inicializa_xhr();

    if (peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST","http://localhost/ajax/compruebaDisponibilidadXML.php",true);

        peticion_http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        peticion_http.send("user="+user+"&nocache="+Math.random());
    }
    console.log("entree");
}

function procesaRespuesta() {
    if (peticion_http.readyState == READY_STATE_COMPLETE) {
        if (peticion_http.status == 200) {
            var user = document.getElementById("user").value;
            var documento_xml = peticion_http.responseXML;
            var raiz = documento_xml.getElementsByTagName("respuesta")[0];

            var disponible = raiz.getElementsByTagName("disponible")[0].firstChild.nodeValue;

            if (disponible == "si") {
                document.getElementById("disponibilidad").innerHTML = "<p class='text-success'>El nombre elegido ["+user+"], está disponible</p>";
            } else {
                var mensaje = "<p class='text-danger'>No está disponible el nombre elegido ["+user+"]. Puedes probar con las siguientes alternativas.</p>";
                var alternativas = raiz.getElementsByTagName("alternativas")[0];
                var users = alternativas.getElementsByTagName("user");
                mensaje += "<ul>";
                for(var i=0; i<users.length; i++) {
                    mensaje += "<li><a href=\"#\" onclick=\"selecciona('"+users[i].firstChild.nodeValue+"');return false\">"+users[i].firstChild.nodeValue+"<\/a><\/li>";
                }
                mensaje += "<\/ul>";
                document.getElementById("disponibilidad").innerHTML = mensaje;
            }
            console.log(peticion_http.responseText, "entree"); // Agrega esta línea para verificar la respuesta del servidor
        }
    }
}

function selecciona(user) {
    var cuadroUser = document.getElementById("user");
    cuadroUser.value = user;
}

window.onload = function() {
    document.getElementById("comprobar").addEventListener("click", comprobar);    
}