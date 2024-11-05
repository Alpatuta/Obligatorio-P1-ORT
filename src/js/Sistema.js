// Todo lo que tiene que ver con métodos de las instancias de clases.

class Sistema {
    constructor () {
        this.cliente = [
            new Cliente (1, "Juan", "Moneta", "JMonetaSsj23", "1234", 4213-6874-9541-5511, 159, 1500)
        ];

        this.admin = [
            new Administrador ("VaneVic58", "741"),
            new Administrador ("Federico", "Fede1234)")
        ];
    }


    registrarCliente (pNombre, pApellido, pUsuario, pTarjeta, pCvc){
        this.cliente.push(new Cliente(pNombre, pApellido, pUsuario, pTarjeta, pCvc));
    }

}
