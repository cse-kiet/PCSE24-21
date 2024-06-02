import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Enteryscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Investify</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B72FF',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text:{
        color: '#fff',
        fontFamily: 'NovaRound-Regular',
        fontSize: 60,
    }
})