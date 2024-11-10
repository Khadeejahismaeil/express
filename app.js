const express = require("express")

const app = express()

app.use("/", (req, res)=>{
    res.json({message: "Khadeeja"})
})

app.listen(8000, ()=> {
    console.log(`app is running on port 8000`);
    
})