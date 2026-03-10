// create Express Object
const express = require( 'express')

//Assing Object to app variable
const app = express()

//Connection port to listen on
const port = 3000

// App logic to handle user HTTP  request
app.get('/', (req , res) => {
    res.send('Hello World I am Wsuits6')
})

app.get('/login', (req, res) => {
    res.send('Login Page Auth requird..... ')
})

app.get('/register', (req, res) => {
    res.send("Register and join the legon of Express Devs hahahaha ")
})

// logic to retun to console if port is connected to  
app.listen(port, ()=> {
    console.log("my teacher will say why I used === in the code he thinks its AI ")
    console.log('<<<<<<========= Example app listing ==========>>>>>')
})