import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TimelogRow from './timelogrow';
import LogTime from './logTime';
//import TimePicker from './Inputs/timePicker';

let options = ["option 1", "option 2", "option 3"]

export default class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            newEntry: false
        }
    }

    onPress() {
        console.log('hello');
        this.setState({
            newEntry: true
        })
    }

    showNewEntry = () => {
        if (this.state.newEntry) {
            console.log("show new entry")
            return <LogTime />
        }
    }


    render() {
        const fontsize = 16;

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', }} >
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.onPress()} style={{ shadowColor: '#000', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 }}>
                            <Text style={{ backgroundColor: 'white', borderRadius: 3, padding: '3% 30%', overflow: 'hidden', marginRight: '2%', color: this.props.colorTheme.lightColor }}>Add time</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 10, zIndex: 0 }}>
                        <ScrollView >

                            <View style={{ paddingTop: 5 }}>
                                <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: fontsize }}>1 Jan</Text>
                                <TimelogRow colorTheme={this.props.colorTheme} />
                                <TimelogRow colorTheme={this.props.colorTheme} />
                                <TimelogRow colorTheme={this.props.colorTheme} />
                            </View>

                            <View style={{ paddingTop: 15 }}>
                                <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: fontsize }}>31 Dec</Text>
                                <TimelogRow colorTheme={this.props.colorTheme} />
                                <TimelogRow colorTheme={this.props.colorTheme} />
                                <TimelogRow colorTheme={this.props.colorTheme} />
                                <TimelogRow colorTheme={this.props.colorTheme} />
                            </View>

                        </ScrollView>
                    </View>
                </View>

                {this.showNewEntry()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10
    },
});