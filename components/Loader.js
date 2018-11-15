import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Styles, Colors } from '../resources/Styles';

export default () => (
    <View style={Styles.container}>
        <Text style={Styles.largeText}>loading...</Text>
        <ActivityIndicator size="large" color={Colors.red} />
    </View>
)