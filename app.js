const express = require( 'express')
const app = express()
const port = 3000

app.get('/', (reg , res) => {
    res.send('Hello World I am Wsuits6')
})

app.listen(port, ()=> {
    console.log('<<<<<<========= Example app listing ==========>>>>>')
})