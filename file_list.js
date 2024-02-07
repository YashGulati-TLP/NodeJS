const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files','hello1.txt');

// Ensure the 'files' directory exists
// if (!fs.existsSync(filePath)) {
//     fs.mkdirSync(filePath);
// }

// for (let i = 0; i < 7; i++) {
//     fs.writeFileSync(path.join(filePath, `hello${i}.txt`), "Text file only");
// }

const Content= fs.readFileSync(filePath,'utf8');
console.log(Content);