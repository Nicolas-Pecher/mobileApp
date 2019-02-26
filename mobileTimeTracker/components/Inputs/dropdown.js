import React, { Component } from 'react'
import { View, Picker,StyleSheet } from 'react-native';

export default class Dropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
          options:props.options,
          selected:props.options[0]
        };
    };

    render() {
        

        return (
            <View>
                <Picker
                    selectedValue={this.state.selected}
                    style={styles.picker}
                    itemStyle={styles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selected: itemValue })
                    }>
                    {this.state.options.map((option) => {
                        return <Picker.Item label = {option} value = {option} key={option}/>
                     })}
                </Picker>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    picker: {
        width:100,
        height:20
    },
    pickerStyle: {
        marginTop:-90
    }
});
