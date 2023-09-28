const express =  require("express");
require('../src/db/conn');

const mensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

//create using postman
app.post("/mens", async(req, res)=>{
  try{
    const addingMensRecord= new mensRanking(req.body)
    console.log(req.body) 
    addingMensRecord.save();
  }catch(e){
    res.send('EROORRRR', error);
  };
});

app.get("/", async(req, res)=>{
  res.send("HELLO....")
})

app.listen(port, ()=>{
  console.log(`Connectio is live at port no. ${port}`)
})