import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function CreateLoanScreen() {

    const [Loan,setLoan] = useState({
                                        description:"",
                                        amount:0

    })
    const dateNow = new Date().toString()

    function handleChange(name, value) {
        console.log(name + " " + value)
        setLoan({...Loan,[name]:value})
    }

    async function CreateLoanClick() {
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

    function handleClick() {
        console.log(Loan)
        
        CreateLoanClick()
        
    }

    return (
    <View>
      <Text>Loan Date</Text>
      <Text>{dateNow}</Text>
      <Text>Loan Description</Text>
      <TextInput placeholder='Short description of the loan' onChangeText={(text)=>handleChange("description",text)}  />  
      <Text>Amount</Text>
      <TextInput placeholder='Loan Amount' onChangeText={(text)=>handleChange("amount",text)}  />  
      <Button title="Create" onPress={handleClick}/>
    </View>
  )
}

const styles = StyleSheet.create({})