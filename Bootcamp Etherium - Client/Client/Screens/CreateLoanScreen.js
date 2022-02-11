import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function CreateLoanScreen() {

    const [Loan,setLoan] = useState({
                                        description:"",
                                        amount:0

    })
    const dateNow = new Date().toString()
    // const inputErrors = false

    function handleChange(name, value) {
        console.log(name + " " + value)
        setLoan({...Loan,[name]:value})

        // // Comprobación de errores
        // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        // if (reg.test(value)) {
        //     console.log("Hola")
        //     inputErrors = true 
        // }
    }

    async function createLoanClick() {
        const res = await fetch ('http://192.168.1.157:8080/createLoan/2',{
            method:"post", 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(Loan)
            // body: { "description":JSON.stringify(Loan.description), 
            //         "amount": JSON.stringify(Loan.amount)}
        })
        const response = await res.json()
        console.log (JSON.stringify(Loan))
        console.log({ "description":JSON.stringify(Loan.description), 
                      "amount": JSON.stringify(Loan.amount)})        
        console.log (response)
    }

    // function handleClick() {
    //     console.log(Loan)
        
    //    createLoanClick()
        
    // }

    // function inputError(input) {
    //     return <Text style={styles.error}>Error en el ingreso del {input}</Text>
    // }

    return (
    <View>
      <View style={styles.inLineTextLabel}>
        <Text>Loan Date</Text>
        <Text>{dateNow}</Text>
      </View>
      <Text>Loan Description</Text>
      <TextInput placeholder='Short description of the loan' onChangeText={(text)=>handleChange("description",text)}  /> 
      {/* {inputErrors && inputError("description")}  */}
      <Text>Amount</Text>
      <TextInput placeholder='Loan Amount' onChangeText={(text)=>handleChange("amount",text)}  />  
      {/* {inputErrors && inputError("amount")} */}
      <Button title="Create" onPress={createLoanClick}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inLineTextLabel: {
        flexDirection:"row"

    },
    error: {
        color: "red"
    }

})