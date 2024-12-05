var http=require("http")
var url=require("url")
var server=http.createServer((req,res)=>{
    var parsed=url.parse(req.url)
    console.log(parsed.url)
})
var port=3002
server.listen(port,()=>{
    console.log("started server "+port)
})
