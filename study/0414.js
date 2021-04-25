const fs = require('fs');
const filePath = __dirname + '/worldmap.jpg';

fs.readFile(filePath,'utf-8',(err,dat) => {
    console.log("result: " + dat.length);
});
//한번에 다 가지고 와서 파일을 읽음

const fis = fs.createReadStream(filePath);

fis.on('data',(chunk1) => {
    console.log("file data : " + chunk1.length);
});//버퍼 즉, 필요한 만큼 조금씩 가져와서 읽음.

fis.on('end',() => {
    console.log('끝!');
})