// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "sandra";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(nombre) {
  return nombre// "Return" la string provista: str
  // Tu código:
}
devolverString('sandra');


function suma(x, y) {
  let resultadoSuma =  x + y// "x" e "y" son números
  return resultadoSuma;// Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

suma(5,5);


function resta(x, y) {
  let resultadoResta = x - y// Resta "y" de "x" y devuelve el valor
  return resultadoResta;// Tu código:
}

resta(18,8);

function multiplica(x, y) {
  let resultadoMultiplicacion = x * y// Multiplica "x" por "y" y devuelve el valor
  return resultadoMultiplicacion;           // Tu código:
}

multiplica(5,4);


function divide(x, y) {
   let resultadoDivision = x / y// Divide "x" entre "y" y devuelve el valor
   return resultadoDivision;// Tu código:
}

divide(15,3);

function sonIguales(x, y) {
   if ( x === y ) {
    return true;
   }

   return false;
     // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
}
 
sonIguales(5,5)



function tienenMismaLongitud(str1, str2) {


  return str1.length === str2.length;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

tienenMismaLongitud("sandra","sandra")




function menosQueNoventa(num) {
   if (num < 90) {
     return true;
   }
   else {return false;}
    
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
}
menosQueNoventa(89);



function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  }

  else {
    return false;
  }
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}

mayorQueCincuenta(65);




function obtenerResto(x, y) {

  let resultadoModulo = x % y 
  return resultadoModulo;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}

obtenerResto(21,4);


function esPar(num) {

  if (num % 2 === 0) {
    return true;
  }

else{
  return false;
}
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
}

esPar(8);



function esImpar(num) {

if (num % 2 === 1) {
  return true;
}

else {
  return false;
}
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

esImpar(3);



function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}

elevarAlCuadrado(2);




function elevarAlCubo(num) {
  return num * num * num;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}
elevarAlCubo(3);



function elevar(num, exponent) {
  return Math.pow(num, exponent);
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}

elevar(8,4);



function redondearNumero(num) {
 
  let resto = num % 1;
  let entero = num - resto;
  if (resto >= 0.5) {
    return entero + 1 ;
  }

  else {
    return entero;
  }

  return Math.round(num);
}
 






function redondearHaciaArriba(num) {
  return Math.ceil(num);
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
}

redondearHaciaArriba(1.001);



function agregarSimboloExclamacion(str) {
  return str + '!';
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

agregarSimboloExclamacion("hello word");





function combinarNombres(nombre, apellido) {
   let compuesto = nombre + ' ' + apellido;
  return compuesto;
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

combinarNombres("jorge","gonzalez");






function obtenerSaludo(nombre) {

  return 'Hola ' + nombre + '!';
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}






function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
