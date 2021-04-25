// const http = require('http');
// const url = require('url');

// const port = 3000;

// const server = http.createServer( (req, res) => {
//    let result = {};

//    // URL 분석
//    console.log('req.url :', req.url);
//    const parsed = url.parse(req.url, true);
//    result.pathname = parsed.pathname
//    console.log('path :', parsed.path);
//    console.log('pathnamme :', parsed.pathname);
//    console.log('query :', parsed.query);


//    // URL중 query
//    result.query = parsed.query;

//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'application/json');
//    res.end(JSON.stringify(result));
// });

// server.listen(port, () => {
// 	console.log(`Server running at ${port}`);
// });

// const http = require('http');
// const server = http.createServer((req,res)=>{
//    res.setHeader('Content-Type','text/html');

//    const msg = 'Hello Node.js!';
//    res.write('<html>');
//    res.write('<body>');
//    res.write(`<h1>${msg}</h1>`);
//    res.write('</body>');
//    res.write('</html>');
//    res.end();
// });

// server.listen(3000,()=>{
//    console.log("서버 시작");
// });

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.method == 'GET') {
//         // 비디오 스트림
//         res.setHeader('Content-Type', 'video/mp4');
        
//         fs.createReadStream('movie/movie.mp4').pipe(res);
//         // 파일을 전체 읽는 것보다 스트림 처리가 유리
//         // fs.readFile(path, (err, data) => {
//         //     res.end(data);      
//         // });        
//     }
//     else {
//         res.statusCode = 400;
//         res.end();
//     }
// });
// server.listen(3000, () => {
//     console.log('server is running @3000');
// });

// const http = require('http');
// const fs = require('fs');
// const urlUtil = require('url');

// const server = http.createServer(async (req, res) => {
//     if (req.method == 'GET') {
//         const parsed = urlUtil.parse(req.url);
//         const path = __dirname + '/image' + parsed.pathname;
//         console.log('pathname : ', parsed.pathname, 'path :', path);
//         // 파일 접근 검사(콜백방식)
//         fs.access(path, (err) => {
//             if ( err ) {
//                 console.log('file not found');
//                 res.statusCode = 404;
//                 res.end();
//             }
//             else {
//                 fs.createReadStream(path).pipe(res);
//             }
//         });
//     }
//     else {
//         res.statusCode = 400;
//         res.end();
//     }
// });
// server.listen(3000, () => {
//     console.log('server is running @3000');
// });

//비동기 방식 - callback 기반 응답메세지 / promise 기반 응답메세지 에러처리

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
//5-3부터 시작