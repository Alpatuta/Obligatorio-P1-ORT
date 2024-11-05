// Va todo lo que va a interactuar con el HTML

let s = new Sistema();

function ocultarTodo(){
    document.querySelector("#sRegistro").style.display = "none";
    document.querySelector("#sReservarDestinos").style.display = "none";
    document.querySelector("#sAgregarDestinos").style.display = "none";
    document.querySelector("#sAdministrarDestino").style.display = "none";
    document.querySelector("#sExplorar-destinos").style.display = "none";
    document.querySelector("#sHistorial-reservas").style.display = "none";
    document.querySelector("#sDestinos-en-oferta").style.display = "none";
    document.querySelector("#sManipular-reservas").style.display = "none";
    document.querySelector("#sInforme-ganancias").style.display = "none";
}

ocultarTodo();