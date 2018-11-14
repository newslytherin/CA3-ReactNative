import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {

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


    constructor(props) {
        super(props);
        this.state = {data: []}
    }
    
    componentWillMount() {
        this.getData();
    }


    async getData() {
        try {
            const data = await fetch("https://swapi.co/api/people").then(res=>res.json());

            const list = await data.results.map((object) => {
                const item = {
                    key: `${object.name}, ${object.birth_year}, ${object.gender}`
                }
                return item;
            })
            await this.setState({data: list});
            await console.log(this.state.data)

        } catch (err) {
            console.log(err)
        } 
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#000',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#fff',
  },
})