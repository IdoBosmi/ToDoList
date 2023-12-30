const express = require("express");
const mongoose = require("mongoose");
const Task = require('./models/task')
const config = require('../config'); 

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

const port = 5000;
app.use(express.urlencoded({extended: true}));

app.use(express.json());


console.log("...");

// connect to mongodb
const dbURI = config.dbURI;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        app.listen(port)
        console.log("listening")
        })
    .catch((err)=> console.log(err));

app.get('/', (req, res)=>{
    res.json({message: 'B'})
})

app.get('/tasks', (req, res)=>{
    Task.find()
        .then(result =>{
            res.send(result);
        })
        .catch(err=>{
            console.log(err);
        });
});

app.post('/tasks', (req, res)=>{
    const task = new Task(req.body);
    task.save()
        .then((result)=>res.end())
        .catch((err)=> console.log(err));
    
})

app.delete('/tasks/:id', (req, res)=>{
    const id = req.params.id;

    Task.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect:'/tasks'})
        })
        .catch(err=> console.log(err));
})

