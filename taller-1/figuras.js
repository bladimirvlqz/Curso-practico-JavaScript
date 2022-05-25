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


// Aqui interactuamos con el html

//Cuadrado
function calcularPerimetroCuadrado(){
    const input =document.getElementById("ImputCuadrado");
    const value =input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro es: " + perimetro + "cm");
};
    
function calcularAreaCuadrado(){
    const input =document.getElementById("ImputCuadrado");
    const value =parseInt(input.value);

    const area = areaCuadrado(value);
    alert("El área es: " + area + "cm");
};

// triangulo

function calcularPerimetroTriangulo(l, l2, b) {
    const input1 = document.getElementById("imput-lado-1");
    const lado1 =parseInt(input1.value);
    const input2 = document.getElementById("imput-lado-2");
    const lado2 =parseInt(input2.value);
    const inputBase= document.getElementById("imput-base");
    const bt = parseInt(inputBase.value);
    

    const perimetroT = perimetroTriangulo(lado1, lado2, bt);
    alert( "El perimetro es: " + perimetroT + "cm");
};

function calcularAreaTriangulo(bt, a) {
    const inputBase= document.getElementById("imput-base");
    const b = parseInt(inputBase.value);
    const inputAltura= document.getElementById("imput-altura");
    const h = parseInt(inputAltura.value);


    const areaT = areaTriangulo(b, h);
    console.log(areaTriangulo(b, h));
    alert("El área es: " + areaT + "cm");
};

// Circulo

function calcularDiametroCirculo() {
    const inputBase= document.getElementById("Imput-radio");
    const radio = parseInt(inputBase.value);

    const diametro = diametroCirculo(radio);
    alert("El diámetro es: " + diametro + "cm");
};

function calcularPerimetroCirculo() {
    const inputBase= document.getElementById("Imput-radio");
    const radio = parseInt(inputBase.value);

    const diametro = perimetroCirculo(radio);
    alert("El perímetro es: " + diametro + "cm");
};

function calcularAreaCirculo() {
    const inputBase= document.getElementById("Imput-radio");
    const radio = parseInt(inputBase.value);

    const diametro = areaCirculo(radio);
    alert("El área es: " + diametro + "cm");
};