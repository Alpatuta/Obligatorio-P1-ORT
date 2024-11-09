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
  document.querySelector("#iniciarSesion").style.display = "none";
  document.querySelector("#sHeader").style.display = "none";
  document.querySelector("#sHeaderAdmin").style.display = "none";
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

//Mostrar el inicio de sesión
document
  .querySelector("#aIniciarSesion")
  .addEventListener("click", mostrarInicioSesion);

function mostrarInicioSesion() {
  ocultarTodo();
  ocultar("sRegistro");
  mostrar("iniciarSesion");
}

//Mostrar el registro
document.querySelector("#aRegistro").addEventListener("click", mostrarRegistro);

function mostrarRegistro() {
  ocultarTodo();
  ocultar("iniciarSesion");
  mostrar("sRegistro");
}

//Mostrar reservar destinos (cliente)
document
  .querySelector("#aReservarDestinos")
  .addEventListener("click", mostrarReservarDestinos);

function mostrarReservarDestinos() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sReservarDestinos");
}

//Mostrar historial de reservas (cliente)
document
  .querySelector("#aHistorialReservas")
  .addEventListener("click", mostrarHistorialReservas);

function mostrarHistorialReservas() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sHistorial-reservas");
}

//Mostrar destinos en oferta (cliente)
document
  .querySelector("#aDestinosOferta")
  .addEventListener("click", mostrarDestinosEnOferta);

function mostrarDestinosEnOferta() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sDestinos-en-oferta");
}

//Mostrar explorar destinos (cliente)
document
  .querySelector("#aExplorarDestinos")
  .addEventListener("click", mostrarExplorarDestinos);

function mostrarExplorarDestinos() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sExplorar-destinos");
}

//Cerrar sesión
document
  .querySelector(".aCerrarSesion")
  .addEventListener("click", cerrarSesion);

function cerrarSesion() {
  ocultarTodo();
  ocultar("sHeader");
  ocultar("sHeaderAdmin");
  mostrar("iniciarSesion");
}

// Funciones relacionadas al cliente

document
  .querySelector("#btnRegistro")
  .addEventListener("click", registroUsuario);

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

  if (
    tarjeta.length === 19 &&
    tarjeta[4] === "-" &&
    tarjeta[9] === "-" &&
    tarjeta[14] === "-"
  ) {
    for (let i = 0; i < tarjeta.length; i++) {
      if (tarjeta[i] === "-") {
        tarjeta = tarjeta.replace("-", "");
      }
    }
  }

  if (
    nombre === "" ||
    apellido === "" ||
    nombreUsuario === "" ||
    tarjeta === "" ||
    nbrCvc === ""
  ) {
    mensaje = "Debe completar todos los campos.";
  } else if (cliente !== null || admin !== null) {
    mensaje = "El nombre de usuario ya está en uso. ";
  } else if (nbrCvc.length !== 3 || isNaN(nbrCvc)) {
    mensaje = "Formato de CVC incorrecto.";
  } else if (validarContrasenia(contrasenia) === false) {
    mensaje =
      "La contraseña debe tener un mínimo de 5 caracteres e incluir una mayúscula, una minúscula y un número.";
  } else if (validarTarjeta(tarjeta) === false) {
    mensaje = "Tarjeta inválida.";
  } else {
    s.registrarCliente(
      nombre,
      apellido,
      nombreUsuario,
      contrasenia,
      tarjeta,
      nbrCvc
    );
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
      contadorMayus++;
    }

    if (contra >= 97 && contra <= 122) {
      contadorMin++;
    }

    if (contra >= 48 && contra <= 57) {
      contadorNum++;
    }
  }

  if (
    pContrasenia.length < 5 ||
    contadorMayus < 1 ||
    contadorMin < 1 ||
    contadorNum < 1
  ) {
    contraValida = false;
  }

  return contraValida;
}

//Validar tarjeta

function validarTarjeta(nro) {
  if (!nro) {
    return false;
  }

  let suma = 0;

  let duplicar = false;

  for (let i = nro.length - 1; i >= 0; i--) {
    n = Number(nro[i]);

    if (duplicar) {
      n = n * 2;

      if (n > 9) {
        n = n - 9;
      }
    }

    suma = suma + n;

    duplicar = !duplicar;
  }

  return suma % 10 == 0;
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
    mensaje = "El nombre de usuario y/o contraseña no es válido.";
  } else if (admin !== null) {
    ocultarTodo();
    document.querySelector("#sHeaderAdmin").style.display = "flex";
    mostrar("sAgregarDestinos");
    mostrar("sAdministrarDestino");
    mostrar("sManipular-reservas");
    mostrar("sInforme-ganancias");
  } else if (cliente !== null) {
    ocultarTodo();
    document.querySelector("#sHeader").style.display = "flex";
    mostrar("sExplorar-destinos");
    mostrar("sDestinos-en-oferta");
  }

  document.querySelector("#pIniciarSesion").innerHTML = mensaje;
}

document
  .querySelector("#btnReservar")
  .addEventListener("click", reservarDestino);

function reservarDestino() {
  let destino = document.querySelector("#slcDestino").value;
  let cantPersonas = document.querySelector("#txtCantPersonas").value;
  let metodoPago = document.querySelector("#slcPago").value;
  let lugar = s.destinos;
  let montoTotal = "";
  let estado = "";

  for (let i = 0; i < lugar.length; i++) {
    let d = lugar[i];

    if (d.nombre === destino) {
      montoTotal = d.precio * cantPersonas;
      estado = d.estado;
    }
  }

  // Falta obtener nombre de Cliente usando el nombre de usuario y usar metodo de pago.

  console.log(destino, cantPersonas, montoTotal, estado);
}

// Funciones relacionadas al admin

// Funciones relacionadas al destino
