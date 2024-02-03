let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

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
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';
    
}

function generarNumeroSecreto() {
    return Math.floor((Math.random()*10))+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
