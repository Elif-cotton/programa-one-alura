let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);//objeto
    elementoHTML.innerHTML = texto;
    return;  //buena práctica
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}.
        El número secreto era ${numeroSecreto}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return ;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    return Math.floor((Math.random()*10))+1;
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    //generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //resetear intentos
    intentos=1;

}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //resetear intentos
    condicionesInciales();
    //desabilitar el botón de juego nuevo
    document.getElementById('reiniciar').setAttribute('disabled','true');
    
}

condicionesInciales();

