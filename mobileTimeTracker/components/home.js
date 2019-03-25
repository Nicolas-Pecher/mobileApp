import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

    onPress() {
        if (!this.state.newEntry) {
            this.setState({
                newEntry: true
            })
        } else {
            //console.log('cancel')
            this.setState({ newEntry: false })
        }
    }

    showNewEntry() {

        if (this.state.newEntry) {
            return <LogTime colorTheme={this.props.colorTheme} />
        }
    }

    componentDidMount() {
        fetch('http://mobileapp-planning-services.azurewebsites.net/api/Timesheet')
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
            return <ShowTimeSheets timesheets={this.state.timesheets} colorTheme={this.props.colorTheme} />
        }
    }

    render() {

        let buttontext = ((!this.state.newEntry) ? 'add time' : 'cancel')

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', }} >
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.onPress()} style={{ shadowColor: '#000', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 }}>
                            <Text style={{ backgroundColor: '#FBFBFB', borderRadius: 3, padding: '3%', padding:'30%', overflow: 'hidden', marginRight: '2%', color: this.props.colorTheme.lightColor }}>{buttontext}</Text>
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


/* =======================================================================

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
*/