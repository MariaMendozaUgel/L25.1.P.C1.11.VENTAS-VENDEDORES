import Cl_mVendedores from "./Cl_mVendedores.js";
export default class Cl_mEmpresa {
    constructor () {
        this.acumVentas = 0;
        this.contVentasMay100 = 0;
        this.contVentasMen100 = 0;
    }
    procesarVendedores (v) {
        this.acumVentas += v.venta;
        if (v.venta > 100) this.contVentasMay100 += 1;
        if (v.venta <= 100) this.contVentasMen100 += 1;
    }
    cantidadVentasMenoresOIgual100 () {
        return this.contVentasMen100;
    }

    cantidadVentasMayores100 () {
        return this.contVentasMay100;
    }
    montoTotalVentas () {
        return this.acumVentas;
    }
}