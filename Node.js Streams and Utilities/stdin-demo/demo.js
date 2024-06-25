const fs = require('fs');

const writer = fs.createWriteStream('./output.txt');

process.stdin.on('data', (chunk) => {
    writer.write(chunk.toString());
});