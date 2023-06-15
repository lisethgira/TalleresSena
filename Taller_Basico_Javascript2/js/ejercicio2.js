const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let A = 0;
let B = 0;

function solicitarValores() {
  rl.question('Ingrese el primer valor: ', (inputA) => {
    A = parseInt(inputA);
    rl.question('Ingrese el segundo valor: ', (inputB) => {
      B = parseInt(inputB);

      if (A === B) {
        console.log('Los valores deben ser distintos. Vuelva a ingresarlos.\n');
        solicitarValores();
      } else {
        if (A > B) {
          console.log(A + ' es el mayor.');
        } else {
          console.log(B + ' es el mayor.');
        }
        rl.close();
      }
    });
  });
}



function compararValores() {
    const valorA = parseInt(document.getElementById('valorA').value);
    const valorB = parseInt(document.getElementById('valorB').value);
  
    if (isNaN(valorA) || isNaN(valorB)) {
      document.getElementById('resultado').textContent = 'Ingrese valores numéricos válidos.';
    } else {
      if (valorA === valorB) {
        document.getElementById('resultado').textContent = 'Los valores deben ser distintos.';
        document.getElementById('valorA').value = '';
        document.getElementById('valorB').value = '';
      } else if (valorA > valorB) {
        document.getElementById('resultado').textContent = valorA + ' es el mayor.';
      } else {
        document.getElementById('resultado').textContent = valorB + ' es el mayor.';
      }
    }
  }

  solicitarValores();
  compararValores();



