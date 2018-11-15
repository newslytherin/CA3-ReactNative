import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Styles } from '../resources/Styles';
import Touchable from './Touchable';

export default (props) => (
    <View style={Styles.container}>
        <FlatList 
            data={props.data}
            renderItem={({item}) => (
                <View style={Styles.itemContainer}>
                    <Text style={Styles.itemHeader}>{item.name}</Text>
                    <Text style={Styles.itemBody}>{`birth year ${item.birth}, gender ${item.gender}`}</Text>
                </View>
            )}
        />
        <Touchable onPress={() => props.refresh()} title="refresh" />
    </View>
)