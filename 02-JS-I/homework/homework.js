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
  // "Return" la string provista: str
  // Tu código:
  return nombre
}
devolverString('sandra');


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
   // Tu código:
  let resultadoSuma =  x + y
  return resultadoSuma;
 
}

suma(5,5);


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resultadoResta = x - y
  return resultadoResta;
}

resta(18,8);

function multiplica(x, y) {
// Multiplica "x" por "y" y devuelve el valor
// Tu código:
  let resultadoMultiplicacion = x * y
  return resultadoMultiplicacion;           
}

multiplica(5,4);


function divide(x, y) {
// Divide "x" entre "y" y devuelve el valor
// Tu código:
   let resultadoDivision = x / y
   return resultadoDivision;
}

divide(15,3);


function sonIguales(x, y) {
// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:
   if ( x === y ) {
    return true;
    
   }

   return false;
      
}
 
sonIguales(5,5)



function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length == str2.length;
}

tienenMismaLongitud("sandra","sandra")




function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
   if (num < 90) {
     return true;
   }
   else {return false;}
    
}

menosQueNoventa(89);



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  }

  else {
    return false;
  }
  
}

mayorQueCincuenta(65);




function obtenerResto(x, y) {
 // Obten el resto de la división de "x" entre "y"
// Tu código:
  let resultadoModulo = x % y 
  return resultadoModulo;
  
}

obtenerResto(21,4);


function esPar(num) {
// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
  if (num % 2 === 0) {
    return true;
  }

else{
  return false;
}
  
}

esPar(8);



function esImpar(num) {
// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
if (num % 2 === 1) {
  return true;
}

else {
  return false;
}
  
}

esImpar(3);



function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
  
}

elevarAlCuadrado(2);




function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num * num * num;
  
}

elevarAlCubo(3);



function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
  
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
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
  
}

redondearHaciaArriba(1.001);



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
  
}

agregarSimboloExclamacion("hello word");





function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
   let compuesto = nombre + ' ' + apellido;
  return compuesto;
  
}

combinarNombres("jorge","gonzalez");






function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola ' + nombre + '!';
  
}



function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
  
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
