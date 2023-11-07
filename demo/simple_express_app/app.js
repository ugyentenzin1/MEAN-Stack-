const express = require('express');
const port = process.env.PORT | 1000;
const fs = require('fs');
const dir = "./public/";

const app = express();

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`)
})


app.get('/', (req, res) => {
    render(res, 'home.html')
})

app.get('/contact', (req,res) => {
    render(res, 'contact.html');

})

app.get('/about', (req, res) => {
    render(res, 'about.html');
})

const render =(res, file) => {
    fs.readFile(dir+file, (err, data) => {
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