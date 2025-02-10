export default class Cl_vendedores {
    constructor (nombre, venta) {
        this.nombre = nombre;
        this.venta = venta;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }
    get nombre () {
        return this._nombre;
    }

    set venta (venta) {
        this._venta = +venta;
    }
    get venta () {
        return this._venta;
    }
}