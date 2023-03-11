const fs = require('fs');
const file = fs.readFileSync('./people.json', 'utf-8');
const obj = JSON.parse(file);
console.log(obj.sayHello)