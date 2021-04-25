const fs = require('fs');

const data = fs.readFileSync('./model/data.json');
let cafes = JSON.parse(data);
console.log('data loaded');

exports.getCafeList = () => {
    if(cafes)
    {
        return cafes;
    }
    else
    {
        return 
    }
}