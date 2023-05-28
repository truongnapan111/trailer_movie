const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/wed_film', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Succes');
    } catch (error) {
        console.log('Error');
    }
}

module.exports = { connect };
