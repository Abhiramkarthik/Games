import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("open.ejs");
})

app.get("/main",(req,res)=>{
    res.render("main.ejs");
})

app.get("/simon",(req,res)=>{
    res.render("Simon.ejs");
})


app.get("/dice",(req,res)=>{
    res.render("dicee.ejs");
})

app.get("/drum",(req,res)=>{
    res.render("Drum.ejs");
})

app.get("/ttt",(req,res)=>{
    res.render("ttt.ejs");
})

app.listen(port,()=>
{
    console.log(`Listening to the port:${port}`);
})