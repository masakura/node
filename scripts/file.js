const fs = require('fs');

fs.readFile(__dirname + '/../out/Release/node', 'utf8', () => { console.log('read'); });
