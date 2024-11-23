const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const cors=require('cors');
const db = require('./database/db.js');
db();
const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: Number,
    modelName: String,
    brand: String,
    price: Number,
    size:Number,
})
const userModel=mongoose.model('users',userSchema)

const app = express();
app.use(express.json());
app.use(cors());


app.get('/addtv', async function (req, res) {
    var record = await userModel.find();
    res.send(record);
})
app.post('/showtv', async function (req, res) { 
    var ans =  userModel(req.body);
    await ans.save();
    res.send("success");
    
})
app.delete('/deletetv/:id', async function (req, res) {
    
      await userModel.deleteOne({ id: req.params.id });
      res.send(req.params.id + "deleted");
    
})


app.listen(9000);
