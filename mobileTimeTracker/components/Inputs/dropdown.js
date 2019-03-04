import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    };

    render() {


        return (
            <View style={{ width: '90%' , shadowColor: '#000', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3}}>
                <View style={styles.dropdown}>
                    <Text style={{textAlign: 'center'}}>All</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: 'white', borderRadius: 5, padding: '5% 15%', overflow: 'hidden',
    }
});
