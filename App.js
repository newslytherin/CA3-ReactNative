import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from "expo";
import { createStackNavigator  } from 'react-navigation';

import ListView from './components/ListView';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'CA3 React Native' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>Hello from newSlytherin</Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Hello from newSlytherin</Text>
        <Touchable onPress={() => navigate('listView')} title="Lars" />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  listView: { screen: ListView },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})