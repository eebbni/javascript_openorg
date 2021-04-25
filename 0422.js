/**
 * 메세지 바디 분석
 */

//  const express = require('express');
//  const bodyParser = require('body-parser');
 
//  const app = express();
//  app.listen(3000);
 
//  // urlencoded 바디파서.
//  app.use(bodyParser.urlencoded({ extended: false }))
 
//  app.post('/', (req, res) => {
//    // title 의 값을 콘솔에 출력
//    const title = req.body.title;
//    const message = req.body.message;
   
//    console.log("title : " + title);  
//    console.log("message : " + message);
 
//    if ( title && message ) {
//       res.send({result:'Success', title:title, message:message});
//    }
//    else {
//       res.status(400).send({result:'Failures', message:'Can not get title, message from body'});
//    }
//  });
 
//  app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/urlencoded_index.html');
//  });
 
// /**
//  * 메세지 바디
//  */
//  const express = require('express');
//  const bodyParser = require('body-parser');
 
//  const app = express();
//  app.listen(3000);
 
//  // urlencoded/json 동시 사용 가능
//  // urlencoded 바디파서.
//  app.use(bodyParser.urlencoded({ extended: false }))
//  // application/json 바디파서
//  app.use(bodyParser.json());
 
//  app.post('/', function (req, res) {
//    // title 의 값을 콘솔에 출력
//    const title = req.body.title;
//    const message = req.body.message;
   
//    console.log("title : " + title);  
//    console.log("message : " + message);
   
//    res.setHeader('Content-Type', 'text/plain');
//    res.end(JSON.stringify(req.body));
//  });
 
// /**
//  * 에러 담당 미들웨어 예제
//  */

//  const express = require('express');
//  const app = express();
 
//  // 미들웨어에서 에러 발생 - 전달
//  app.get('/error1', (req, res, next) => {
//     next('Error1 발생');
//  });
 
//  app.get('/error2', (req, res, next) => {
//     next(10032);
//  });
 
//  app.get('/error3', (req, res, next) => {
//     next({code: 10033, msg: '에러 발생'});
//  });
 
//  // 에러 타입으로 다루기
//  app.get('/error4', (req, res, next) => {
//     const error = new Error('에러 메세지');
//     next(error);
//  });
 
//  class ValidationError extends Error {
//     constructor(message, code) {
//         super(message);
//         this.code = code;
//     }
//  }
 
//  app.get('/error5', (req, res, next) => {
//     const error = new ValidationError('에러 메세지', 3009);
//     next(error);
//  });
 
//  // 에러가 발생하지 않는 상황
//  app.get('/normal', (req, res, next) => {
//     res.send('Error Handling Example');
//  });
 
//  // 에러 처리
//  app.use( (err, req, res, next) => {
//     if ( err instanceof ValidationError ) {
//        console.log('Validation Error');
//     }
//     else {
//        console.log(err);
//     }
//     res.status(500).send({msg:err});
//  });
 
//  app.listen(3000);
 
 