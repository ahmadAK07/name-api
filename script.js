const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.json({name: "Ahmad"});
})

app.listen(3000, ()=>{
    console.log("server is running on 3000")
})