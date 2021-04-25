// if(1>2)
// if(3<4)
// console.log("aaa");
// else
//     console.log("bbb");
// console.log("ccc");


let hour = 0;
function code(){
    hour++;
    console.log(hour);
}
module.exports={code};

// const test = {hour,code};
// module.exports = {
//     hour : 0,
//     code : function() {
//         this.hour++;
//         console.log(this.hour);
//     }
// };

// class Cat {
//     constructor(name){
//         this.name=name;
//     }
//     sleep(){
//         console.log(`${this.name}은 자고 있어용`);
//     }
// }

// module.exports = Cat;