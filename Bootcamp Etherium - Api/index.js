const express = require('express')
const Web3  = require('Web3')
const truffleContract = require('truffle-contract')
const artifacts = require('./build/contracts/Loans.json')

const app = express()

// Se usa para indicar que va a recibir solicitudes json
app.use (express.json())

// Creamos la conexion al nodo de Blockchain por medio de Web3
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
  } else {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))    
}

// Creo una instancia a mi contrato
const LoansInstance = truffleContract(artifacts)
LoansInstance.setProvider(web3.currentProvider)

async function f()
{
    try{
//       Creo una variable que tiene el contrato
        const loans= await LoansInstance.deployed()
        const accounts= await web3.eth.getAccounts()

        app.post('/createLoan/:age', (req,res) => {

           let desc= req.body.description
           let amount = req.body.amount

           loans.addLoan (desc,amount,{from:accounts[0]})
           .then ((response) => {
                    res.json ({'response':response})
                } )

           .catch (err => {
                    res.status(500).json({'error':err.message})
                } )

            console.log (loans)

            // console.log (web3.currentProvider)
            // res.json ({'Response':"Create Loan Post Called: " + req.body.name + " ID: " + req.body.id + " Edad: " + req.params.age,
            // 'Web3':"Ready for Smartcontract Stuffs: " + web3.currentProvider.host + " Accounts: " + accounts     })

        })

         app.get ('/getLoanList/:id', (req,res) => {
            
            let id = req.params.id

            loans.getLoanList (id,{from:accounts[0]})
            .then ((response) => {
                     res.json ({'response':response})
                 } )
 
            .catch (err => {
                     res.status(500).json({'error':err.message})
                 } )
 

        })

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



