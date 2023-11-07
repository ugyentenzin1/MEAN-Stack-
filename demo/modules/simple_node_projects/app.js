const http = require('http');
const fs = require('fs');
const port = process.env.PORT | 4000;

function render(res, file){
    fs.readFile(file, (err, data) => {
        if(err) { 
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end("Page not Found")
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        return res.end(data)
    })
}
const server = http.createServer((req, res) => {

    if(req.url === '/') {
        render(res, 'home.html')
    } else if(req.url === '/contact') {
        render(res, 'contact.html')
    } else if(req.url === '/about') {
        render(res, 'about.html')
    } res.end()
})

server.listen(port, () => console.log(`http://localhost:${port}`));
