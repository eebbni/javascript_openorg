const fsp = require('fs').promises; // promise를 리턴값에 반환
const filePath = __dirname + '/worldmap.JPG';

// fsp.access(filePath)
// .then(() => {
//     console.log('success');
//     return fsp.readFile(filePath,'UTF-8');
// })
// .then( ret =>  {
//     console.log('can readfile : ' + ret.length);
// })
// .catch( (error) => {
//     console.log('err');
// })//모든 promise의 예외처리를 맡고있음. 비동기 함수 작동중에 오류가 나면 무조건 여기로 옴.

// // funcion task() {
// //     reutrn new Promise((resolve,reject) => { //성공했을땐 resolve함수 호출, 실패했을땐 reject함수 호출(성공했을때 실행할 함수는 앞에, 실패했을때 실행할 함수는 뒤에 파라미터로)
// //         console.log('Task started');
// //         setTimeout( () => {
// //             resolve('Succes'); //성공했을때 resolve함수에 Success 문자 전달
// //         },1000);
// //     });
// // }

async function asyncTask(filePath) {
    try{
        const result = await fsp.readFile(filePath);
        console.log('result :',result);
    } catch(error) {
        console.log('error :',error);
    }
}

asyncTask(filePath);
//3주차 끝