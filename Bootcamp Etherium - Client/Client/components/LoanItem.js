import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoanItem({loan}) {
    function handleClick() {
        Alert.alert("Te queda de tarea")
    }

  return (
    <View style={styles.item} >
        <View style={styles.row}>
            <Text>Fecha:</Text>
            <Text>{loan.createDate}</Text>
        </View>
        <View style={styles.row}>
            <Text>Descripción:</Text>
            <Text>{loan.description}</Text>
        </View>
        <View style={styles.row}>
            <Text>Monto:</Text>
            <Text>{loan.totalAmount}</Text>
        </View>
        <Button title="Actualizar" onPress={handleClick}/>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 15,
        backgroundColor: "grey",
        alignItems: "center",
        borderRadius: 30,
        color: "white"
    },
    row: {
        flexDirection: "row"
    }
})