import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default () => (
    <View style={styles.container}>
        <Text style={styles.text}>loading...</Text>
        <ActivityIndicator size="large" color="#2196F3" />
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: "center", 
    fontSize: 34,
    margin: 20
  }
})