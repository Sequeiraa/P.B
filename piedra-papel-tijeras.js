//piedra 1 , papel 2 o tijera 3

let pc = 0
let jugador = 0
let victorias = 0
let derrotas = 0

//Funcion para sacar un numero del 1 al 3
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

//funcion para mostrar la eleccion
function eleccion(jugada){
    let resultado = ""

    if(jugada == 1) {
        resultado = "piedra 🪨"
    } else if(jugada == 2) {
        resultado = "papel 📄"
    } else if(jugada == 3) {
        resultado = "tijera ✂️"
    } else{
        resultado = "mala eleccion"
    }
    return resultado
}

//funcion para duelo
function duelo(jugador, pc){
    let resultadoDuelo = ""
    if(jugador == pc) { 
        resultadoDuelo = "empate"
    } else if(jugador == 1 && pc == 3 || jugador == 3 && pc == 2 || jugador == 2 && pc == 1) {
        victorias = victorias + 1;
        resultadoDuelo = "ganaste"
    } else {
        derrotas = derrotas + 1
        resultadoDuelo = "perdiste"
    }
    return resultadoDuelo
}

//ciclo para mejor de 3
while(victorias < 3 && derrotas < 3) {

    pc = aleatorio(1, 3)
    jugador = prompt("Piedra 1 , papel 2 o tijera 3")
    
        //Muestra la eleccion de ambos(pc y jugador)
    alert("pc elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))
    
    //es hora del duelo
    alert(duelo(jugador,pc))
}
alert("ganaste " + victorias + " veces y perdiste " + derrotas +" veces")