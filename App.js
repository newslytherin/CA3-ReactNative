import React from 'react';
import { Text, View, Platform, ScrollView } from 'react-native';
import { Constants } from "expo";
import { createStackNavigator  } from 'react-navigation';
import { StarWarsText  } from './resources/StarWarsText';
import { Styles } from './resources/Styles';
import Touchable from './components/Touchable';
import ListView from './components/ListView';

class Dashboard extends React.Component {
  static navigationOptions = { 
    title: 'dashboard',
    headerTitleStyle: { color: '#fff' },
    headerStyle: { backgroundColor: '#000', }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={Styles.dashboardContainer}>
        <Text style={Styles.title}>Hello from newSlytherin</Text>
        <Text style={Styles.smallText}>{StarWarsText}</Text>
        <Touchable onPress={() => navigate('listView')} title="Show Star Wars" />
      </ScrollView>
    )
  }
}

const RouteStack = createStackNavigator({
  dashboard: { screen: Dashboard },
  listView: { screen: ListView },
});

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />