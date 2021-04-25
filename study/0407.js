// const months = ['Jan','Feb','Wed','Fri'];
// const [first1,sec1ond] = months;
// console.log([first1,sec1ond]);


// const [jan,feb, ...after] = months;
// console.log([jan,feb, ...after]);

// const counting = { one: '일', two: '이', three: '삼', four: '사'};
// const one = counting.one;

// const {two, three} = counting;
// console.log(`two : ${two}, three : ${three}`);

// // 없는 원소 접근
// const {four, nine} = counting;
// console.log(`four : ${four}, nine : ${nine}`);

// // 이름 변경
// const {two: item} = counting;
// console.log('item :', item);

// // destructuring in Array
// const months = ['Jan', 'Feb', 'March', 'April', 'May'];

// const [first, second] = months;

// console.log('one :', first);
// console.log('two :', second);

// // 나머지 원소 바인딩
// const [jan, feb, ...afterFeb] = months;
// console.log('after Feb :', afterFeb);

// // 원소 바인딩 안하기
// const [ , , third] = months;
// console.log('third :', third);

// // 범위 벗어난 원소 접근 - 6번째
// const [, , , , , sixth] = months;
// console.log('sixth :', sixth);

// function showIt1(title, director) {
//     console.log(`showIt1 - 제목 : ${title}, 감독 : ${director}`);
// }

// showIt1('새로운 희망', '조지 루카스');

// function showIt2(arg) {
//     console.log(`showIt2 - 제목 : ${arg.title}, 감독 : ${arg.director}`);
// }

// const arg = {title: '제국의 역습', director: '어빈 커슈너'};
// showIt2(arg);

// // Object shorthand
// function showIt3({title, director}) {
//     console.log(`showIt3 - 제목 : ${title}, 감독 : ${director}`);
// }

// const title = '제다이의 귀환';
// const director = '리처드 마퀸드';
// showIt3({title, director});


// function getCharactorInfo() {
//     const character = '아나킨 스카이워커';
//     const actor = '헤이든 크리스텐슨';
//     return {character, actor}
// }

// const {character, actor} = getCharactorInfo();
// console.log(`character: ${character}, actor: ${actor}`);

// function sayHello(callback) {
//     callback();    
// }

// sayHello( () => {
//     console.log('say Hello');
// });

// function add(i, j, callback) {
//     const sum = i + j;
//     callback(sum);    
// }

// const ret = add(1, 2, (sum) => {
//     console.log(`1 + 2 = ${sum}`);
// });

// function bbaegi(i,j,cb)
// {
//     const dap = i-j;
//     cb(dap);
// }

// const aa = bbaegi(3,2,(dap) =>{
//     console.log(`3-2=${dap}`);
// });

// function justDoIt() {
//     setTimeout(() => {
//         console.log('just do it');
//     }, 1000);
// }

// justDoIt();
// console.log('== After justDoIt');

// function justDoIt(callback) {
//     setTimeout(() => {
//         callback();
//     }, 1000);
// }

// function add(i, j, callback) {
//     setTimeout(() => {
//         const sum = i + j;
//         callback(sum);
//     }, 1000);
// }

// justDoIt(() => {
//     console.log('just do it');
// });

// add(3, 4, (sum) => {
//     console.log(`3 + 4 = ${sum}`);
// })
// console.log('== The End');

//2주차 끝!@@@@

