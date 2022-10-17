const http = require('http');
const port = 3000;

const server = http.createServer(function(res, req) {

})

server.listen(port, function(error){
    if (error)
    {
        console.log('error')
    } else {
        console.log('success')
    }
})