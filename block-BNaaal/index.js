var http = require("http");


// http.createServer(( request, response )=>{
//     console.log(request,response)
// }).listen(4000,"localhost");

var server = http.createServer(handelRequest);

function handelRequest( req, res ) {
    // handel request
    res.end('Welcome');
}

server.listen(4000,()=>{
    console.log('Server listening on port 4000');
})