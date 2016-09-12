const fs = require('fs');

setTimeout(() => console.log('1'), 1000);
setTimeout(() => console.log('2'), 1000);
setTimeout(() => console.log('3'), 1000);
setTimeout(() => console.log('4'), 1000);

fs.readFile(__dirname + '/priority.js', 'utf8', (error, data) => {
    console.log('Load file');
});

const t = Date.now() + 2000;
while (t > Date.now()) {}
