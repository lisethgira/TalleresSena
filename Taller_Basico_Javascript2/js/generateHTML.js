const fs = require('fs');

for (let i = 1; i <= 51; i++) {
  const filename = `ejercicio${i}.html`;
  const content = `<html><head><title>Ejercicio ${i}</title></head><body><h1>Ejercicio ${i}</h1></body></html>`;

  fs.writeFileSync(filename, content, 'utf8');
  
  console.log(`Se ha creado el archivo ${filename}`);
}