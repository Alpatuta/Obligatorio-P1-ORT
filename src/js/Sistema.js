// Todo lo que tiene que ver con métodos de las instancias de clases.

class Sistema {
  constructor() {
    this.idCliente = 6;
    this.cliente = [
      new Cliente(
        1,
        "Juan",
        "Moneta",
        "JMonetaSsj23",
        "Jm1234",
        "4213 - 6874 - 9541 - 5511",
        159,
        15000, 
        0
      ),
      new Cliente(
        2,
        "Lucas",
        "Gomez",
        "LucasGomez",
        "Lg1234",
        "4213 - 6872 - 4412 - 5512",
        152,
        15000, 
        0
      ),
      new Cliente(
        3,
        "Maria",
        "Lopez",
        "MariaLopez",
        "Ml1234",
        "4213 - 1234 - 1324 - 5555",
        776,
        15000, 
        0
      ),
      new Cliente(
        4,
        "Ana",
        "Perez",
        "AnaPerez",
        "Ap1234",
        "4213 - 1212 - 4355 - 6533",
        344,
        15000, 
        0
      ),
      new Cliente(
        5,
        "Pedro",
        "Gonzalez",
        "PedroGonzalez",
        "Pg1234",
        "2213 - 5251 - 3537 - 6865",
        159,
        15000, 
        0
      ),
    ];

    this.admin = [
      new Administrador("VaneVic58", "Vane1234)"),
      new Administrador("Federico", "Fede1234)"),
      new Administrador("Romina", "Romina1234)"),
      new Administrador("Santiago", "Santi1234)"),
      new Administrador("Natalia", "Nata123"),
    ];
    this.idDestino = 10;
    this.destinos = [
      new Destino(
        "DEST_ID_1",
        "Miami",
        450,
        "Miami es god",
        "https://s40320.pcdn.co/wp-content/uploads/2021/01/T18-Aerial-scaled.jpg",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_2",
        "Monza",
        600,
        "Monza es god",
        "https://images.daznservices.com/di/library/DAZN_News/24/ca/monza-gp-italia-gran-premio-de-italia-formula-1-f1_9bag38iciu1f118g6l71uo0qg.jpg?t=314989067",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_3",
        "Sao Paulo",
        400,
        "Sao Paulo es god",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhyQcL-7BNtDd4RR1WppdgvQSfahsJBup1g&s",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_4",
        "Abu Dhabi",
        400,
        "Abu Dhabi es god",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYY-Pfsz1phVMaxdXv75MuV9LNYh8M6cGBA&s",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_5",
        "Bahrein",
        200,
        "Bahrein es god",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUhh4T_AD2kXnybEiS9UvwRxZyHh_1fNG8A&s",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_6",
        "Las Vegas",
        200,
        "Las vegas god",
        "https://cdn-7.motorsport.com/images/amp/254NWpx0/s1000/las-vegas-gp-rendering-1.jpg",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_7",
        "Barcelona",
        500,
        "Barcelona es god",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfo8hxm-Lx2D3NxBruJseRB4Uz7genKl1ZlA&s",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
       "DEST_ID_8",
        "Tokio",
        400,
        "Tokio es god",
        "https://f1destinations.com/wp-content/uploads/2023/08/2023_Japanese_GP_F1D_Saturday_06380-1024x683.jpg",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_9",
        "Mexico",
        300,
        "Mexico es god",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJF5iSGI1qKi3yuKi-OlvBdYFrQmZgLW8ADA&s",
        100,
        "Pendiente",
        "no"
      ),

      new Destino(
        "DEST_ID_10",
        "Monaco",
        600,
        "Monaco es god",
        "https://cdn-imgix.headout.com/media/images/7d0797d8d3e5a6961697266f94016da9-Monaco%201.jpg",
        100,
        "Pendiente",
        "no"
      ),
    ];

    this.reservas = [
      new Reservas("DEST_ID_1", 5, 2250, "Aprobada", "Juan", "Tarjeta"),
      new Reservas("DEST_ID_2", 3, 1800, "Aprobada", "Lucas", "Millas"),
      new Reservas("DEST_ID_3", 2, 800, "Aprobada", "Maria", "Tarjeta"),
      new Reservas("DEST_ID_4", 4, 1600, "Aprobada", "Ana", "Millas"),
      new Reservas("DEST_ID_5", 1, 200, "Aprobada", "Pedro", "Tarjeta"),
    ];
  }

  registrarCliente(pNombre, pApellido, pUsuario, pContrasenia, pTarjeta, pCvc,) {
    this.cliente.push(
      new Cliente(
        this.idCliente,
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
    pDisponible
  ) {
    this.destinos.push(
      new Destino(
        "DEST_ID_" + this.idDestino,
        pNombre,
        pPrecio,
        pDescripcion,
        pImagen,
        pCupo,
        pEstado,
        pDisponible
      )
    );
    this.idDestino++;
  }

  //Para funcion de reservas
  reservar(pIdDestino, pCantPersonas, pMonto, pEstado, pNombreCliente, pMetodoPago) {

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
        pCantPersonas,
        pMonto,
        pEstado,
        pNombreCliente,
        pMetodoPago
      )
      
    );

    // calculo de monto total, id destino, metodo de pago (m o e);
  }

  existeReserva(pNombreDestino, pNombreCliente) {
    let existe = false;

    for (let i = 0; i < this.reservas.length; i++) {
      if (
        this.reservas[i].nombreDestino === pNombreDestino &&
        this.reservas[i].nombreCliente === pNombreCliente
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
      if (this.cliente[i].nUsuario === pUsuario) {
        objCliente = this.cliente[i];
      }
    }

    return objCliente;
  }

  obtenerAdminRegistro(pUsuario) {
    let objAdmin = null;

    for (let i = 0; i < this.admin.length; i++) {
      if (this.admin[i].nUsuario === pUsuario) {
        objAdmin = this.admin[i];
      }
    }

    return objAdmin;
  }

  // Para funcion inicio de sesion

  obtenerCliente(pUsuario, pContrasenia) {
    let objCliente = null;

    for (let i = 0; i < this.cliente.length; i++) {
      if (
        this.cliente[i].nUsuario === pUsuario &&
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
      if (
        this.admin[i].nUsuario === pUsuario &&
        this.admin[i].contrasenia === pContrasenia
      ) {
        objAdmin = this.admin[i];
      }
    }

    return objAdmin;
  }

  obtenerDestinoById (pIdDestino){
    let objDest = null;
    
    for(let i = 0; i < this.destinos.length; i++){
      let d = this.destinos[i];

      if (pIdDestino === d.id){
        objDest = d;
        break
      }
    }

    return objDest;
  }

  ObtenerReserva(pNombreCliente){
    let objReserva = null;

    for(let i = 0; i < this.reservas.length; i++){
      let r = this.reservas[i];

      if(pNombreCliente === r.nombreCliente){
        objReserva = r;
        break
      }

    }

    return objReserva;
  }

}
