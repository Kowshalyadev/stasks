const { log } = require("console")
var http=require("http")
var url=require("url")//these is module
var server=http.createServer((req,res)=>{
    // console.log(req.method);
    
    // console.log(req.url)//we will get params in url moudel there is on method "parse()"-->these method is understand these on is params
    let parsed=url.parse(req.url,true)
    console.log(parsed)
    console.log(parsed.pathname.split("/")[parsed.pathname.length-1])
    console.log(parsed.pathname);
    console.log(parsed.pathname.length);
    
    
    res.end(JSON.stringify(parsed.query))
})
let port=3006
server.listen(port,()=>{
    console.log("server is strated "+port)
})