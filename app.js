// create Express Object
const express = require( 'express')

//Assing Object to app variable
const app = express()

//Connection port to listen on
const port = 3000

// App logic to handle user HTTP  request
app.get('/', (reg , res) => {
    res.send('Hello World I am Wsuits6')
})

// logic to retun to console if port is connected to  
app.listen(port, ()=> {
    console.log('<<<<<<========= Example app listing ==========>>>>>')
})