const { createServer } = require('http');

const html = `
<form method="POST">
    <h1>Send data to server</h1>
    Username: <input name="username"><br>
    Password: <input name="password" type="password"><br>
    <input type="submit" value="Sign in">
</form>
`;

createServer((req, res) => {
    if(req.method == 'GET'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(html);
        res.end();
    }
    else if(req.method == 'POST'){
        console.log("POST request: ");

        let body = '';
        
        (req.on('data', (chunk) => {
            body += chunk.toString();
            console.log('Receiving data!', chunk.toString());
        }));
        req.on('end', () => {
            console.log(body);
        })

        res.statusCode = 204;
        res.end();
    }

}).listen(3000);