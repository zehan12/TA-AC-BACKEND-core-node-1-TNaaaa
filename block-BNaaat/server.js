var http = require("http");

var fs = require("fs");

var server = http.createServer(handelRequest);

function handelRequest( req, res ){
    if ( req.method === 'GET' && req.url === '/file' ) {
        fs.readFile('./mode.html', ( err, content ) =>{
            console.log(content);
            console.log(error);
        })
    } else if ( req.method === 'GET' && req.url === '/stream' ) {
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./node.html').pipe(res);
    }
};

server.listen(5555, ()=>{
    console.log('server listening on port 5555');
})