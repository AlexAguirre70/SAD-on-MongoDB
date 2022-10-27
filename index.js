const express= require('express')
const app = express() 


require('dotenv').config() 
const { MongoClient } = require("mongodb");
const methodOverride = require('method-override')

//middleware set views engine
app.set("views", __dirname + "/views");
app.set('view engine','jsx') 
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true})); 
app.use(express.json())

app.use(methodOverride('_method'))


app.use('/topics', require('./controllers/topic_controllers'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('*',(req,res)=>{
    res.render('error404')
})

app.listen(process.env.PORT)

