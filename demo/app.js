const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-type': 'text/html'
    })

 if(request.url === "/get") {

    response.write('I am the GET Method');
        if(request.method === "GET") {
            response.end('GET');
        } 
 } else if(request.url === "/post") {
    response.write('I am the POST Method');

    if(request.method === "POST") {
        response.end('POST');
    }
} else if(request.url === "/put") {
    response.write('I am the PUT Method');
    if(request.method === "PUT") {
        response.end('PUT');
    }
} else if(request.url === "/delete") {
    response.write('I am the DELETE Method');

    if(request.method === "DELETE") {
        response.end('DELETE');
    }
} else {
    response.end('Page Not Found')
}

response.end();

    // response.write('<h1>Welcome To The NodeJs</h1>');
    // response.end('<h1>Welcome To The NodeJs</h1>');

}).listen(3000, () => console.log("http://localhost:3000"))