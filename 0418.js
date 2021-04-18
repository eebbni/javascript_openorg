// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');

//     const msg = "Hello Node js";
//     res.write("<html>");
//     res.write("<body>");
//     res.write(`<h1>${msg}</h1>`);
//     res.write("</body></html>");
//     res.end();
// });

// server.listen(3000);

// const http = require('http');
// const fs = require('fs');
// const urlUtil = require('url');

// const server = http.createServer((req,res)=> {
//     if(req.method == 'GET')
//     {
//         const parsed = urlUtil.parse(req.url);
//         const path = __dirname + '/image' + parsed.pathname;
//         fs.access(path, (err) =>{
//             if(err){
//                 console.log('file not found');
//                 res.statusCode(400);
//                 res.end();
//             }
//             else{
//                 fs.createReadStream(path).pipe(res);
//             }
//         });
//     }
//     else
//     {
//         res.statusCode = 400;
//         res.end();
//     }
// });
// server.listen(3000, ()=>{
//     console.log('server is listening @3000');
// });

// const http = require('http');
// const urlUtill = require('url');

// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');

//     const parsed = urlUtill.parse(req.url);
//     switch(parsed.pathname){
//         case '/image':
//             res.end("이미지 출력입니다");
//         break;
//         case '/movie':
//             res.end("영화 출력입니다");
//         break;
//     }
// });

// server.listen(3000);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'image/jpg');
//     fs.readFile('cat.jpg',(err,content)=>{
//         res.end(content);
//     });
// });

// server.listen(3000);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method == 'GET') {
//         // get이면 폼 목록 출력
//         fs.createReadStream('form.html').pipe(res);
//     }
//     else if (req.method == 'POST') {
//         const contentType = req.headers['content-type'];
//         console.log('content type : ', contentType);

//         if (contentType.startsWith('application/x-www-form-urlencoded')) {
//             res.end('url encoded 방식');
//         }
//         else if (contentType.startsWith('application/json')) {
//             res.end('JSON 방식');
//         }
//         else if (contentType.startsWith('multipart/form-data')) {
//             res.end('Multipart 방식');
//         }
//         else {
//             res.statusCode = 400;
//             res.end('분석할 수 없는 방식');
//         }
//     }
// });
// server.listen(3000, () => {
//     console.log('Server is running @ 3000');
// });

const expres = require('express');
const app = expres(); //express 객체 생성

app.listen(3000, () => {
    console.log("서버가 3000번으로 동작중");
});

app.use((req,res)=>{
    res.end("Hello world");
});