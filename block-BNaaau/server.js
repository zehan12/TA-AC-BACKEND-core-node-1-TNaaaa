var http = require("http");

var url = require('url');

// //! port 5000
// var server5000 = http.createServer(handelRequest5000);

// function handelRequest5000( req, res ){
//     console.log(req);
//     console.log(res);
//     res.end("Welcome to Server 5000")
// };

// server5000.listen(5000,()=>{
//     console.log("server listening on port 5000");
// });


// //! port 5100
// var server5100 = http.createServer(handelRequest5100);

// function handelRequest5100( req, res ){
//     res.setHeader('Content-Type','text/plain');
//     res.end('My first server is NodeJS');
// };

// server5100.listen(5100,()=>{
//     console.log("server listening on port 5100");
// });

// //! port 5555
// var server5555 = http.createServer(handelRequest5555);

// function handelRequest5555( req, res ){
//     console.log(req.headers);
//     console.log(req.headers['user-agent']);
//     res.setHeader('Content-Type','text/plain');
//     res.end(`${req.headers['user-agent']}`);
// }

// server5555.listen(5555,()=>{
//     console.log('server listening on port 5555')
// });

//! port 5566
// var server5566 = http.createServer(handelRequest5566);

// function handelRequest5566( req, res ){
//     res.setHeader("Content-Type",'text/plain');
//     console.log(req.methods, req.url);
//     res.write(req.url)
//     res.end("port 5566");
// };

// server5566.listen( 5566,()=>{
//     console.log('server listening on port 5566')
// });

// //! port 7000
// var server7000 = http.createServer(handelRequest7000);

// function handelRequest7000( req, res ){
//     console.log(req.headers);
//     res.setHeader('Content-Type','text/plain');
//     res.end(JSON.stringify( req.headers))
// }

// server7000.listen( 7000, ()=>{
//     console.log("server listening on port 7000");
// });

// //! port 3000
// var server3000 = http.createServer(handelRequest3000);

// function handelRequest3000( req, res ){
//     res.statusCode = 201;
//     res.end(`res.statusCode is ${res.statusCode}`)
// }

// server3000.listen(3000, ()=>{
//     console.log("server listening on port 3000");
// })

// //! port 8000
// var server8000 = http.createServer(handelRequest8000);

// function handelRequest8000( req, res ){
//     res.setHeader('Content-Type','text/html');
//     res.end(`<h3>Welcome to altcampus</h3>`);
// }

// server8000.listen( 8000, ()=>{
//     console.log("server listening on port 8000");
// })

// //! port 8001
// var server8001 = http.createServer(handelRequest8001);

// function handelRequest8001( req, res ){
//     res.writeHead(201,{'Content-Type':'text/html'});
//     res.end(`<h3>Welcome to altCampus</h3>`);
// }

// server8001.listen(8001,()=>{
//     console.log("server listening on port 8001");
// })

// //! port 8888
// var server8888 = http.createServer(handelRequest8888);

// function handelRequest8888( req, res ){

// }

// server8888.listen(8888,()=>{
//     console.log("server listening on port 8888");
// })

// //! port 5050
// var server5050 = http.createServer(handelRequest5050);

// function handelRequest5050( req, res ){
//     console.log(req.methods);
//     res.write(200,{'Content-Type':'text/html'});
//     res.end(`<h2>posted for first time</h2>`);
// }

// server5050.listen(5050,()=>{
//     console.log('server listening on port 5050');
// })

// //! port 2345
// var server2345 = http.createServer(handelRequest2345);

// function handelRequest2345( req, res ){
//     if ( req.methods === 'GET' && req.url === '/' ) {
//         res.write(200,{'Content-Type':'text/plain'});
//         res.end("ZEHAN KHAN");
//     } else if ( req.methods === 'GET' && req.url === '/about' ) {
//         res.write(200,{'Content-Type':'text/html'});
//         res.end(`<h1>ZEHAN KHAN</h1>`)
//     }
// }

// server2345.listen(2345,()=>{
//     console.log('server is listening on port 2345');
// })

// //! port 1111
var server1111 = http.createServer(handelRequest1111);

function handelRequest1111( req, res ){
    if ( req.methods === 'GET' && req.url === '/users' ) {
        res.write(200, {'Content-Type':'text/html'});
        // fs.createReadStream('./form.html').pipe(res);
        res.end(`<form><input type='text'/><input type='email'/></form>`);
    } else if ( req.methods === 'POST' && req.url === '/users' ) {
        res.end("Posted for the second time");
    }
}

server1111.listen( 1111, ()=>{
    console.log('server is listening on port 1111')
})

// //! port 2222
var server2222 = http.createServer(handelRequest2222);

function handelRequest2222( req, res ){
    
}

server2222.listen( 2222, ()=>{
    console.log('server is listening on port 2222');
})