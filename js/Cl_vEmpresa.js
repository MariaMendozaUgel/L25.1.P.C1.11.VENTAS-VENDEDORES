import Cl_mVendedores from "./Cl_mVendedores.js";
import Cl_vVendedores from "./Cl_vVendedores.js";

export default class Cl_vEmpresa {
    constructor () {
        this.controlador = null;
        this.mVendedores = null;
        this.vVendedores = new Cl_vVendedores ();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblCantidadVentasMenoresOIgual100 = document.getElementById("mainForm_lblCantidadVentasMenoresOIgual100");
        this.lblCantidadVentasMayores100 = document.getElementById("mainForm_lblCantidadVentasMayores100");
        this.lblMontoTotalVentas = document.getElementById("mainForm_lblMontoTotalVentas");
        this.btAgregar.onclick = () => this.ocultar();
        this.vVendedores.btAceptar.onclick = () => this.controlador.agregarVendedores();
        this.mostrar();
    }
    agregarVendedores() {
        this.mVendedores = new Cl_mVendedores({
           nombre: this.vVendedores.nombre,
           venta: this.vVendedores.venta,
        });
        this.mostrar();
        return this.mVendedores;
    }
    mostrar() {
        this.vista.hidden = false;
        this.vVendedores.ocultar();
    }
    ocultar() {
        this.vista.hidden = true;
        this.vVendedores.mostrar();
    }
    reportarVendedores (cantidadVentasMenoresOIgual100,cantidadVentasMayores100, montoTotalVentas) {
        this.tabla.innerHTML += `
            <tr>
                <td>${this.vVendedores.nombre}</td>
                <td>${this.vVendedores.venta}</td>
            </tr>`;
        this.lblCantidadVentasMenoresOIgual100.innerHTML = cantidadVentasMenoresOIgual100;
        this.lblCantidadVentasMayores100.innerHTML = cantidadVentasMayores100;
        this.lblMontoTotalVentas.innerHTML = montoTotalVentas;
    }
}