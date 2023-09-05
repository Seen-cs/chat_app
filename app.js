const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const app = express();

const userRoutes = require("./routes/userRoute");
const conn = require("./utility/database.js");

conn();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT;
app.use(userRoutes);

app.listen(port,()=>{
    console.log(`uygulama ${port} portunda çalışıyor`);
})
