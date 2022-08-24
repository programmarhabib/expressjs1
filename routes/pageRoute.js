const express = require('express');
const path = require('path')
const router = express.Router();
const {showHomepage, showAboutpage,showContactpage, showCartPage} = require('../controllers/pageController');
const {showagecal} = require('../controllers/helpercontroller');


// router create
router.get('/', showHomepage);
router.get('/about', showAboutpage)

router.get('/contact', showContactpage);
router.get('/cart', showCartPage);


router.post('/age-cal', showagecal);

// url data get
router.get('/currency/:dollar/:type', (reg, res) => {
    // res.status(200).json(res.params);
    const { dollar } = reg.params;
    res.status(200).send(reg.params)
})

module.exports = router;

