import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AsyncStorage } from 'react-native';
import LogTime from './logTime';
import ShowTimeSheets from './showTimeSheets'
//import TimePicker from './Inputs/timePicker';




export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newEntry: false,
            timesheets: [],
            isLoading: true
        }
    }

    onPress = () => {
        this.setState({
            newEntry: !this.state.newEntry
        })

    }

    showNewEntry() {
        if (this.state.newEntry) {
            return <LogTime colorTheme={this.props.colorTheme} save={this.onPress} updateHome={this.updateProjects} />
        }
    }

    updateProjects = () => {
        console.log("UPDATING");
        fetch('http://mobileapp-planning-services.azurewebsites.net/api/Timesheet')
            .then((response) => response.json())
            //.then((response) => console.log(response))
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    timesheets: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getUserLocally()
    }

    getUserLocally = async () => {
        try {
            let value = await AsyncStorage.getItem('user');
            value = JSON.parse(value)
            this.getTimesheets(value.GebruikerId)
        } catch (error) {
            console.log(error)
        }
    }

    getTimesheets = (userId) => {
        fetch('http://mobileapp-planning-services.azurewebsites.net/api/ConsultantTimesheets/' + userId)
            .then((response) => response.json())
            //.then((response) => console.log(response))
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    timesheets: responseJson,
                }, function () {
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    displayTimesheets() {
        if (!this.state.isLoading) {
            return <ShowTimeSheets timesheets={this.state.timesheets} colorTheme={this.props.colorTheme} updateHome={this.updateProjects} />
        }
    }

    render() {

        let buttontext = ((!this.state.newEntry) ? 'add time' : 'cancel')

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', }} >
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.onPress()} style={{ shadowColor: '#000', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 }}>
                            <Text style={{ backgroundColor: '#FBFBFB', borderRadius: 3, paddingTop: '3%', paddingBottom: '3%', paddingLeft: '10%', paddingRight: '10%', overflow: 'hidden', marginRight: '2%', color: this.props.colorTheme.lightColor }}>{buttontext}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 10, zIndex: 0 }}>

                        {this.displayTimesheets()}

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