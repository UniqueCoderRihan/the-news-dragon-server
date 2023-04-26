const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const catagoris = require('./datas/categories.json')
const news = require('./datas/news.json')

app.get('/',(req,res)=>{
    res.send('The-dragon-server is Running')
})

app.get('/catagoris',(req,res)=>{
    res.send(catagoris)
})

app.get('/news',(req,res)=>{
    res.send(news)
})

app.listen(port,()=>{
    console.log(`Dragon server APi On Port:${port}`);
})