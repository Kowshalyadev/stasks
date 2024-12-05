var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    fs.readFile("./data.text",(err,data)=>{
        if(err){
            res.write("something went wrong")
            res.end
        }
        else{
            res.write(data)
            res.end()
        }
    });
})
var port=3000;
server.listen(port,()=>{
    console.log("running"+port)
})