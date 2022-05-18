// Codigo del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm" );

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm" );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado +"cm^2" );

console.groupEnd("Cuadrados")


// Codigo del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm, " 
);

const alturaTriangulo = 5.5;
console.log("La altura del triánguloes: " + alturaTriangulo +"cm" );

const perimetroTriangulo = 
ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
console.log("Este es el perímetro del triángulo: " + perimetroTriangulo +"cm" );

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Esta es el área del triángulo: " + areaTriangulo +"cm^2" )


console.groupEnd("Triangulos"); 


// Codigo del círculo
console.group("Círculos");


//Radio
const radioCirculo = 4;
console.log("El rádio del circiulo es : " + radioCirculo + "cm" );

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circiulo es : " + diametroCirculo + "cm" );

//Pi
const PI = Math.PI;
console.log("Pi es : " + PI + "cm" );

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circiulo es : " + perimetroCirculo + "cm" );

//Área
const areaCirculo = ( radioCirculo * radioCirculo) * PI ;
console.log("El área del circiulo es : " + areaCirculo + "cm^2" );


console.groupEnd("Círculos"); 





