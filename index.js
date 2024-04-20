const express = require('express');
const app = express();

app.get("/api", (req, res)=>{
    res.json({name: "Ahmad"});
})

app.listen(9000, ()=>{
    console.log("server is running on 9000")
})