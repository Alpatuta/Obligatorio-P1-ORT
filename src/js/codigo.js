// Va todo lo que va a interactuar con el HTML

// Sistema

let s = new Sistema();

// Ocultar todos

function ocultarTodo() {
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
function mostrar(id) {
    document.querySelector("#" + id).style.display = "block";
}

// ocultar un id específico

function ocultar(id) {
    document.querySelector("#" + id).style.display = "none";
}

// Funciones relacionadas al cliente 

document.querySelector("#btnRegistro").addEventListener("click", registroUsuario);


function registroUsuario() {
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let nombreUsuario = document.querySelector("#txtUsuario").value;
    let contrasenia = document.querySelector("#psContrasenia").value;
    let tarjeta = document.querySelector("#txtTarjeta").value;
    let nbrCvc = document.querySelector("#txtCvc").value;
    let mensaje = "";
    let cliente = s.obtenerClienteRegistro(nombreUsuario);
    let admin = s.obtenerAdminRegistro(nombreUsuario);
    validarContrasenia(contrasenia);

    /*
    Validaciones:
    -tarjeta formato correcto // vemos mañana 
    */
   
   if (nombre === "" || apellido === "" || nombreUsuario === "" || tarjeta === "" || nbrCvc === "") {
       mensaje = "Debe completar todos los campos."
    } else if (cliente !== null || admin !== null) {
        mensaje = "El nombre de usuario ya está en uso. ";
    } else if (nbrCvc.length !== 3 || !isNaN(nbrCvc)) {
        mensaje = "Formato de CVC incorrecto."
    } else if (validarContrasenia(contrasenia) === false){
        mensaje = "La contraseña debe tener un mínimo de 5 caracteres e incluir una mayúscula, una minúscula y un número.";
    }else if(tarjeta.length !== 19 || !isNaN(tarjeta)){ // Falta seguir aca

        s.registrarCliente(nombre, apellido, nombreUsuario, contrasenia, tarjeta, nbrCvc);
        mensaje = "Registro exitoso!";
    }


    document.querySelector("#pRegistro").innerHTML = mensaje;

}


function validarContrasenia(pContrasenia) {
    let contadorMayus = 0;
    let contadorMin = 0;
    let contadorNum = 0;
    let contraValida = true;

    for (let i = 0; i < pContrasenia.length; i++) {
        let contra = pContrasenia.charCodeAt(i);

        if (contra >= 65 && contra <= 90) {
            contadorMayus++
        }

        if (contra >= 97 && contra <= 122) {
            contadorMin++;
        }

        if (contra >= 48 && contra <= 57) {
            contadorNum++;
        }
    }

    if (pContrasenia.length < 5 || contadorMayus < 1 || contadorMin < 1 || contadorNum < 1) {
        contraValida = false;
    }

    return contraValida;

}

//Validar tarjeta 

function validarTarjeta(nro) {
    if (!nro) {

        return false

    }

    let suma = 0

    let duplicar = false

    for (let i = nro.length - 1; i >= 0; i--) {

        n = Number(nro[i])

        if (duplicar) {

            n = n * 2

            if (n > 9) {

                n = n - 9

            }

        }

        suma = suma + n

        duplicar = !duplicar

    }



    return (suma % 10 == 0)

}

// Función válida tanto para cliente como para admin. 

document.querySelector("#btnSesion").addEventListener("click", inicioSesion);

function inicioSesion() {
    let nombreUsuario = document.querySelector("#txtUsuarioI").value;
    let contrasenia = document.querySelector("#psContra").value;
    let cliente = s.obtenerCliente(nombreUsuario, contrasenia);
    let admin = s.obtenerAdmin(nombreUsuario, contrasenia);
    let mensaje = "";

    if (cliente === null && admin === null) {
        mensaje = "El nombre de usuario y/o no es válido."
    }else {
        mensaje = "Bienvenido";
    }

    document.querySelector("#pIniciarSesion").innerHTML = mensaje;

}


// Funciones relacionadas al admin



// Funciones relacionadas al destino