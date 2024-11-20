// Todo lo que tiene que ver con métodos de las instancias de clases.

class Sistema {
  constructor() {
    this.clienteLogueado;
    this.idCliente = 6;
    this.cliente = [
      new Cliente("CLI_ID_1", "Juan", "Moneta", "JMonetaSsj23", "Jm1234", "4213 - 6874 - 9541 - 5511", 159, 15000, 0),
      new Cliente("CLI_ID_2", "Lucas", "Gomez", "LucasGomez", "Lg1234", "4213 - 6872 - 4412 - 5512", 152, 15000, 0),
      new Cliente("CLI_ID_3", "Maria", "Lopez", "MariaLopez", "Ml1234", "4213 - 1234 - 1324 - 5555", 776, 15000, 0),
      new Cliente("CLI_ID_4", "Ana", "Perez", "AnaPerez", "Ap1234", "4213 - 1212 - 4355 - 6533", 344, 15000, 5),
      new Cliente("CLI_ID_5", "Pedro", "Gonzalez", "PedroGonzalez", "Pg1234", "2213 - 5251 - 3537 - 6865", 159, 15000, 0),
    ];

    this.admin = [
      new Administrador("VaneVic58", "Vane1234)"),
      new Administrador("Federico", "Fede1234)"),
      new Administrador("Romina", "Romina1234)"),
      new Administrador("Santiago", "Santi1234)"),
      new Administrador("Natalia", "Nata123"),
    ];
    this.idDestino = 11;
    this.destinos = [
      new Destino("DEST_ID_1", "Miami", 1600, "Nuevo en la F1, con ambiente de lujo y curvas desafiantes.", "https://s40320.pcdn.co/wp-content/uploads/2021/01/T18-Aerial-scaled.jpg", 20, "Activo", "si"),
      new Destino("DEST_ID_2", "Monza", 1650, "Velocidades máximas en el templo de la velocidad italiana.", "https://images.daznservices.com/di/library/DAZN_News/24/ca/monza-gp-italia-gran-premio-de-italia-formula-1-f1_9bag38iciu1f118g6l71uo0qg.jpg?t=314989067", 20, "Activo", "no"),
      new Destino("DEST_ID_3", "Sao Paulo", 1400, "Histórico y emocionante, escenario de finales épicos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhyQcL-7BNtDd4RR1WppdgvQSfahsJBup1g&s", 20, "Activo", "no"),
      new Destino("DEST_ID_4", "Abu Dhabi", 1500, "Emocionante cierre de temporada al atardecer en Yas Marina", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYY-Pfsz1phVMaxdXv75MuV9LNYh8M6cGBA&s", 20, "Activo", "no"),
      new Destino("DEST_ID_5", "Bahrein", 1200, "Carrera nocturna en el desierto, famoso por duelos intensos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUhh4T_AD2kXnybEiS9UvwRxZyHh_1fNG8A&s", 20, "Activo", "si"),
      new Destino("DEST_ID_6", "Las Vegas", 1450, "Carrera nocturna en el Strip, debutando en 2023", "https://cdn-7.motorsport.com/images/amp/254NWpx0/s1000/las-vegas-gp-rendering-1.jpg", 20, "Activo", "no"),
      new Destino("DEST_ID_7", "Barcelona", 1500, "Circuito técnico, importante para pruebas y estrategia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfo8hxm-Lx2D3NxBruJseRB4Uz7genKl1ZlA&s", 20, "Activo", "no"),
      new Destino("DEST_ID_8", "Tokio", 1300, "Pista técnica en forma de ocho, amada por pilotos", "https://f1destinations.com/wp-content/uploads/2023/08/2023_Japanese_GP_F1D_Saturday_06380-1024x683.jpg", 20, "Activo", "si"),
      new Destino("DEST_ID_9", "Mexico", 1300, "Ambiente festivo y altitud desafiante en el Autódromo Hermanos Rodríguez", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJF5iSGI1qKi3yuKi-OlvBdYFrQmZgLW8ADA&s", 20, "Activo", "no"),
      new Destino("DEST_ID_10", "Monaco", 1800, "Carrera en calles angostas, con curvas desafiantes y glamour", "https://cdn-imgix.headout.com/media/images/7d0797d8d3e5a6961697266f94016da9-Monaco%201.jpg", 20, "Activo", "no"),
    ];
    this.idReserva = 6;
    this.reservas = [
      new Reservas("DEST_ID_1", 1, 5, 2250, "Aprobada", "CLI_ID_1", "Tarjeta", this.cliente[0].millas),
      new Reservas("DEST_ID_2", 2, 3, 1800, "Aprobada", "CLI_ID_2", "Millas", this.cliente[1].millas),
      new Reservas("DEST_ID_3", 3, 2, 800, "Aprobada", "CLI_ID_3", "Tarjeta", this.cliente[2].millas),
      new Reservas("DEST_ID_4", 4, 4, 1600, "Aprobada", "CLI_ID_4", "Millas", this.cliente[3].millas),
      new Reservas("DEST_ID_5", 5, 1, 200, "Aprobada", "CLI_ID_5", "Tarjeta", this.cliente[4].millas),
    ];
  }

  registrarCliente(pNombre, pApellido, pUsuario, pContrasenia, pTarjeta, pCvc) {
    this.cliente.push(
      new Cliente(
        "CLI_ID_" + this.idCliente,
        pNombre,
        pApellido,
        pUsuario,
        pContrasenia,
        pTarjeta,
        pCvc,
        15000,
        0
      )
    );
    this.idCliente++;
  }

  agregarDestino(
    pNombre,
    pPrecio,
    pDescripcion,
    pImagen,
    pCupo,
    pEstado,
    pOferta
  ) {
    this.destinos.push(
      new Destino(
        "DEST_ID_" + this.idDestino,
        pNombre,
        pPrecio,
        pDescripcion,
        pImagen,
        pCupo,
        "Activo",
        "no"
      )
    );
    this.idDestino++;
  }

  //Para funcion de reservas
  reservar(pIdDestino, pCantPersonas, pMonto, pEstado, pMetodoPago) {
    for (let i = 0; i < this.destinos.length; i++) {
      let d = this.destinos[i];

      if (d.id === pIdDestino) {
        pMonto = d.precio * pCantPersonas;
        pEstado = d.estado;
        break;
      }
    }

    this.reservas.push(
      new Reservas(
        pIdDestino,
        this.idReserva,
        pCantPersonas,
        pMonto,
        "Pendiente",
        this.clienteLogueado.id,
        pMetodoPago,
        this.clienteLogueado.millas
      )
    );
    this.idReserva++;

    // calculo de monto total, id destino, metodo de pago (m o e);
  }

  existeReserva(pIdDestino, pIdCliente) {
    let existe = false;

    for (let i = 0; i < this.reservas.length; i++) {
      if (
        this.reservas[i].idDestino === pIdDestino &&
        this.reservas[i].idCliente === pIdCliente
      ) {
        existe = true;
      }
    }

    return existe;
  }

  //Para funcion registro

  obtenerClienteRegistro(pUsuario) {
    let objCliente = null;

    for (let i = 0; i < this.cliente.length; i++) {
      let c = this.cliente[i].nUsuario;

      if (c.toLowerCase() === pUsuario.toLowerCase()) {
        objCliente = this.cliente[i];
      }
    }

    return objCliente;
  }

  obtenerAdminRegistro(pUsuario) {
    let objAdmin = null;

    for (let i = 0; i < this.admin.length; i++) {
      let a = this.admin[i].nUsuario;

      if (a.toLowerCase() === pUsuario.toLowerCase()) {
        objAdmin = this.admin[i];
      }
    }

    return objAdmin;
  }

  // Para funcion inicio de sesion

  obtenerCliente(pUsuario, pContrasenia) {
    let objCliente = null;

    for (let i = 0; i < this.cliente.length; i++) {
      let c = this.cliente[i].nUsuario;

      if (
        c.toLowerCase() === pUsuario.toLowerCase() &&
        this.cliente[i].contrasenia === pContrasenia
      ) {
        objCliente = this.cliente[i];
      }
    }

    return objCliente;
  }

  obtenerAdmin(pUsuario, pContrasenia) {
    let objAdmin = null;

    for (let i = 0; i < this.admin.length; i++) {
      let a = this.admin[i].nUsuario;

      if (
        a.toLowerCase() === pUsuario.toLowerCase() &&
        this.admin[i].contrasenia === pContrasenia
      ) {
        objAdmin = this.admin[i];
      }
    }

    return objAdmin;
  }

  obtenerDestinoById(pIdDestino) {
    let objDest = null;

    for (let i = 0; i < this.destinos.length; i++) {
      let d = this.destinos[i];

      if (pIdDestino === d.id) {
        objDest = d;
        break;
      }
    }

    return objDest;
  }

  obtenerReservaById(pIdReserva) {
    let objReserva = null;

    for (let i = 0; i < this.reservas.length; i++) {
      let r = this.reservas[i];

      if (pIdReserva === r.idReserva) {
        objReserva = r;
        break;
      }
    }

    return objReserva;
  }

  obtenerClienteById(idCliente) {
    let objCliente = null;

    for (let i = 0; i < this.cliente.length; i++) {
      let c = this.cliente[i];

      if (idCliente === c.id) {
        objCliente = c;
        break;
      }
    }

    return objCliente;
  }

  procesarReserva(pIdReserva) {
    let r = this.obtenerReservaById(pIdReserva);
    let c = this.obtenerClienteById(r.idCliente);
    let d = this.obtenerDestinoById(r.idDestino);
    let e = r.estado;

    if (r.metodoPago === "Tarjeta") {
      if (c.saldo >= r.monto && d.cupos >= r.cantPersonas) {
        c.saldo -= r.monto;
        c.millas += r.monto / 100;
        d.cupos -= r.cantPersonas;
        e = "Aprobada";
      } else {
        e = "Cancelada";
      }
    } else if (r.metodoPago === "Millas") {
      if (c.millas >= r.monto && d.cupos >= r.cantPersonas) {
        c.millas -= r.monto;
        d.cupos -= r.cantPersonas;
        e = "Aprobada";
      } else if (c.millas + c.saldo >= r.monto && d.cupos >= r.cantPersonas) {
        let restaMillas = r.monto - c.millas;
        c.saldo -= restaMillas;
        c.millas = 0;
        e = "Aprobada";
      } else {
        e = "Cancelada";
      }
    }

    return e;
  }

  informeGanancias() {
    let totalGenerado = 0;
    let informe = [];

    for (let i = 0; i < this.destinos.length; i++) {
      let destino = this.destinos[i];
      let clientesPorDestino = 0;
      let generadoPorDestino = 0;
      let gananciasAsociadas = 0;

      for (let j = 0; j < this.reservas.length; j++) {
        let reserva = this.reservas[j];

        if (reserva.idDestino === destino.id && reserva.estado === "Aprobada" && reserva.metodoPago === "Tarjeta") {
          clientesPorDestino += reserva.cantPersonas;
          generadoPorDestino += reserva.monto;
          gananciasAsociadas = generadoPorDestino;
        }else if (reserva.idDestino === destino.id && reserva.estado === "Aprobada" && reserva.metodoPago === "Millas") {
          clientesPorDestino += reserva.cantPersonas;
          generadoPorDestino += reserva.monto;
          gananciasAsociadas = generadoPorDestino;
          gananciasAsociadas -= reserva.millas;
        }
      }

      totalGenerado += generadoPorDestino;

      informe.push({
        destino: destino.nombre,
        clientes: clientesPorDestino,
        monto: generadoPorDestino,
        gananciasAsociadas: gananciasAsociadas,
        total: totalGenerado,
      });
    }

    return informe;
  }
}
