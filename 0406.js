// const array1 = [1,2];
// const array2 = array1;
// const array3 = [...array1];
// const array4 = [...array1,100];

// array1.push(3);

// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array4);

// const obj1 = {one:"1",two:"2"};
// const obj2 = {...obj1};
// const obj3 = {...obj1,hundred:"100"}

// console.log(obj3);

// const starwars = {
//     title: '새로운 희망',
//     year: 1977,
//     director: '조지 루카스'
//  }
 
//  // 객체 내 모든 키 배열
//  const keys = Object.keys(starwars);
//  for (const key of keys) {
//     const value = starwars[key];
//     console.log('prop : ', key, ' value :', value);
//  }
 
//  // 객체 내 키를 이용한 순회
//  console.log('For in');
//  for (const prop in starwars) {
//     console.log('prop : ', prop, ' value : ', starwars[prop]);
//  }


// 함수를 객체로서 취급가능 / 리턴값에 사용가능 / 파라미터로 사용가능
// function sayHello()
// {
//     console.log('Hello');
// }

// sayHello();
// const ggg = sayHello;
// ggg();

// function returnFunction()
// {
//     function innerFunction()
//     {
//         console.log('Hello,inside!');
//     }
//     return innerFunction;
// }

// const fn = returnFunction();
// fn();
 
// function add2(i,j,callback)
// {
//     callback(i+j);
// }

// function addResult(result)
// {
//     console.log("3+4="+result);
// }
// add2(3,4,addResult);

// //or

// add2(3,4,function(result){
//     console.log("3+4="+result);
// });

// function makeId()
// {
//     let lastId = 0;

//     return function()
//     {
//         return lastId++
//     };
// }

// // let idFunc = makeId();
// // const id1 = idFunc();
// // console.log(id1);
// // const id2 = idFunc();
// // console.log(id2);
 
// let idFunc1 = makeId();
// let idFunc2 = makeId();
// const a1 = idFunc1();
// const a2 = idFunc2();
// console.log(a1);
// console.log(a2);

// (function(){
//     console.log('I am free');
// })();

// //function 키워드로 정의
// function GoodMorning() {
//     console.log('good morning');
// }
// //Arrow Function으로 정의
// const goodnight = (who) =>{
//     console.log(`good night ${who}`);
// }

// GoodMorning();
// goodnight("chaeyeon");

// const array1 = [1,2,3,4];
// const mapped = array1.map( (element, index, array) => {
//     return element * 2;
// });
// console.log(mapped);

// const array = [1, 2, 3, 4];

// // Callback 함수 파라미터 : element, index, array
// const mappedArray = array.map( (element, index, array) => {
//     return element * 2;
// });

// console.log(mappedArray);
// // map의 결과는 배열, 원 배열과 원소의 개수가 같다.
// console.log('length equality :', array.length === mappedArray.length);


// // 객체의 배열 -> 문자열 배열로 변환
// const movies = [
//     {title: "새로운 희망", year: 1977},
//     {title: "제국의 역습", year: 1980},
//     {title: "제다이의 귀환", year: 1983}
// ]

// const titles = movies.map( a => a.title );
// console.log('titles :', titles);

const movies = [
    {title: "새로운 희망", year: 1977, us_gross: 460, ww_gross: 312},
    {title: "제국의 역습", year: 1980, us_gross: 290, ww_gross: 257},
    {title: "제다이의 귀환", year: 1983, us_gross: 166, ww_gross: 166},
    {title: "깨어난 포스", year: 2015, us_gross: 936, ww_gross: 1132},
    {title: "로그 원", year: 2016, us_gross: 532, ww_gross: 524},
    {title: "라스트 제다이", year: 2017, us_gross: 620, ww_gross: 713},
]

const totalGrossAfter2000 = movies
    .filter( item => item.year > 2000)
    .map( item => item.us_gross + item.ww_gross )
    .reduce( (prev, cur) => prev + cur );

console.log(totalGrossAfter2000);

//1주차 공부 끝@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@