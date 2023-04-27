const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const catagoris = require('./datas/categories.json')
const news = require('./datas/news.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('The-dragon-server is Running')
})

app.get('/catagoris',(req,res)=>{
    res.send(catagoris)
})
// 1. All News Send Tips
app.get('/news',(req,res)=>{
    res.send(news)
})

// 2. Specific One Items By Using Id
app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    const SelectedNews = news.find(n => n._id===id);
    // console.log(SelectedNews); 
    res.send(SelectedNews)
})

// 3.Categories Way News 

app.get('/catagoris/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoriesNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoriesNews)
    }
})
app.listen(port,()=>{
    console.log(`Dragon server APi On Port:${port}`);
})