//DEFINIMOS ALGUNAS VARIABLES
const inputCantjuegos = document.querySelector("#juegos");
const botonStart = document.querySelector("button");
const resultado = document.querySelector("#resultado");
const resultadoGanador = document.querySelector("#ganadorPerdedor");

//DEFINIMOS INTERACCIÓN DEL NAVEGADOR CON EL USUARIO
botonStart.addEventListener("click", () => {
    const { value: cantidadDejuegos } = inputCantjuegos;
    console.log(cantidadDejuegos);
    validarCantidadjuegos(cantidadDejuegos);

//DEFINIMOS CANTIDAD DE JUEGOS Y OPCIONES A ESCOGER
var puntajeTotal = 0;  
    for (let i = 0; i < cantidadDejuegos; i++) {
        const opcionDeusuario = prompt("Escriba su opción (Piedra, Papel o Tijera)").toLowerCase();
        const opcionDemaquina = Math.floor(Math.random() * 3);
        const respuestaDeMaquina = transformaropcionDemaquina(opcionDemaquina);
        const resultJugada = compararJugada(opcionDeusuario,respuestaDeMaquina);
        
    if (resultJugada == 1) {
        puntajeTotal += 1;
    }   else if (resultJugada == -1) {
        puntajeTotal -= 1;
    }
    resultado.innerHTML += `<p>Tú jugaste <span class="text-success text-uppercase">${opcionDeusuario}</span> y la máquina jugó <span class="text-primary text-uppercase">${respuestaDeMaquina}</span></p>`;
    }

    if (puntajeTotal == 0) {
        resultadoGanador.innerHTML = "Empataste";    
    } else if (puntajeTotal < 0) {
        resultadoGanador.innerHTML = "Perdiste";    
    } else if (puntajeTotal > 0) {
        resultadoGanador.innerHTML = "Ganaste"; 
    }
});

//VALIDAR CANTIDAD DE JUEGOS Y QUE SEAN ENTEROS POSITIVOS
function validarCantidadjuegos(n) {
    if (n <= 0 || isNaN(n)) {
    alert("¡¡Advertencia!! Acepta valores mayor o igual a 1 (Considerar número entero)");
    }
}

//VALIDAR PARA TRANSFORMAR OPCIONES QUE TIENE LA MAQUINA
function transformaropcionDemaquina(n) {
    if (n == 0) return "piedra";
    if (n == 1) return "papel";
    if (n == 2) return "tijera";
}

//VALIDAR COMBINACIONES TOTALES QUE SE TIENE PARA GANAR O PERDER CON LA MAQUINA
function compararJugada(n1, n2) {
    let punto = 0;
    if (n1 == n2) return punto;
    if (n1 == "piedra" && n2 == "tijera") return ++punto;
    if (n1 == "piedra" && n2 == "papel") return --punto;
    if (n1 == "papel" && n2 == "piedra") return ++punto;
    if (n1 == "papel" && n2 == "tijera") return --punto;
    if (n1 == "tijera" && n2 == "papel") return ++punto;
    if (n1 == "tijera" && n2 == "piedra") return --punto;
}