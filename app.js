
/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';*/ // una manera tambien para colocar un titulo en el h1 del HTML 

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un  numero del 1 al 10, por favor';*/ // una manera para añadir texto en el p

let numeroSecreto = 0;// variable donde se guarda el numero secreto generado 
let intentos =0; // variable donde se almacenan los intentos 
console.log (numeroSecreto); // muetra el numero secreto generado en la consola 
let listaNumerosSorteados = []; // una rreglo o lista de los numeros sorteados 
let numeroMaximo = 10;

// funcion que asigna el texto a cada elemento o cada caja elemento 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // variable que almacena el elemento seleccionade del HTML 
    elementoHTML.innerHTML = texto; /*manera mas eficiente para colocar texto a cualquier elemento del HTML ya sea el h1 como p u otros, encamsulandolo dentro 
    de de una funcion con el objetivo de demostrar mas orden y facilidad */
    return; 
}

// funcion que revisa y cmpara el numero ingresado por el usuario contra el numero secreto antes generado 
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);// variable que resive el numero ingresado, debe ser un numero y lo evalua 

    /*console.log (typeof(numeroUsuario));
    console.log (numeroUsuario);
    console.log (typeof(numeroSecreto));
    console.log (numeroSecreto);
    console.log (numeroUsuario === numeroSecreto);// Todos estos console.log nos indican en la consola los tipos de datos*/ 
    // condicion donde compara los dos numeros y asigna un texto dependiendo si acerto, si es menor o mayor al numero ingresado y en cuantos intesntos lo acerto

      if (numeroUsuario === numeroSecreto) {
   asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'un intento' : 'intentos'}`);
   document.getElementById('reiniciar').removeAttribute('disabled');
}
    else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos++; // contador de intentos iniciando en uno 
        limpiarcaja(); // llamado de la funcion para limpiar la caja 
    }
    return; // buena practica 
}

// funcion que realiza el limpiado de la caja cada vez que el usuario ingresa un numero y no acierta 
function limpiarcaja(){
    document.querySelector('#valorUsuario').value = ''; /*linea para limpiar la caja cuando el usuario no acierte el numero, el # es para utilizar querySelector
    para llamar un Id o el valor del elemento y no solo el elemento como tal*/
}

// funcion donde se genera el numero random entre 1 y 10 
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; // variable con la funcion que genera el numero aleatorio entre 1 y 10 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya generamos todos los nuemro entre 1 y 10 
    if ( listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se generaron todos los numeros posibles'); // asigna texto al elemento p segun la co ndicion anterior 
    } else {
    // si el numeroGenerado esta incluido en la lista 
        // esto es un if anidado, un if dentro de otro if 
        if (listaNumerosSorteados.includes(numeroGenerado)){  //condicion que genera un numero y se guarda en la lista y ademas revisas si ya esta dicho numero o no
           return generarNumeroSecreto();  // la funcnion vuelve y se llama para que genere un numero nuevo si el anterior generado ya estaba en la lista 
        }else {  //condicion donde este numero no esta en la lista y lo envia al final de la misma 
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;  //retorna dicho numero generado que no estaba en la lista 
        } 
    }
}

function condicionesIniciales (){
    asignarTextoElemento('h1','juego del numero secerto'); // funcion que asigna dicho tecto a cada elemento que se le indique (h1 titulo)
    asignarTextoElemento('p',`Indica un  numero del 1 al ${numeroMaximo}, por favor`); // funcion que asigna dicho tecto a cada elemento que se le indique (p texto encima de la caja donde el usuario ingresa el numero )
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

// funcion que reinicia el juego 
function reiniciarJuego(){
    limpiarcaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); /* sirve para modificar el disabled que esta en el HTML y apague y encienda el cuadro de
    reiniciar juego */
    
}

condicionesIniciales();


function intentoDeSaludar() { // parte que yo hice para probar lo aprendido 
    alert ("Que hizo my G")
    return;
}




