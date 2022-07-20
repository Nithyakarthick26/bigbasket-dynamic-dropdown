let fs= require ('fs')
//write file

fs.writeFile('mycode.txt','we are working on node js',()=>{})
console.log('task done')

fs.writeFile('my.txt','hello from node js',()=>{})
console.log('task done')

//append file 

fs.appendFile('mytext.txt',`${Math.floor(Math.random()*10000)}hii from node \n`,()=> {
    console.log('task done')
})

//read file

fs.readFile(`mytext.txt`,'utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data)
})
fs.readFile('mycode.txt','utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data)
})

//rename file
fs.rename('mycode.txt','nodeFile.txt',(err)=>{
    if(err)throw err;
    console.log('file renamed')
})

//delete file
fs.unlink('mycode.txt',(err)=>{
    if(err)throw err; 
    console.log('file deleted')
})
