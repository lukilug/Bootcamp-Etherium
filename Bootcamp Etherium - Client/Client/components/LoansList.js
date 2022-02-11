import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import LoanItem from './LoanItem'

export default function LoansList({loans}) {
  
    function renderItem({item}) {
        console.log(item)
        return <LoanItem loan={item}  />
    }
  
    return (
    <View>
      <Text>Prestamos</Text>
      <FlatList data={loans} keyExtractor={(item)=>item.id} renderItem={renderItem}/>
    </View>
  )
}

const styles = StyleSheet.create({})