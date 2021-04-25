const cafeModel = require('../model/cafeModel');
const showCafeList = (req,res) => {
    const movieList = cafeModel.getCafeList();
    const result = {data:movieList, count:movieList.length};
    res.send(result);
}

const showCafeDetail = (res,req) => {

}

const addCafe = (res,req) => {

}

exports.cafeController = {
    showCafeList,
    showCafeDetail,
    addCafe
}