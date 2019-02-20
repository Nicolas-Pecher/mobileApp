import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import SettingIcon from '../pictures/settings.svg';
import HomeIcon from '../pictures/home.svg';
import Folder from '../pictures/folder.svg';


//this is the navigation bar
export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        const baseColor = '#919191';
        this.state = {
            home:'#F1F1F1',
            folder:baseColor,
            settings:baseColor
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(clicked) {

        //calling function in App.js that changes the displayed page
        this.props.changeDisplay(clicked);

        //changing color of selected icon
        const baseColor = '#919191';
        const selectColor = '#F1F1F1'
        if (clicked == 'home') {
            this.setState ({
                home:selectColor,
                folder:baseColor,
                settings:baseColor
            });
        } if (clicked == 'overview') {
            this.setState ({
                home:baseColor,
                folder:selectColor,
                settings:baseColor
            });
        } if (clicked == 'settings') {
            this.setState ({
                home:baseColor,
                folder:baseColor,
                settings:selectColor
            });
        }
        //console.log(clicked)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.onClick("home")}>
                    <HomeIcon  width={30} height={25} fill={this.state.home} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.onClick("overview")}>
                    <Folder  width={40} height={30} fill={this.state.folder}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.onClick("settings")}>
                    <SettingIcon width={30} height={25} fill={this.state.settings}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color:'#919191',
    },
});

