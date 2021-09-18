const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/coures_dev');
        console.log("Connect successfully!!!")
    } catch (error) {
        console.log("Connect failure!!!")
    }
}

module.exports = { connect };
