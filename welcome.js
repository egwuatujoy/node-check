
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});

const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from file:', data);
});
