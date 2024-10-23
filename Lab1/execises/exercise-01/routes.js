const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`
            <body>
                <form action="/" method="POST">
                    <input type="text" name="msg">
                    <button type="submit">Invia</button>
                </form>
            </body>
        `);
        res.write('</html>');
        console.log(method);
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const message = body.split('=')[1];
            console.log("Messaggio ricevuto: " + message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
}

exports.handler = requestHandler;
