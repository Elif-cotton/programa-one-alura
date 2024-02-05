let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;



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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);

    // si ya sorteamos todos los números
    if( listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {
        //si el numero generado está incluido en la lista puedes jugar
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();    //recursividad  para volver a llamarse y generar otro número
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    //generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //resetear intentos
    intentos=1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //resetear intentos
    condicionesInciales();
    //desabilitar el botón de juego nuevo
    //document.getElementById('reiniciar').setAttribute('disabled','true');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInciales();

