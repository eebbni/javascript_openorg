// let hour = 0;
// function code(){
//     hour++;
//     console.log(hour+'시간 째 코딩 중');
// }

// module.exports = {hour, code};

// module.exports = {
//     hour : 0,
//     code : function(){
//         this.hour++;
//         console.log(this.hour,'시간 째 코딩중');
//     }
// }

class Cat{
    constructor(name){
        this.name = name;
    }
    sleep() {
        console.log(`cat ${this.name} sleeps`);
    }
};

module.exports = Cat;