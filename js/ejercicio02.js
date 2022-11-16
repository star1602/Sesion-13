/* Ejercicio 2 */
function invertir(){
    let montoInventir = prompt("¿Cuál es el monto a invertir?");
    document.write(`<ul>
                        <li>Avenida la Mar = ${montoInventir*(35/100)} </li>
                        <li>Avenida Abancay  = ${montoInventir*(25/100)} </li>
                        <li>Avenida 28 de Julio  = ${montoInventir*(10/100)} </li>
                        <li>Avenida Aviación  = ${montoInventir*(15/100)} </li>
                        <li>Avenida Tacna = ${montoInventir*(15/100)} </li>
                 </ul>`);

}   

invertir()