import React, { Component } from 'react';
import TimelogRow from './timelogrow';
import {  Text, View, ScrollView } from 'react-native';

//this gets a prop with an array of timeSheet objects and displays them
export default class ShowTimeSheets extends Component {
    constructor(props) {
      super(props)
    }
    
    render() {
        //console.log(this.props.timesheets)
        return (
            <ScrollView>
                {
                    this.props.timesheets.map(timesheet => {
                        return (
                            <View style={{ paddingTop: 5 }} key={timesheet.Id}>
                                <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: 16 }}>1 Jan</Text>
                                <TimelogRow project={timesheet.NaamProject} begin={timesheet.Beginuur} end={timesheet.einduur} colorTheme={this.props.colorTheme}/>
                            </View>

                        )
                    })
                }
            </ScrollView>
        )
    }
}
