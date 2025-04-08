const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.end("Hello world from B42....")
})

const port = 8000

fs.mkdir('myFile',(err)=>{
    if(err){
        return console.error('Error creating directory:',err)
    }
    console.log('Directory "myFile" created successfully');
})

const dirPath = path.join(__dirname, 'myFile');
const filePath = path.join('myFile','example.txt')

fs.writeFile(filePath,"hello from example.txt insidde the myFile directory.....",(err)=>{
    if(err){
        return console.error('Error writing to file:',err);
    }
    console.log('File "example.txt" created and content written successfully');
})

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading the file:', err);
    }
    console.log('Content of example.txt:\n', data);
});

fs.appendFile(filePath, '\nThis is some appended content.', (err) => {
    if (err) {
        return console.error('Error appending to the file:', err);
    }
    console.log('Content appended successfully!');

    // Now read the file again to verify
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading the file:', err);
        }
        console.log('\nUpdated content of example.txt:\n', data);
    });
});

const newFilePath = path.join(dirPath,'renamedExample.txt');
fs.rename(filePath, newFilePath, (err) => {
    if (err) return console.error('Error renaming file:', err);
    console.log('File renamed to "renamedExample.txt" inside myFile folder');
});

fs.unlink(newFilePath,(err)=>{
    if (err) throw err;
    console.log('file deleted')
})

fs.rm(dirPath,{recursive:true,force:true},(err)=>{
    if(err) throw err;
    console.log('Directory deleted')
})

server.listen(port, () => {
    console.log(`Server started.... http://localhost:${port}`)
})