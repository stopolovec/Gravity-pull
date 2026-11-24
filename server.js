const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT) || 8080;
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};

http.createServer((req,res)=>{
  const requested = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(root, requested === '/' ? 'index.html' : requested);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file,(error,data)=>{
    if(error){res.writeHead(404);return res.end('Not found')}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});
    res.end(data);
  });
}).listen(port,()=>console.log(`Gravitacijski obrat: http://localhost:${port}`));
