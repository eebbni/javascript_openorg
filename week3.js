// const fsp = require('fs').promises;
// const filepath = __dirname + '/worldmap.JPG';

// fsp.access(filepath)
// .then((data)=>{
//     console.log('success:', !!data);
// })
// .catch(error =>{
//     console.log("err");
// });

// fsp.readFile(filepath)
// .then((data)=>{
//     console.log('file read success');
// })
// .catch((err)=>{
//     console.log('file read fail');
// });

// const fsp = require('fs').promises; //promise객체로 선언
// const filepath = __dirname + '/worldmaap.JPG';

// async function justdoIt(){
//     try
//     {
//         const data = await fsp.readFile(filepath);
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }

// justdoIt();

// const readline = require('readline');

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.on('line',(input)=>{
//     console.log("line event 실행",input);
// })

const fs = require('fs');
const path = './worldmap.JPG';

const fis = fs.createReadStream(path);

fis.on('data', (chunk) =>{
    console.log('dtat event',chunk.length);
})

fis.on('end', ()=>{
    console.log("끝!");
})