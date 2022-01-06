const { fstat } = require('fs');
const http=require('http')
const port=3000
const server= http.createServer(function(req,res){
    console.log('request was made:'+ req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-Type':'text/html'});
        res.write(`{"text": "Hello world"}`)
        res.end()
    }
    else  if(req.url === '/about'){
        res.writeHead(200, {'content-Type':'text/html'});
        res.write(`{"text": "About world"}`)
        res.end()
    }

})
server.listen(port,function(error) {
    if (error){
console.log('oops,wrong!!',error)
    } else{
console.log('server is active'+port)
    }
})