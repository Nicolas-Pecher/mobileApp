import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native';

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    };

    render() {
        

        return (
            <View style={{width:'90%'}}>
                <Text style={{backgroundColor:'white',textAlign:'center',borderRadius: 5,padding: '5% 15%',boxshadow}}>All</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
   
});
