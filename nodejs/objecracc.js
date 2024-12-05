var http=require("http");
var server=http.createServer((req,res)=>{
    let obj=[
        {
          Title: "The Lion King",
          Year: 2019,
          Runtime: "118 min",
          Poster: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
        },
        {
          Title: "Mowgli: Legend of the Jungle",
          Year: 2018,
          Runtime: "104 min",
          Poster: "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
        },
        {
          Title: "Doctor Strange",
          Year: 2016,
          Runtime: "115 min",
          Poster: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
          Title: "John Wick",
          Year: 2014,
          Runtime: "101 min",
          Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
        {
          Title: "The Notebook",
          Year: 2004,
          Runtime: "123 min"
        }
      ]
      if(req.method=="GET"){
        res.write(JSON.stringify(obj[0]))
        
      }
      else if(req.method=="POST"){
        res.write(JSON.stringify(obj[1]))
      }
      else if(req.method=="PUT"){
        res.write(JSON.stringify(obj[2]))
      }
      else if(req.method=="PATCH"){
        res.write(JSON.stringify(obj[3]))
      }
      else if(req.method=="DELETE"){
        res.write(JSON.stringify(obj[4]))
      }
      else{
        res.write("you must pick the correct method")
        res.end("completed")
      }
      res.end()
})
var port=3003;
server.listen(port,()=>{
    console.log("sever is runing"+"http://localhost:"+port)
})