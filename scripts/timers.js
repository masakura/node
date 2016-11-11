const fs = require('fs');

const i1 = setInterval(() => {console.log('interval500'); clearInterval(i1);}, 500);
setTimeout(() => console.log('timeout500'), 500);
setImmediate(() => console.log('immediate1'));
fs.readFile(__dirname + '/timers.js', 'utf8', () => console.log('readFile1'));
setImmediate(() => console.log('immediate2'));
setTimeout(() => console.log('timeout400'), 400);
const i2 = setInterval(() => {console.log('interval400'); clearInterval(i2);}, 400);
fs.readFile(__dirname + '/timers.js', 'utf8', () => console.log('readFile2'));

const last = Date.now() + 600;
while (Date.now() <= last) {}
