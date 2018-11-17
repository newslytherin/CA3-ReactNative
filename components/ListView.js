import React, { Component } from 'react';
import Loader from './Loader';
import Error from './Error';
import List from './List';

const URL = 'https://stephandjurhuus.com/CA3-Backend/api/swapi/async';

export default class FlatListBasics extends Component {

    static navigationOptions = { 
        title: 'informations',
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
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
            const data = await fetch(URL).then(res => res.json());
            const list = await data.map((object, index) => {
                return {
                    key: `${index}`,
                    name: object.name,
                    birth: object.birth_year,
                    gender: object.gender,
                }
            })
            await this.setState({data: list, isLoading: false});

        } catch (err) {
            console.log('err:: ' + err)
            this.setState({isError: true, isLoading: false});
        } 
    }

    refresh = () => {
        this.setState({ isLoading: true, isError: false })
        this.getData()
    }

    render() {
        if (this.state.isLoading) return (<Loader />)
        else if (this.state.isError) return (<Error refresh={this.refresh} />)
        else return (<List data={this.state.data} refresh={this.refresh}/>)
    }
} 