//HTTP

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
        console.log('he')
    }
   else if (req.url === '/about') {
        res.end('Here is our short history')
    }else {
    res.end(`
            <h1>Oops </h1>
            <p>Can't find page </p>
            <a href="/">Back Home </a>
            `)
    }
})

server.listen(5000)