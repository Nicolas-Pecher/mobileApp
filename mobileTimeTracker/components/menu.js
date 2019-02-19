import React from 'react';
import { StyleSheet, TouchableOpacity, View,Image } from 'react-native';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(clicked) {
        this.props.changeDisplay(clicked);
        //console.log(clicked)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.onClick("home")}>
                    <Image source={require('../pictures/home-selected.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.onClick("overview")}>
                    <Image source={require('../pictures/textDoc-selected.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.onClick("settings")}>
                    <Image source={require('../pictures/settings.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
  });

