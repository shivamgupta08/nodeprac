const express = require('express')
require('./mongooseConfig')
const app = express()
app.use(express.json())

const Phone = require('./phones')

app.get('/list', async(req, res)=>{
    const data = await Phone.find()
    res.send(data)
})

app.post('/create', async(req, res)=>{
    const data = new Phone(req.body)
    let result = await data.save()
    res.send(result)
})

app.put('/update/:_id', async(req,res)=>{
    const data = await Phone.updateOne(
        req.params,
        {$set: req.body})
    res.send(data)
})

app.delete('/delete/:_id', async(req,res)=>{
    const data = await Phone.deleteOne(req.params)
    res.send(data)
})

app.get('/search/:key', async(req, res)=> {
    const data = await Phone.find({
        "$or": [
            {"name": {$regex: req.params.key}},
            {"brand": {$regex: req.params.key}},
            {"category": {$regex: req.params.key}}
        ]
    })
    res.send(data)
})

app.listen(5000)