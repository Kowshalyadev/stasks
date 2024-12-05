const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello wrold");
});
app.get("/basichtml",(req,res)=>{
    res.sendFile("./basichtml.html",{root:__dirname})
})
app.listen(3000,()=>{
    console.log("server is runing")
})