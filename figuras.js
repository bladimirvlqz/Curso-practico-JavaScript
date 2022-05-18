// Codigo del cuadrado

/* El usuario nos dara el lado del Cuadrado:
ladoC
*/

console.group("Cuadrados"); 

//perimetro cuadrado
function perimetroCuadrado(ladoC){
    return ladoC * 4;
};
console.log(perimetroCuadrado() ); // Un parametro

//area cuadrado
function areaCuadrado(ladoC){
    return ladoC * ladoC;
};
console.log(areaCuadrado() ); // Un parametro


console.groupEnd("Cuadrados"); 


// Codigo del triangulo

/*El usuario nos proporcionara los Dos lados, la base del triangulo y altura:
ladoT1
ladoT2
baseT
alturaT

*/
console.group("Triangulos"); 

//Perimetro triangulo
function perimetroTriangulo (ladoT1,ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT;
};
console.log(perimetroTriangulo() ); // Tres parametros

//area triangulo
function areaTriangulo (baseT, alturaT){
    return (baseT * alturaT) / 2;
};
console.log(areaTriangulo() ); // Dos parametros

console.groupEnd("Triangulos"); 


// Codigo del círculo
/* El usuario nos proporcionara el radio:
radioC
*/

console.group("Círculos");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
};
console.log(diametroCirculo() ); // Un parametro

//Pi
const PI = Math.PI;
console.log("Pi es : " + PI + "cm" );

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}; 
console.log(perimetroCirculo() ); // Un parametro

//Área

function areaCirculo(radio){
    return ( radio * radio) * PI;
}; 
console.log(areaCirculo() ); // Un parametro


console.groupEnd("Círculos"); 





