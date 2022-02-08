const express = require('express')
const Web3  = require('Web3')
const truffleContract = require('truffle-contract')

const app = express()

// Se usa para indicar que va a recibir solicitudes json
app.use (express.json())

app.post('/createLoan/:age', (req,res) => {
    console.log ("Create Loan Post Called")
    res.json ({'Response':"Create Loan Post Called: " + req.body.name + " ID: " + req.body.id + " Edad: " + req.params.age })
})

// Abrimos el puerto
app.listen(8080, () => {
                        console.log ("App listening on port 8080")
})
