const http = require('http');

const data = JSON.stringify( {
    title: 'Mean Stack Full Stact Developer'
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST', //POST, PUT, DELETE
    headers: {
        'Content-type': 'application/json',
        'Content-lenth': data.length
    }
}

const request = http.request(options, response => {
    response.on('data', (chunk)=> {
        process.stdout.write(chunk);
    })
})

request.on('error', error => {
    console.error(error)
})

request.end()