const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// admin/add-item => GET
router.get('/add-products', (req, res, next) => {
   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// admin/add-item => POST
router.post('/add-products', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')   
})

module.exports = router;