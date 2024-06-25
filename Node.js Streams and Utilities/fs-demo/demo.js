const fs = require('fs');

//read file
// const data = fs.readFile('./fs-demo/demo.html');
// console.log(data.toString());

//read file-asynchronous way
// const data = fs.readFile('./fs-demo/demo.html', (err, data) => {
//     if(err != null){
//         //handle error
//         return;
//     }
//     console.log(data.toString());
// });

//write file
// const data = [1, 2, 3, 4];
// fs.writeFileSync('./fs-demo/data.js', JSON.stringify(data));

//write file-asynchronous way
const data = [1, 2, 3, 4];
fs.writeFile('./fs-demo/data.json', JSON.stringify(data), (err) => {
    console.log("Write completed!");
});
console.log('Code completed!');