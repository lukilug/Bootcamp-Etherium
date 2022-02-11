const express = require('express')
const Web3  = require('Web3')
const truffleContract = require('truffle-contract')
const artifacts = require('./build/contracts/Loans.json')
const routes = require('./routes/routes')

const app = express()

// Se usa para indicar que va a recibir solicitudes json
app.use(express.json())

try {
    // Creamos la conexion al nodo de Blockchain por medio de Web3
    if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider)
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))    
    }
} catch (err) {
    console.log(err)
}

// Creo una instancia a mi contrato
    const LoansInstance = truffleContract(artifacts)
    LoansInstance.setProvider(web3.currentProvider)


async function f(){    
    try {
        //       Creo una variable que tiene el contrato
        const loans = await LoansInstance.deployed()
        const accounts = await web3.eth.getAccounts()

        routes(app, loans, accounts)

        // Abrimos el puerto
        app.listen(8080, () => {
             console.log ("App listening on port 8080")
        })
    }
    catch (err) {
        console.log(err)
    }
}
f()



