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

    //checking if the date of the present row is the same as the previous
    //if not a header will be added with his date otherwise the new row will be grouped with the previous one
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
        //previous date will be saved in this variable
        previousDay = new Date(0);
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
                                <TimelogRow project={timesheet.ProjectNaam} begin={begin} end={end} colorTheme={this.props.colorTheme} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
