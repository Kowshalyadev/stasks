var http=require("http");
var server=http.createServer((req,res)=>{
  var firstname="kowshi"
  var lastname="gurram"
  var a="gjhgjhg"
  var text=`${firstname}\n${lastname}\n${a}`
  res.end(text)

  
})
var port=3001;
server.listen(port,()=>{
console.log("the server is strated"+port);
})
