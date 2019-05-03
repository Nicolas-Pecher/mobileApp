import React, { Component } from 'react';
import TimelogRow from './timelogrow';
import EditTimeSheet from './editTimeSheet';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

//this gets a prop with an array of timeSheet objects and displays them
export default class ShowTimeSheets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editTimeSheet:false,
            selected:{}
        }
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
        if (date.getDay() != previousDay.getDay() || date.getMonth() != previousDay.getMonth()) {
            return <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: 16, marginTop: 25 }}>{date.getDate() + " " + date.toLocaleString('en-us', { month: 'short' })}</Text>;
        }
    }

    changeSelected(timesheet) {
        console.log("press: " + timesheet.TimesheetId);
        this.setState({
            editTimeSheet:true,
            selected:timesheet
        })
    }

    render() {
        //previous date will be saved in this variable
        previousDay = new Date(0);
        if (!this.state.editTimeSheet) {
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
                                <View style={{ paddingTop: 5 }} key={timesheet.TimesheetId}>
                                    {title}
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.changeSelected(timesheet)}>
                                        <TimelogRow project={timesheet.ProjectNaam} begin={begin} end={end} colorTheme={this.props.colorTheme} />
                                    </TouchableOpacity>
                                    
                                    {this.state.changeSelected}
                                </View>
                            )
                        })
                    }
                </ScrollView>
            )
        } else {
            return <EditTimeSheet colorTheme={this.props.colorTheme}  timesheet={this.state.selected} save={() => this.setState({editTimeSheet:false})} updateHome={this.props.updateHome}/>
        }
        
    }
}
