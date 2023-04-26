const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('The-dragon-server is Running')
})

app.listen(port,()=>{
    console.log(`Dragon server APi On Port:${port}`);
})