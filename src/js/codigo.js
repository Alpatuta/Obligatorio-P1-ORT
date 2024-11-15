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
  document.querySelector("#sEditarDestinos").style.display = "none";
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
  mostrarDestinosReserva();
  document.querySelector("#pMillas").innerHTML = `Total de millas: ${s.clienteLogueado.millas}`;
}

//Mostrar historial de reservas (cliente)
document
  .querySelector("#aHistorialReservas")
  .addEventListener("click", mostrarHistorialReservas);

function mostrarHistorialReservas() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sHistorial-reservas");
  historialReservas();
}

//Mostrar destinos en oferta (cliente)
document
  .querySelector("#aDestinosOferta")
  .addEventListener("click", mostrarDestinosEnOferta);

function mostrarDestinosEnOferta() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sDestinos-en-oferta");
  ofertas();
}

//Mostrar explorar destinos (cliente)
document
  .querySelector("#aExplorarDestinos")
  .addEventListener("click", mostrarExplorarDestinos);

function mostrarExplorarDestinos() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrar("sExplorar-destinos");
  explorar();
}

//Mostrar interfaz Cliente

function mostrarCliente() {
  ocultarTodo();
  document.querySelector("#sHeader").style.display = "flex";
  mostrarExplorarDestinos();
}

//Mostrar agregar destinos (admin)
document
  .querySelector("#aAgregarDestinos")
  .addEventListener("click", mostrarAgregarDestinos);

function mostrarAgregarDestinos() {
  ocultarTodo();
  document.querySelector("#sHeaderAdmin").style.display = "flex";
  mostrar("sAgregarDestinos");
}

//Mostrar administrar destinos (admin)
document
  .querySelector("#aAdministrarDestino")
  .addEventListener("click", mostrarAdministrarDestinos);

function mostrarAdministrarDestinos() {
  ocultarTodo();
  document.querySelector("#sHeaderAdmin").style.display = "flex";
  mostrar("sAdministrarDestino");
  mostrarDestinosReserva();
}

//Mostrar manipular reservas (admin)
document
  .querySelector("#aManipularReservas")
  .addEventListener("click", mostrarManipularReservas);

function mostrarManipularReservas() {
  ocultarTodo();
  document.querySelector("#sHeaderAdmin").style.display = "flex";
  mostrar("sManipular-reservas");
  mostrarPrecargadas();
  mostrarPendientes();
}

//Mostrar informe de ganancias (admin)
document
  .querySelector("#aInformeGanancias")
  .addEventListener("click", mostrarInformeGanancias);

function mostrarInformeGanancias() {
  ocultarTodo();
  document.querySelector("#sHeaderAdmin").style.display = "flex";
  mostrar("sInforme-ganancias");
  informeDeGanancias();
}

// Mostrar interfaz Admin

function mostrarAdmin() {
  ocultarTodo();
  document.querySelector("#sHeaderAdmin").style.display = "flex";
}

//Cerrar sesión (admin)
document
  .querySelector("#aCerrarSesionAdmin")
  .addEventListener("click", cerrarSesion);

function cerrarSesion() {
  ocultarTodo();
  ocultar("sHeader");
  ocultar("sHeaderAdmin");
  mostrar("iniciarSesion");
}

//Cerrar sesión (cliente)
document
  .querySelector("#aCerrarSesionCliente")
  .addEventListener("click", cerrarSesionC);

