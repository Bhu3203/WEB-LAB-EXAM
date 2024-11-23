const mongoose = require('mongoose');

async function dbconnect() {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Tv");
    return connection;
}
module.exports = dbconnect;