var express = require('express')
var app = express()
var fs = require('fs')

const cors = require('cors') // cross side origin
app.use(cors())

app.get('/getAll', function(req,res){
    fs.readFile(__dirname+"/"+"drugs.json", 'utf8', function(err,data){
    res.end(data)
    })
})

app.get('/detail/:id', function(req,res){
    fs.readFile(__dirname+"/"+"drugs.json", 'utf8', function(err,data){
    var drugsJson = JSON.parse(data) // String => object
    var drug = drugsJson[req.params.id]
    res.end(JSON.stringify(drug))
    })
})

app.listen(5000)