// const express =  require('express');
// const app = express();

// app.use((req,res,next) => {
//     console.log("1");
//     req.data = "dadaadadad";
//     next();
// })

// app.use( (req,res) => {
//     console.log("2");
//     const dat = req.data;
//     res.send('OK'+dat);
// })

// app.listen(3000);

//비동기 api와 미들웨어 ver.promise async await
// const express =  require('express');
// const app = express();
// app.listen(3000);

// function cb(callback) {
//     setTimeout(() => {
//         let result = Math.round(Math.random() * 1000);
//         callback(null, result);
//     },3000);
// }

// function pm() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             let result21 = Math.round(Math.random() * 1000);
//             resolve(result21);//문제 없이 성공했을 떄 result21값을 리턴함
//         }, 3000);
//     });
// }

// app.get('/cb',(req,res)=>{
//     cb((err,result)=>{
//         if(err)
//         {
//             res.status(500);
//             res.send("에러났음ㅠ");
//             return;
//         }
//         res.send(`cb로 들어왔어요 : ${result}`);
//     });
// });

// app.get('/pm',(req,res)=>{
//     pm().then((result1)=>{ //여기 파라미터는 성공했을때 리턴해주는 값
//         res.send(`pm으로 들어왔어요 : ${result1}`);
//     }).catch((err)=>{ //여기는 에러났을 때 리턴해주는 값
//         res.status(500).send(`Error with ${err}`);
//     });
// });

// app.get('/await',async (req,res) => {
//     try
//     {
//         const result = await pm();
//         res.send(`OK with ${result}`);    
//     }
//     catch(e)
//     {
//         res.status(500).send(`Error with ${e}`);
//     }
// });

//20분부터 시작 라우터 복습 ㄱㄱ