function cerrarSesionC() {
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
  let esValida = false;

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
    esValida = validarTarjeta(tarjeta);
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
  } else if (esValida === false) {
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
    document.querySelector("#txtNombre").value = "";
    document.querySelector("#txtApellido").value = "";
    document.querySelector("#txtUsuario").value = "";
    document.querySelector("#psContrasenia").value = "";
    document.querySelector("#txtTarjeta").value = "";
    document.querySelector("#txtCvc").value = "";
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

let adminLogueado;

function inicioSesion() {
  let nombreUsuario = document.querySelector("#txtUsuarioI").value;
  let contrasenia = document.querySelector("#psContra").value;
  let cliente = s.obtenerCliente(nombreUsuario, contrasenia);
  let admin = s.obtenerAdmin(nombreUsuario, contrasenia);
  let mensaje = "";

  if (nombreUsuario === "" || contrasenia === "") {
    mensaje = "Debe completar todos los campos.";
  } else if (cliente === null && admin === null) {
    mensaje = "El nombre de usuario y/o contraseña no es válido.";
  } else if (admin !== null) {
    mostrarAdmin();
    mostrarAdministrarDestinos();
    document.querySelector("#txtUsuarioI").value = "";
    document.querySelector("#psContra").value = "";
    adminLogueado = admin;
  } else if (cliente !== null) {
    mostrarCliente();
    mostrarExplorarDestinos();
    mostrarDestinosEnOferta();
    document.querySelector("#txtUsuarioI").value = "";
    document.querySelector("#psContra").value = "";
    s.clienteLogueado = cliente;
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
  let monto = s.destinos.precio;
  let estado = s.destinos.estado;
  let millasCliente = s.clienteLogueado.millas;

  if (
    destino !== "#" &&
    !isNaN(cantPersonas) &&
    cantPersonas > 0 &&
    cantPersonas !== "" &&
    metodoPago !== "#"
  ) {
    if (s.existeReserva(destino, s.clienteLogueado.id) === true) {
      document.querySelector("#pReservar").innerHTML =
        "Ya tiene una reserva para el destino seleccionado. Por favor elija otro destino.";
    } else if (metodoPago === "Millas" && millasCliente === 0){
      document.querySelector("#pReservar").innerHTML = "No tiene millas suficientes. Por favor elija otro método de pago.";
    } else {
      s.reservar(destino, cantPersonas, monto, estado, metodoPago);

      document.querySelector(
        "#pReservar"
      ).innerHTML = `Reserva realizada con éxito!`;
      document.querySelector("#txtCantPersonas").value = "";
      document.querySelector("#slcPago").value = "#";
    }
  } else {
    document.querySelector("#pReservar").innerHTML = `Complete todo los campos`;
  }
}

//Funcion para mostrar destinos en select de reservar destinos
function mostrarDestinosReserva() {
  let destinos = s.destinos;
  let option = `<option value="#">Seleccione un destino...</option>`;

  for (let i = 0; i < destinos.length; i++) {
    let d = destinos[i];

    if (d.estado === "Activo") {
      option += `<option value="${d.id}">${d.nombre}</option>`;
    }
  }

  document.querySelector("#slcDestino").innerHTML = option;
  document.querySelector("#slcAdminDest").innerHTML = option;
}

//Funcion historial de reservas
document
  .querySelector("#aHistorialReservas")
  .addEventListener("click", historialReservas);

function historialReservas() {
  let historial = s.reservas;
  let cuerpoTabla = "";

  for (let i = 0; i < historial.length; i++) {
    let h = historial[i];
    let objDestino = s.obtenerDestinoById(h.idDestino);

    if (
      (objDestino.id === h.idDestino &&
        h.idCliente === s.clienteLogueado.id &&
        h.estado === "Aprobada") ||
      h.estado === "Cancelada"
    ) {
      cuerpoTabla += `
      <tr>
        <td>${objDestino.nombre}</td>
        <td>${h.cantPersonas}</td>
        <td>${h.monto}</td>
        <td>${h.estado}</td>
      </tr>
      `;
    } else if (
      objDestino.id === h.idDestino &&
      h.idCliente === s.clienteLogueado.id &&
      h.estado === "Pendiente"
    ) {
      cuerpoTabla += `
      <tr>
        <td>${objDestino.nombre}</td>
        <td>${h.cantPersonas}</td>
        <td>${h.monto}</td>
        <td>${h.estado}</td>
        <td><input type="button" value="Cancelar" class="btnCancelar" data-id-pendiente="${h.idReserva}"></td>
      </tr>
      `;
    }
  }
  document.querySelector("#tHistorial").innerHTML = cuerpoTabla;
  bindearBtnCancelar();
}

function bindearBtnCancelar() {
  let botones = document.querySelectorAll(".btnCancelar");

  for (let i = 0; i < botones.length; i++) {
    let boton = botones[i];

    boton.addEventListener("click", cancelarReserva);
  }
}

function cancelarReserva() {
  let idReserva = Number(this.getAttribute("data-id-pendiente"));
  let r = s.obtenerReservaById(idReserva);
  r.estado = "Cancelada";

  historialReservas();
}

//Funcion para manipular reservas
function mostrarPrecargadas() {
  let precargadas = s.reservas;

  let cuerpoTabla = "";

  for (let i = 0; i < precargadas.length; i++) {
    let pre = precargadas[i];
    let cliente = s.obtenerClienteById(pre.idCliente);
    let objDestino = s.obtenerDestinoById(pre.idDestino);

    if (pre.estado === "Aprobada") {
      cuerpoTabla += `<tr>
      <td>${cliente.nombre}</td>
      <td>${objDestino.nombre}</td>
      <td>${pre.cantPersonas}</td>
      <td>${pre.monto}</td>
      </tr>`;
    }
  }

  document.querySelector("#tManipularReservasAprobadas").innerHTML =
    cuerpoTabla;
}

//Funcion explorar destinos // Cambiar de lugar??

document
  .querySelector("#aExplorarDestinos")
  .addEventListener("click", explorar);

function explorar() {
  let destinos = s.destinos;
  let cuerpoTabla = "";

  for (let i = 0; i < destinos.length; i++) {
    let d = destinos[i];

    if (d.estado === "Activo" && d.cupos > 0) {
      cuerpoTabla += `
      <tr>
        <td>${d.nombre}</td>
        <td><img src="${d.img}"></td>
        <td>${d.desc}</td>
        <td>${d.precio}</td>
        <td>${d.oferta}</td>
        <td><input type="button" value= "Reservar" class="goToReserva" data-id-destino="${d.id}"></td>
        </tr>
      `;
    }
  }

  document.querySelector("#tExplorarDestinos").innerHTML = cuerpoTabla;
  bindearBtnReservar();
}

function bindearBtnReservar() {
  let botones = document.querySelectorAll(".goToReserva");

  for (let i = 0; i < botones.length; i++) {
    let boton = botones[i];

    boton.addEventListener("click", irAReservas);
  }
}

function irAReservas() {
  let idDestino = this.getAttribute("data-id-destino");
  mostrarReservarDestinos();
}

document.querySelector("#aDestinosOferta").addEventListener("click", ofertas);

function ofertas() {
  let destinos = s.destinos;
  let cuerpoTabla = "";

  for (let i = 0; i < destinos.length; i++) {
    d = destinos[i];

    if (d.oferta === "si") {
      cuerpoTabla += `
      <tr>
        <td>${d.nombre}</td>
        <td><img src="${d.img}"></td>
        <td>${d.precio}</td>
        <td>${d.desc}</td>
        <td>${d.cupos}</td>
        <td><input type="button" value= "Reservar" class="goToReserva" data-id-destino="${d.id}"></td>
      </tr>
      `;
    }
  }
  document.querySelector("#tDestinosEnOferta").innerHTML = cuerpoTabla;
  bindearBtnReservar();
}

// Funciones relacionadas al admin

//Funcion para crear un destino
document.querySelector("#btnCrear").addEventListener("click", crearDestino);

function crearDestino() {
  let nombre = document.querySelector("#txtNombreDestino").value;
  let precio = Number(document.querySelector("#txtPrecio").value);
  let desc = document.querySelector("#txtDesc").value;
  let imagen = document.querySelector("#txtImagen").value;
  let cupos = Number(document.querySelector("#txtCupos").value);

  if (
    nombre === "" ||
    precio === "" ||
    desc === "" ||
    imagen === "" ||
    cupos === ""
  ) {
    document.querySelector("#pCrear").innerHTML =
      "Debe completar todos los campos.";
  } else if (isNaN(precio) || isNaN(cupos) || precio < 0 || cupos < 0) {
    document.querySelector("#pCrear").innerHTML =
      "Precio por persona y Cantidad de cupos deben ser números mayores a 0";
  } else {
    s.agregarDestino(nombre, precio, desc, imagen, cupos);
    document.querySelector("#pCrear").innerHTML = "Destino creado con éxito!";
    document.querySelector("#txtNombreDestino").value = "";
    document.querySelector("#txtPrecio").value = "";
    document.querySelector("#txtDesc").value = "";
    document.querySelector("#txtImagen").value = "";
    document.querySelector("#txtCupos").value = "";
  }
}

//Funcion para mostrar destinos en tabla de manipular reservas
function mostrarPendientes() {
  let precargadas = s.reservas;
  let cuerpoTabla = "";

  for (let i = 0; i < precargadas.length; i++) {
    let pre = precargadas[i];
    let cliente = s.obtenerClienteById(pre.idCliente);
    let objDestino = s.obtenerDestinoById(pre.idDestino);

    if (pre.estado === "Pendiente") {
      cuerpoTabla += `<tr>
      <td>${cliente.nombre}</td>
      <td>${objDestino.nombre}</td>
      <td>${pre.cantPersonas}</td>
      <td>${pre.monto}</td>
      <td><input type="button" value="Procesar reserva" class="btnAprobar" data-id-reserva="${pre.idReserva}"</td>
      </tr>`;
    }
  }

  document.querySelector("#tManipularReservasPendientes").innerHTML =
    cuerpoTabla;
  bindearReservas();
}

//Funcion bindear botones procesarReservas
function bindearReservas() {
  let botones = document.querySelectorAll(".btnAprobar");

  for (let i = 0; i < botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", procesarReserva);
  }
}

// Procesar reservas
function procesarReserva() {
  let idReserva = Number(this.getAttribute("data-id-reserva"));
  mostrarPendientes();
  aprobarReservas(idReserva);
}

function aprobarReservas(idReserva) {
  let r = s.obtenerReservaById(idReserva);
  let c = s.obtenerClienteById(r.idCliente);
  let d = s.obtenerDestinoById(r.idDestino);
  let filas = document.querySelectorAll("#tManipularReservasPendientes tr");

  let cuerpoTabla = ` 
  <tr>
  <td>${c.nombre}</td>
  <td>${d.nombre}</td>  
  <td>${r.cantPersonas}</td>  
  <td>${r.monto}</td>
  </tr>
  `;
  if (r.estado === "Pendiente") {
    for (let i = 0; i < filas.length; i++) {
      let fila = filas[i];
      if (
        fila.querySelector(".btnAprobar").getAttribute("data-id-reserva") ==
        idReserva
      ) {
        fila.style.display = "none";
        break;
      }
    }
  }

  if (s.procesarReserva(idReserva) === "Aprobada") {
    document.querySelector("#tManipularReservasAprobadas").innerHTML +=
      cuerpoTabla;
    r.estado = "Aprobada";

    if (d.cupos === 0) {
      d.estado = "Pausado";
    }
  } else if (s.procesarReserva(idReserva) === "Rechazada") {
    document.querySelector("#tManipularReservasRechazadas").innerHTML +=
      cuerpoTabla;
    r.estado = "Rechazada";
  }
}

/* Funciones relacionadas al destino */

//Esto deberia ir donde esta todo lo otro de mostrar y ocultar.

document.querySelector("#btnAdministrar").addEventListener("click", formAdministrar);

function formAdministrar(){
  let idDestino = document.querySelector("#slcAdminDest").value;
  let d = s.obtenerDestinoById(idDestino);
  ocultarTodo();
  document.querySelector("#sHeaderAdmin").style.display = "flex";
  editarDestinos(d.nombre, d.cupos, d.estado, d.oferta);
  mostrar("sEditarDestinos");
}

function editarDestinos (pNombre, pCupos, pEstado, pOferta){
  document.querySelector("#pEditarDest").innerHTML = `Nombre: ${pNombre}`;
  document.querySelector("#txtEditarCupos").setAttribute("value", `${pCupos}`);
  let estado = document.querySelector("#slcEstado").value;
  let oferta = document.querySelector("#slcOferta").value;

  if (pEstado === "Activo"){
    estado = pEstado;
  } else if (pEstado === "Pausado"){
    estado = "Pausado";
  }

  if(pOferta === "si"){
    oferta = pOferta;
  } else if(pOferta === "no"){
    oferta = "no";
  }


}

document.querySelector("#btnGuardarCambios").addEventListener("click", nuevaInfoDestino);

function nuevaInfoDestino (idDestino){
  document.querySelector("#pEditarDest").innerHTML = `Nombre: ${d.nombre}`;
  let d = s.obtenerDestinoById(idDestino);
  let cupos = Number(document.querySelector("#txtEditarCupos").value);
  let estado = document.querySelector("#slcEstado").value;
  let oferta = document.querySelector("#slcOferta").value;


  
  if(!isNaN(cupos) && cupos >= 0 && estado !== "#" && oferta !== "#"){
    
    d.cupos = cupos;
    
    if (oferta === "si") {
      d.oferta = "si";
    } else {
      d.oferta = "no";
    }
    
    if (slcEstado === "Pausado") {
      d.estado = "Pausado";
    } else {
      d.estado = "Activo";
    }
  }

}

// Funcion informe de ganancias
function informeDeGanancias() {
  let cuerpoTabla = "";
  let ganancias = s.informeGanancias();

  for (let i = 0; i < ganancias.length; i++) {
    let g = ganancias[i];

    cuerpoTabla += `
    <tr>
      <td>${g.destino}</td>
      <td>${g.clientes}</td>
      <td>${g.gananciasAsociadas}</td>
      <td>${g.monto}</td>
    </tr>
    `;

    document.querySelector(
      "#pGananciasTotal"
    ).innerHTML = `Total generado: $${g.total}`;
  }

  document.querySelector("#tInformeGanancias").innerHTML = cuerpoTabla;
}
