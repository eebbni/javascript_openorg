const express = require('express');
const router = express.Router();
const {cafeController} = require('../controller/CafeController');

router.get('/cafes',cafeController.showCafeList);
router.get('/cafes/:cafeId',cafeController.showCafeDetail);
router.post('/cafes',cafeController.addCafe);

module.exports = router;