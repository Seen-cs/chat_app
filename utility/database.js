const mongoose = require("mongoose");

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'blogDB',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to the DB successfully')
    }).catch((err) => {
        console.log(`DB connection err:, ${err}`)
    })
};

module.exports = conn;