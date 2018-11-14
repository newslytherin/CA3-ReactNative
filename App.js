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
  static navigationOptions = { title: 'dashboard',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: {
      /*  */
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.background}>
        <Text style={styles.wellcome}>Hello from newSlytherin</Text>
        <Text style={styles.paragraph}>Hello from newSlytherin</Text>
        <Touchable onPress={() => navigate('listView')} title="Show Star Wars" />
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
  wellcome: {
    color: 'white',
    textAlign: "center", 
    fontSize: 34,
    margin: 20
  },
  paragraph: {
    color: 'white',
    fontSize: 16
  },
  button: {
    color: 'white',
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  },
  background: {
    flex: 1,
    backgroundColor: '#000',
  }
})