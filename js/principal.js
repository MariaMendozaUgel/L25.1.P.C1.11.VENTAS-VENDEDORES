/*/Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas 
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el 
monto total en $ de todas las ventas. 
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta) 
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)/*/

import Cl_empresa from "./Cl_empresa.js";
import Cl_vendedores from "./Cl_vendedores.js";

let vendedor1 = new Cl_vendedores("Mary", 150);
let vendedor2 = new Cl_vendedores("Jose", 135);
let vendedor3 = new Cl_vendedores("Carlos", 160);
let vendedor4 = new Cl_vendedores("Pedro", 75);

let empresa = new Cl_empresa();

empresa.procesarVendedor(vendedor1);
empresa.procesarVendedor(vendedor2);
empresa.procesarVendedor(vendedor3);
empresa.procesarVendedor(vendedor4);

let salida = document.getElementById ("Salida");

salida.innerHTML =`
    Cantidad de ventas menores o iguales a 100: ${empresa.cantidadVentasMenoresOIgual100()}<br>
    Cantidad de ventas mayores a 100: ${empresa.cantidadVentasMayores100()}<br>
    Monto total de ventas: $${empresa.montoTotalVentas()}<br>`;