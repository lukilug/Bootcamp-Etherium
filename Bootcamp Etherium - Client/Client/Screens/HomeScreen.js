import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'

import LoansList from '../components/LoansList'

export default function Home() {
  const [loans,setLoans] = useState([]) 

  useEffect(() =>{
    getLoansList()
  }, [])

  async function getLoansList() {
    const res = await fetch('http://192.168.1.157:8080/getLoanList/-1')
    const data = await res.json()

//    console.log(data.response)
    let loansResponse = []
    data.response.forEach(element => {
      let loanObject = {
                        "id": element[0],
                        "createDate": element[1],
                        "description": element[2],
                        "totalAmount": element[3],
                        "payedAmount": element[4],
                        "restAmount": element[5],
                        "Status": element[6]
      }
 
      loansResponse.push(loanObject)

    });
    console.log (loansResponse)
    setLoans(loansResponse) 
    
  }

  return (
    <View>
      <LoansList loans={loans}   />
    </View>
  )
}

const styles = StyleSheet.create({})