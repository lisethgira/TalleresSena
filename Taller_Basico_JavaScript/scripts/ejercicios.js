/*Ejercicio 1:  Convertir minutos a horas */
function convertToHours() {
    const minutes = parseInt(document.getElementById("minutes").value);
    const hours = minutes / 60;
    document.getElementById("result1").textContent = `${minutes} minutos son ${hours} horas.`;
}

/*Ejercicio 2:  Calcular la normal estándar (z) dados los datos por el usuario: X=dato, ƒÊ=media, d=desviación. Formula (Z = X-M / d) */
function calculateZ() {
    const dato = parseInt(document.getElementById("dato").value);
    const media = parseInt(document.getElementById("media").value);
    const desviacion = parseInt(document.getElementById("desviacion").value);
    const z = (dato - media) / desviacion;
    document.getElementById("result2").textContent = `Z = ${z}`;
}
/*Ejercicio 3: Convertir °C a °F.*/
function convertToFahrenheit() {
    const celsius = parseInt(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result3").textContent = `${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`;
}

/*Ejercicio 4: Si una empresa tiene cierta cantidad de activos y cierta cantidad de pasivos? Cuál es su capital?. Formula (C = A-P)*/
function calculateCapital() {
    const activos = parseInt(document.getElementById("activos").value);
    const pasivos = parseInt(document.getElementById("pasivos").value);
    const capital = activos - pasivos;
    document.getElementById("result4").textContent = `El capital es de ${capital}.`;
}

/*Ejercicio 5: Calcule la frecuencia de una onda que circula con un tiempo t. Formula (F=1/t)*/
function calculateFrequency() {
    const tiempo = parseInt(document.getElementById("tiempo").value);
    const frequency = 1 / tiempo;
    document.getElementById("result5").textContent = `La frecuencia es de ${frequency}.`;
}

/*Ejercicio 6:Calcule la potencia de un circuito con un voltaje V y una intensidad I. Formula (f = VI)*/
function calculatePower() {
    const voltaje = parseInt(document.getElementById("voltaje").value);
    const intensidad = parseInt(document.getElementById("intensidad").value);
    const power = voltaje * intensidad;
    document.getElementById("result6").textContent = `La potencia es de ${power} watts.`;
}

/*Ejercio 7: Calcule el total que tendrá que pagar una persona que va al cine dependiendo del número de boletos a comprar y el precio.*/
function calculateTotal() {
    const boletos = parseInt(document.getElementById("boletos").value);
    const precio = parseInt(document.getElementById("precio").value);
    const total = boletos * precio;
    document.getElementById("result7").textContent = `El total a pagar es de $${total}.`;
}

/*Ejercicio 8: Calcule las anualidades que tendrá que pagar una persona que pidió un préstamo. Dependiendo del tiempo que el elija y el interés 
por año. Formula (Anualidad=(Préstamo/Tiempo)+interés).*/
function calculateAnualidad() {
    const prestamo = parseInt(document.getElementById("prestamo").value);
    const tiempo = parseInt(document.getElementById("tiempo").value);
    const interes = parseInt(document.getElementById("interes").value);
    const anualidad = (prestamo / tiempo) * (1 + interes/100);
    document.getElementById("result8").textContent = `Las anualidades a pagar son de $${anualidad.toFixed(2)} por año.`;
  }

/*Ejercicio 9: Determinar cuánto ganara una persona en base a las horas trabajadas. Tomando en cuenta el pago por hora. */
function calculateSalary() {
    const horas = parseInt(document.getElementById("horas").value);
    const pago = parseInt(document.getElementById("pago").value);
    const salario = horas * pago;
    document.getElementById("result9").textContent = `El salario es de $${salario} por ${horas} horas trabajadas.`;
}

/*Ejercicio 10: Convertir horas a segundos. */
function convertToSeconds() {
  const horas = parseInt(document.getElementById("horas").value);
  const segundos = horas * 3600;
  document.getElementById("result10").textContent = `${horas} horas son ${segundos} segundos.`;
}

/*Ejercicio 11: Calcular la fuerza. Formula (fuerza = trabajo / tiempo)*/
function calculateForce() {
    const trabajo = parseInt(document.getElementById("trabajo").value);
    const tiempo = parseInt(document.getElementById("tiempo").value);
    const fuerza = trabajo / tiempo;
    document.getElementById("result11").textContent = `La fuerza es de ${fuerza} Newtons.`;
  }