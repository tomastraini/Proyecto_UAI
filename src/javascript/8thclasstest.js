// ==========================
// 1. Variables y Operadores
// ==========================

// a)
let num1 = 5;
let num2 = 10;
let suma = num1 + num2;
console.log("1.a) Suma:", suma);

// b)
let str1 = "Hola";
let str2 = "Mundo";
let strConcat = str1 + " " + str2;
console.log("1.b) Concatenación:", strConcat);

// c)
let palabra1 = "Javascript";
let palabra2 = "Programación";
let sumaLargos = palabra1.length + palabra2.length;
console.log("1.c) Suma de largos:", sumaLargos);


// ===============
// 2. Strings
// ===============

// a)
let texto = "javascript es genial";
let mayus = texto.toUpperCase();
console.log("2.a)", mayus);

// b)
let primeros5 = texto.substring(0, 5);
console.log("2.b)", primeros5);

// c)
let ultimos3 = texto.substring(texto.length - 3);
console.log("2.c)", ultimos3);

// d)
let primeraMayus = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log("2.d)", primeraMayus);

// e)
let textoConEspacio = "Hola mundo!";
let posicionEspacio = textoConEspacio.indexOf(" ");
console.log("2.e) Posición del espacio:", posicionEspacio);

// f)
let dosPalabras = "programacion JAVASCRIPT";
let espacio = dosPalabras.indexOf(" ");
let palabraA = dosPalabras.substring(0, espacio);
let palabraB = dosPalabras.substring(espacio + 1);
let capitalizado = 
    palabraA.substring(0, 1).toUpperCase() + palabraA.substring(1).toLowerCase() + " " +
    palabraB.substring(0, 1).toUpperCase() + palabraB.substring(1).toLowerCase();
console.log("2.f)", capitalizado);


// ===============
// 3. Arrays
// ===============

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
              "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a)
console.log("3.a)", meses[4], meses[10]);

// b)
console.log("3.b) Orden alfabético:", meses.slice().sort());

// c)
meses.unshift("Inicio");
meses.push("Fin");
console.log("3.c)", meses);

// d)
meses.shift();
meses.pop();
console.log("3.d)", meses);

// e)
meses.reverse();
console.log("3.e)", meses);

// f)
let mesesString = meses.join("-");
console.log("3.f)", mesesString);

// g)
let mayoANoviembre = meses.slice(4, 11);
console.log("3.g)", mayoANoviembre);


// ===============
// 4. If Else
// ===============

// a)
let randomNum = Math.random();
if (randomNum >= 0.5) {
    alert("4.a) Greater than 0.5");
} else {
    alert("4.a) Lower than 0.5");
}

// b)
let age = Math.floor(Math.random() * 101); // número aleatorio 0-100
console.log("4.b) Edad generada:", age);

if (age < 2) {
    alert("Bebé");
} else if (age <= 12) {
    alert("Niño");
} else if (age <= 19) {
    alert("Adolescente");
} else if (age <= 30) {
    alert("Joven");
} else if (age <= 60) {
    alert("Adulto");
} else if (age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}


// ===============
// 5. For
// ===============

// a)
let palabras = ["sol", "luna", "estrella", "planeta", "galaxia"];
for (let i = 0; i < palabras.length; i++) {
    alert("5.a) " + palabras[i]);
}

// b)
for (let i = 0; i < palabras.length; i++) {
    let palabraMod = palabras[i].substring(0,1).toUpperCase() + palabras[i].substring(1).toLowerCase();
    alert("5.b) " + palabraMod);
}

// c)
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert("5.c) " + sentence.trim());

// d)
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("5.d) Array final:", numeros);


// ===============
// 6. Funciones
// ===============

// a)
function sumaFn(a, b) {
    return a + b;
}
let resultado = sumaFn(5, 7);
console.log("6.a) Resultado:", resultado);

// b)
function sumaValidada(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("6.b) Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}
console.log("6.b)", sumaValidada(5, "x"));

// c)
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log("6.c)", validateInteger(10.5));

// d)
function sumaEnteros(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("6.d) Error: parámetro no numérico");
        return NaN;
    }
    if (!Number.isInteger(a)) {
        alert("6.d) Primer número con decimales, redondeando");
        a = Math.round(a);
    }
    if (!Number.isInteger(b)) {
        alert("6.d) Segundo número con decimales, redondeando");
        b = Math.round(b);
    }
    return a + b;
}
console.log("6.d)", sumaEnteros(3.7, 4.2));

// e)
function validarYRedondear(num) {
    if (!Number.isInteger(num)) {
        alert("6.e) Número con decimales, redondeando");
        return Math.round(num);
    }
    return num;
}

function sumaConValidacion(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("6.e) Error: parámetro no numérico");
        return NaN;
    }
    a = validarYRedondear(a);
    b = validarYRedondear(b);
    return a + b;
}

console.log("6.e)", sumaConValidacion(2.8, 5.3));
