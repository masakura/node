const fs = require('fs');

setTimeout(() => {}, 1000);
fs.readFile(__dirname + '/../out/Release/node', 'utf8', () => {});
