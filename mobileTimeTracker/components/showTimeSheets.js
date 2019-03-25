import React, { Component } from 'react';
import TimelogRow from './timelogrow';
import { Text, View, ScrollView } from 'react-native';

//this gets a prop with an array of timeSheet objects and displays them
export default class ShowTimeSheets extends Component {
    constructor(props) {
        super(props)
    }

    hours(hour) {
        var date = new Date(hour);
        //console.log(date.getHours());
        var roundHour = date.getHours()
        var minutes = String(date.getMinutes()).padStart(2, "0")
        return roundHour + ":" + minutes;
    }

    checkDate(date, previousDay) {
        console.log(date.getDay() + " " + previousDay.getDay())
        console.log(date.getDay() == previousDay.getDay())
        if (date.getDay() != previousDay.getDay() || date.getMonth() != previousDay.getMonth()) {
            return <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: 16,marginTop:25 }}>{date.getDate() + " " + date.toLocaleString('en-us', { month: 'short' })}</Text>;
        } else {
            console.log("test")
        }
    }

    render() {
        //console.log(this.props.timesheets)
        previousDay = new Date();
        return (
            <ScrollView>
                {

                    this.props.timesheets.map(timesheet => {
                        var begin = this.hours(timesheet.Beginuur)
                        var end = this.hours(timesheet.Einduur)
                        var date = new Date(timesheet.Datum)
                        var title = this.checkDate(date, previousDay)
                        previousDay = date;
                        return (
                            <View style={{ paddingTop: 5 }} key={timesheet.Id}>
                                {title}
                                <TimelogRow project={timesheet.NaamProject} begin={begin} end={end} colorTheme={this.props.colorTheme} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
