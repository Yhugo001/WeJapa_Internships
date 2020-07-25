const http = require('http');


const server = http.createServer((req, res) => {
    res.write('Hello World. Welcome to WeJapa Internships')
    res.end()
})

server.listen(3000, (error) => {
    if (error) {
        console.log('Something Went wrong', error);
    } else {
        console.log('Server Successfull running on port 3000');
    }
});