export default class Cl_vVendedores {
    constructor () {
        this.vista = document.getElementById ("vendedoresForm");
        this.inNombre = document.getElementById ("vendedoresForm_inNombre");
        this.inVenta = document.getElementById ("vendedoresForm_inVenta");
        this.btAceptar = document.getElementById ("vendedoresForm_btAceptar");
    }
    get nombre () {
        return this.inNombre.value;
    }
    get venta () {
        return this.inVenta.value;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}