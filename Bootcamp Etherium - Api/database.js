const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "etheriumdb",
    multipleStatements: true
})

mysqlConnection.connect((error)=> {
    if (error) {
            console.log(error)
            return        
    }
    else {
        console.log("Database connected OK")
    }
})

module.exports = mysqlConnection 
