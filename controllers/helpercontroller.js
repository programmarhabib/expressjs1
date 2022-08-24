const path = require('path');

const showagecal = (reg, res) => {
    //get form data
    const { name, age } = reg.body;
    if (age>=21) {
        res.status(200).send(`Hi ${name}. tomar biyer boso hoyese`);
    } else {
        res.status(400).send(`Hi ${name}. tomar biyer bosoy  hoi nai`);
    }
}

module.exports = {
    showagecal
}