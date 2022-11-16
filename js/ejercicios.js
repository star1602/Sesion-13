/* Ejercicio 01 */ 

function CalcularPorcentaje(){

    let mujeres = +prompt(`¿Cuál es el número de estudiantes mujeres?`);
    let varones = +prompt(`¿Cuál es el número de estudiantes mujeres?`);
    let total = mujeres + varones 

    alert(`El % de mujeres es: ${(mujeres*100)/total}% el % de varones: ${(varones*100)/total}%`);
 }

 CalcularPorcentaje()