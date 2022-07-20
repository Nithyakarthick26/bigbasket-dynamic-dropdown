let http=require('http')

let server=http.createServer((req,res)=>
{
    res.write(`<h1>hi from  node js server..</h1>`);
    res.end()
})
server.listen(5690)