const mysqlConnection = require('../database')

function routes(app, loans, accounts) {
    app.post('/createLoan/:age', (req,res) => {

        let desc = req.body.description
        let amount = req.body.amount

        loans.addLoan (desc, amount, {from:accounts[0]})
            .then ((response) => {
                 res.json ({'response':response})
            })

            .catch (err => {
                 res.status(500).json({'error':err.message})
            })

        console.log (loans)

         // console.log (web3.currentProvider)
         // res.json ({'Response':"Create Loan Post Called: " + req.body.name + " ID: " + req.body.id + " Edad: " + req.params.age,
         // 'Web3':"Ready for Smartcontract Stuffs: " + web3.currentProvider.host + " Accounts: " + accounts     })
    })

    app.get ('/getLoanList/:id', (req,res) => {
         
        let id = req.params.id

        loans.getLoanList (id,{from:accounts[0]})
            .then ((response) => {
                    
                    let values = []

                    response.forEach(row => {
                        let data = [
                            row.id,
                            new Date(row.createDate * 1000),
                            row.description,
                            row.totalAmount,
                            row.payedAmount,
                            row.status
                        ]
                        values.push(data)
                    });

                    mysqlConnection.query("DELETE from loans WHERE id <> -1;INSERT INTO loans values ?;", [values], (err, rows) => {
                        if (err) {
                            console.log (err)
                        } else {
                            console.log (rows)
                        }
                    })

                    res.json ({'response': response})
                } )

            .catch (err => {
                res.status(500).json({'error':err.message})
            })
        })
}

module.exports = routes