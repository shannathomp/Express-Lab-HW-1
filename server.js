const express = require('express')
const app = express()
const host = 3000


app.set('view engine','ejs')
app.set('views','./views')

//1
app.get('/house', (req,res) => {
    res.send(`Root Page`)
})
//2
app.get('/', (req,res) => {
    res.render('home', {pageTitle: 'Home is where?', pageHeading: 'This is my house'})
})
//3
app.get('/name', (req,res) => {
    res.render('name')
})
//4
app.get('/age',(req,res) => {
    res.send('Your Age')
})
//5
app.get('/address',(req,res) => {
    res.send('Your Age')
})
//6
app.get('/height',(req,res) => {
    res.send('Your Age')
})
//7
app.get('/weight',(req,res) => {
    res.send('Your Age')
})
//8
app.get('/occupation',(req,res) => {
    res.send('Your Age')
})
//9
app.get('/cars',(req,res) => {
    res.send('Your Age')
})
//10
app.get('/income',(req,res) => {
    res.send('Your Age')
})


app.listen(host, () => {
    console.log(`running`)
})
