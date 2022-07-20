let express=require('express');
let cors = require('cors')
let app=express();
let morgan=require('morgan');
let dotenv =require('dotenv');
dotenv.config();
let port=process.env.PORT ||9870;
let mongo=require('mongodb');
let MongoClient=mongo.MongoClient;
let mongoUrl=process.env.MongoLiveUrl;
let db;

app.use(morgan('tiny'))
app.use(cors())

//to get route
app.get('/',(req,res)=>{
    res.send('hi from express')
})

app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

app.get('/category/:id',(req,res)=>{
    let id= req.params.id;
    db.collection('category').find({state_id:Number(id)}).toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

app.get('/category/:id',(req,res)=>{
    let id= req.params.id;
    db.collection('category').find({state_id:Number(id)}).toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})


//connection with db
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err)console.log(`Error while connecting`);
    db=client.db('bigbasket-data');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
})

})

4