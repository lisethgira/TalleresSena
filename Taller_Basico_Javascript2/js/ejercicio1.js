const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaVolumen() {
    // Obtener los valores del radio y la altura del formulario
    let radio = parseFloat(document.getElementById("radio").value);
    let altura = parseFloat(document.getElementById("altura").value);
  
    // Calcular el volumen y el área
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    let area = 2 * Math.PI * radio * (radio + altura);
  
    // Mostrar los resultados en los elementos de salida
    document.getElementById("resultadoArea").textContent = area.toFixed(2);
    document.getElementById("resultadoVolumen").textContent = volumen.toFixed(2);
  }

// 1. Inicio
// 2. Declaración de variables R=0, H=0
let R = 0;
let H = 0;

// 3. Leer el valor de Radio (R) y Altura (H)
rl.question("Ingrese el valor del radio (R): ", (answerR) => {
  R = parseFloat(answerR);
  rl.question("Ingrese el valor de la altura (H): ", (answerH) => {
    H = parseFloat(answerH);

    // 4. Calcular el Volumen aplicando la fórmula
    const volumen = Math.PI * Math.pow(R, 2) * H;

    // 5. Calcular el valor del área aplicando la fórmula respectiva
    const area = 2 * Math.PI * R * (R + H);

    // 6. Escribir el valor del área y del volumen en la consola
    console.log("El área del cilindro es: " + area.toFixed(2));
    console.log("El volumen del cilindro es: " + volumen.toFixed(2));

    // 7. Fin
    rl.close();
  });
});

