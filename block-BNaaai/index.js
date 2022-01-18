const http = require('http')
const https = require('https')
const url = require('url')



const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);

console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

const parsedUrl2 = url.parse('https://www.google.co.in/',true);
console.log(parsedUrl2);

 // get header

    // const parsedUrl2 = url.parse("https://www.google.com/",true);


    
//     function getHeaders(myURL) {
//       const parsedURL = url.parse("https://www.google.com/",true)
//       const options = {
//         protocol: parsedURL.protocol,
//         hostname: parsedURL.hostname,
//         method: 'HEAD',
//         path: parsedURL.path
//       }
//       let protocolHandler = (parsedURL.protocol === 'https:' ? https : http)
    
//       return new Promise((resolve, reject) => {
//         let req = protocolHandler.request(options, (res) => {
//           resolve(res.headers)
//         })
//         req.on('error', (e) => {
//           reject(e)
//         })
//         req.end()
//       })
//     }
    
//     getHeaders(URL).then((headers) => {
//       console.log(headers)
//       console.log(headers)
//     })

// http.get("https://www.google.com/", (response)=>{
//     let data = "";
//     response.on('data',(chunk)=>{
//         data += chunk;
//     })
//     response.on('end',()=>{
//         console.log(data);
//     })
// })



