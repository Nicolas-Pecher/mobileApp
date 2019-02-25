import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Inputs/dropdown';
//import TimePicker from './Inputs/timePicker';

let options = ["option 1","option 2","option 3"]

export default class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    
    render() {

        return (
            <View style={styles.container}>
                <Text>This is the Home page</Text>
                <Dropdown options = {options}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});