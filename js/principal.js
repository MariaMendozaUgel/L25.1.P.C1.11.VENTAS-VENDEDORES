/*/Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas 
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el 
monto total en $ de todas las ventas. 
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta) 
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)/*/

import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_controlador from "./Cl_controlador.js";
export default class principal {
    constructor (){
        let vista = new Cl_vEmpresa();
        let modelo = new Cl_mEmpresa();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}