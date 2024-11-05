// Va todo lo que va a interactuar con el HTML

// Sistema

let s = new Sistema();

// Ocultar todos

function ocultarTodo(){
    // document.querySelector("#sRegistro").style.display = "none";
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

// mostrar un id específico
function mostrar (id) {
    document.querySelector("#" + id).style.display = "block";
}

// ocultar un id específico

function ocultar (id){
    document.querySelector("#" + id).style.display = "none";
}

// Funciones relacionadas al cliente 

document.querySelector("#btnRegistro").addEventListener("click", registroUsuario);


function registroUsuario () {
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let nombreUsuario = document.querySelector("#txtUsuario").value;
    let tarjeta = Number(document.querySelector("#txtTarjeta").value);
    let nbrCvc = Number(document.querySelector("#txtCvc").value);
    let mensaje = "";

    /*
    Validaciones:
    -Campos no pueden ser vacios -- aca
    -cvc debe ser numerico de 3 digitos. -- aca 
    -nombre de usuario no se puede repetir - error -- sistema.js
    -tarjeta formato correcto // vemos mañana 
    */ 
   
   if(nombre === "" || apellido === "" || nombreUsuario === "" || tarjeta === "" || nbrCvc === ""){
    mensaje = "Debe completar todos los campos."
   }

   if(nbrCvc.length !== 3 && !isNaN(nbrCvc)){
    mensaje = "Formato de CVC incorrecto."
   }

   document.querySelector("pRegistro").innerHTML = mensaje;

}

//Contraseña: >= a 5, >= 1 mayus, >= 1 min, >= 1 numero - error

function validarContrasenia(){

}


// Funciones relacionadas al admin



// Funciones relacionadas al destino