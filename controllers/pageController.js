
const path = require('path')
//Show Home page
const showHomepage = (reg, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public//index.html'))
}
/// About page controller
const showAboutpage = (reg, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public//about.html'))
}
/// Contact page controller
const showContactpage = (reg, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'))
}
// cart page controller
const showCartPage = (reg, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/cart.html'))
}
module.exports = {
    showHomepage,
    showAboutpage,
    showContactpage,
    showCartPage
}