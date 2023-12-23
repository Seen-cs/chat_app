const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const app = express();
const path = require('path');

const userRoutes = require("./routes/userRoute");
const conn = require("./utility/database.js");

conn();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/users', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'users', 'users.json');
    res.sendFile(filePath);
  });

const port = process.env.PORT;
app.use(userRoutes);

app.listen(port || 3000,()=>{
    console.log(`uygulama ${port} portunda çalışıyor`);
})
