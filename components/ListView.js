import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Styles } from '../resources/Styles';
import Touchable from './Touchable';
import Loader from './Loader';


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
            const list = await data.results.map((object, index) => {
                return {
                    key: `${index}`,
                    val: `${object.name}, ${object.birth_year} ${object.gender}`
                }
            })
            await this.setState({data: list, isLoading: false});

        } catch (err) {
            console.log('err:: ' + err)
            this.setState({isError: true, isLoading: false});
        } 
    }

    refresh() {
        this.setState({ isLoading: true, isError: false })
        this.getData()
    }

  render() {
    if (this.state.isLoading) return (<Loader />)
    if (this.state.isError) return (
        <View style={Styles.container}>
            <Text style={Styles.error}>A failed occurred, try refreshing or come back later</Text>
            <Touchable onPress={() => this.refresh()} title="refresh" />
        </View>
    )

    return (
      <View style={Styles.container}>
        <FlatList 
            data={this.state.data}
            renderItem={({item}) => <Text style={Styles.listItem}>{item.val}</Text>}
        />
        <Touchable onPress={() => this.refresh()} title="refresh" />
      </View>
    );
  }
}
