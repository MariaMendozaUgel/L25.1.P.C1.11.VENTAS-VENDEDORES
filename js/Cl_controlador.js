export default class Cl_controlador {
    constructor (modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarVendedores () {
        this.modelo.procesarVendedores(this.vista.agregarVendedores());
        this.vista.reportarVendedores(
            this.modelo.cantidadVentasMenoresOIgual100(),
            this.modelo.cantidadVentasMayores100(),
            this.modelo.montoTotalVentas() 
        )
    }
}