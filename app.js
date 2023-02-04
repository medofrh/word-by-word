const express = require ("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.use(function(req,res){
    res.sendStatus(404);
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })