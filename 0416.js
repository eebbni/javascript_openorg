//npm init -y
//package.json 파일 생성

// //커스텀 모듈
// const me = require('./0415.js');
// me.code();

// //동적분해할당(export가 객체로 넘어왔기 때문에 {}형태로 다시 접근가능(이름은 똑같아야함))
// const {code} = require('./0415.js');
// code();

// const you = require('./0415.js');
// you.code();

const {code} = require('./0415.js');
code();

// const Cat11 = require('./0415.js');
// const dog = new Cat11("야옹");
// dog.sleep();