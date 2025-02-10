import Cl_vendedores from "./Cl_vendedores.js";
export default class Cl_empresa {
    constructor () {
        this.acumVentas = 0;
        this.contVentasMay100 = 0;
        this.contVentasMen100 = 0;
    }
    procesarVendedor (v) {
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