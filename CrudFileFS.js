const fs = require('fs');
//writefile
fs.writeFileSync('hello.txt','helllllelelle');
//Readfile
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File contents:", data);
    }
});

//Update

fs.writeFile('hello.txt', 'Updated data', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File updated successfully.");
    }
});
// delete 
fs.unlink('hello.txt', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File deleted successfully.");
    }
});