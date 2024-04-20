const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.json({name: "Ahmad"});
})
app.get("/input/:name", (req, res)=>{
    res.json({name: req.params.name});
})
app.listen(9000, ()=>{
    console.log("server is running on 9000")
})