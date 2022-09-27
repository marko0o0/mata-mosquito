var altura = 0;
var ancho = 0;
var vidas = 1;
var tiempo = 30;

var crearMosquitoTiempo = 0;

var nivel = window.location.search;
nivel = nivel.replace("?", "");
if (nivel === "normal") {
    // 1500 milisegundo
    crearMosquitoTiempo = 1500;
}
else if (nivel === "dificil") {
    // 1000 milisegundo
    crearMosquitoTiempo = 1000;
}
else if (nivel === "chucknorris") {
    // 750 milisegundo
    crearMosquitoTiempo = 750;
}


function ajustarTamanoDelJuego() {
    altura = window.innerHeight;
    ancho = window.innerWidth;

    console.log(ancho, altura)
}

ajustarTamanoDelJuego();

var reloj = setInterval(function () {
    tiempo -= 1;
    if (tiempo < 0) {
        clearInterval(reloj);
        clearInterval(crearMosquito);

        window.location.href = "vitoria.html";
    } else {
        document.getElementById("reloj").innerHTML = tiempo;

    }
}, 1000);

function posicaoRandomica() {
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();

        if (vidas > 3) {
            window.location.href = "fin_del_juego.html";
        } else {
            document.getElementById("v" + vidas).src = "img/corazon_vacio.png";
            vidas++;
        }
    }
    var posicionX = Math.floor(Math.random() * ancho) - 90;
    var posicionY = Math.floor(Math.random() * altura) - 90;

    posicionX = posicionX < 0 ? 0 : posicionX
    posicionY = posicionY < 0 ? 0 : posicionY

    // crear o elemento html
    var mosquito = document.createElement("img")
    mosquito.src = "img/mosquito.png";
    mosquito.className = tamanoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = posicionX + "px"
    mosquito.style.top = posicionY + "px"
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove();
    };

    document.body.appendChild(mosquito);
}

function tamanoAleatorio() {
    var clase = Math.floor(Math.random() * 3);

    switch (clase) {
        case 0:
            return "mosquito1";

        case 1:
            return "mosquito2";

        case 2:
            return "mosquito3";
    }
}

function ladoAleatorio() {
    var clase = Math.floor(Math.random() * 2);

    switch (clase) {
        case 0:
            return "ladoA";
        case 1:
            return "ladoB";
    }
}