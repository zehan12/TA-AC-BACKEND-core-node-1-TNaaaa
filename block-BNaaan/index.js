var http = require("http");

var server = http.createServer(handelRequest);

function handelRequest( req, res ){
    console.log(req.headers);
    console.log(req.method)
    console.log(req.url)
    // res.end('Welcome')
}

server.listen(3000,()=>{
    console.log('server is listening on port 3000');
})