const fs = require('fs');

for (let i = 1; i <= 51; i++) {
  const filename = `ejercicio${i}.js`;
  const content = `console.log("Ejercicio ${i}");`;

  fs.writeFileSync(filename, content, 'utf8');
  
  console.log(`Se ha creado el archivo ${filename}`);
}