exports.handler = (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.write('hello world');
        res.end();
    }else if(req.url === '/message' && req.method === 'POST') {
        console.log(req.body);
    }
}
