// Todo lo que tiene que ver con métodos de las instancias de clases.

class Sistema {
  constructor() {
    this.cliente = [
      new Cliente(
        1,
        "Juan",
        "Moneta",
        "JMonetaSsj23",
        "1234",
        4213 - 6874 - 9541 - 5511,
        159,
        1500
      ),
      new Cliente(
        2,
        "Lucas",
        "Gomez",
        "LucasGomez",
        "1234",
        4213 - 6872 - 4412 - 5512,
        152,
        1500
      ),
      new Cliente(
        3,
        "Maria",
        "Lopez",
        "MariaLopez",
        "1234",
        4213 - 1234 - 1324 - 5555,
        776,
        1500
      ),
      new Cliente(
        4,
        "Ana",
        "Perez",
        "AnaPerez",
        "1234",
        4213 - 1212 - 4355 - 6533,
        344,
        1500
      ),
      new Cliente(
        5,
        "Pedro",
        "Gonzalez",
        "PedroGonzalez",
        "1234",
        2213 - 5251 - 3537 - 6865,
        159,
        1500
      ),
    ];

    this.admin = [
      new Administrador("VaneVic58", "Vane1234)"),
      new Administrador("Federico", "Fede1234)"),
      new Administrador("Romina", "Romina1234)"),
      new Administrador("Santiago", "Santi1234)"),
      new Administrador("Natalia", "Nata123"),
    ];

    this.destinos = [
      new Destino(
        1,
        "Miami",
        450,
        "Miami es god",
        "img/miami.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        2,
        "Monza",
        600,
        "Monza es god",
        "img/monza.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        3,
        "Sao Paulo",
        400,
        "Sao Paulo es god",
        "img/saopaulo.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        4,
        "Abu Dhabi",
        400,
        "Abu Dhabi es god",
        "img/abudhabi.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        5,
        "Bahrein",
        200,
        "Bahrein es god",
        "img/bahrein.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        6,
        "Las vegas",
        200,
        "Las vegas god",
        "img/lasVegas.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        7,
        "Barcelona",
        500,
        "Barcelona es god",
        "img/barcelona.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        8,
        "Tokio",
        400,
        "Tokio es god",
        "img/tokio.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        9,
        "Mexico",
        300,
        "Mexico es god",
        "img/mexico.jpg",
        100,
        "activo",
        "no"
      ),

      new Destino(
        10,
        "Monaco",
        600,
        "Monaco es god",
        "img/monaco.jpg",
        100,
        "activo",
        "no"
      ),
    ];

    this.reservas = [
      new Reservas("Miami", 5, 2250, "pendiente", "Juan"),
      new Reservas("Monza", 3, 1800, "pendiente", "Lucas"),
      new Reservas("Sao Paulo", 2, 800, "pendiente", "Maria"),
      new Reservas("Abu Dhabi", 4, 1600, "pendiente", "Ana"),
      new Reservas("Bahrein", 1, 200, "pendiente", "Pedro"),
    ];
  }

  registrarCliente(pNombre, pApellido, pUsuario, pTarjeta, pCvc) {
    this.cliente.push(
      new Cliente(pNombre, pApellido, pUsuario, pTarjeta, pCvc)
    );
  }

  historialReservas(
    pNombreDestino,
    pCantPersonas,
    pMonto,
    pEstado,
    pNombreCliente
  ) {
    let reserva = [];
    reserva.push(
      new Reservas(
        pNombreDestino,
        pCantPersonas,
        pMonto,
        pEstado,
        pNombreCliente
      )
    );
  }

  obtenerCliente(pUsuario) {
    let objCliente = null;

    for (let i = 0; i < this.cliente.length; i++) {
      if (this.cliente[i].nUsuario == pUsuario) {
        objCliente = this.cliente[i];
      }
    }

    return objCliente;
  }

  obtenerAdmin(pUsuario) {
    let objAdmin = null;

    for (let i = 0; i < this.admin.length; i++) {
      if (this.admin[i].nUsuario == pUsuario) {
        objAdmin = this.admin[i];
      }
    }

    return objAdmin;
  }
}
