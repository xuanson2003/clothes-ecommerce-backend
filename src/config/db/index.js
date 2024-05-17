const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://doxuanson12b2003:XuanSon0805@cluster0.omgrzfm.mongodb.net/e-commercet');
        console.log('Connect success!!!');
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connect };
