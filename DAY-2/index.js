const express= require ("express")

const app = express()

app.get("/",(req,res)=>{
    console.log("starting the server page");
})

app

.get("/about",(req,res)=>{
    console.log("starting the about us page");
})

app.get("/home",(req,res)=>{
    console.log("starting the home page ");
})

app.get("/name",(req,res)=>{
    console.log("starting the user name page");
})

app.listen(5173,()=>{
    console.log("port running at 4000");
})