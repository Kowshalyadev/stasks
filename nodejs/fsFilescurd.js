var http=require("http")
var fs=require("fs")
const { error } = require("console")
var server=http.createServer((req,res)=>{
    if(req.method=="GET"){
        fs.readFile("./ball_inside_box.html",(err,data)=>{
            if(err){
                res.write("something went wrong")
                res.end
            }
            else{
                res.write(data)
                res.end()
            }
        });
    }
    else if(req.method=="POST"){
        fs.writeFile("./weekly_table.html","I am using writefiles",(err,data)=>{
            if(err){
                res.write("something went wrong")
                res.end
            }
            else{
                res.write(JSON.stringify(data))
                res.end()
            }
        });
    }
   
})
var port=3008;
server.listen(port,()=>{
    console.log("running"+port);
    
})