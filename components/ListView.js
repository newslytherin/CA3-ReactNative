import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Loader from './Loader';

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

export default class FlatListBasics extends Component {

    static navigationOptions = { 
        title: 'informations',
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: '#000' },
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            isLoading: true, 
            isError: false
        }
        this.getData();
    }

    

    async getData() {
        try {
            const data = await fetch("https://swapi.co/api/people").then(res => res.json());

            const list = await data.results.map((object) => {
                return {
                    key: `${object.name}, ${object.birth_year}, ${object.gender}`
                }
            })
            await this.setState({data: list, isLoading: false});

            //await console.log('data::' + this.state.data)

        } catch (err) {
            console.log('err:: ' + err)
            this.setState({isError: true, isLoading: false});
        } 
    }

    refresh() {
        this.setState({
            data: [],
            isLoading: true, 
            isError: false
        })
        this.getData()
    }

  render() {
    if (this.state.isLoading) return (<Loader />);
    if (this.state.isError) { return (
        <View style={styles.container}>
            <Text style={styles.item}>A failed occurred, try refreshing</Text>
            <Touchable onPress={() => this.refresh()} title="refresh" />
        </View>
    )}

    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Touchable onPress={() => this.refresh()} title="refresh" />
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
})