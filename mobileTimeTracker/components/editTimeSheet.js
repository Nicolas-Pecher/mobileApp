import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated, DatePickerIOS } from 'react-native'
import Dropdown from './Inputs/dropdown'

//animaton from the React native documentation https://facebook.github.io/react-native/docs/animations

// This is like a <hr> in html
function ShowLine() {
  return (
    <View
      style={{
        borderBottomColor: '#959595',
        borderBottomWidth: 1,
        opacity: 0.2
      }}
    />
  )
}


export default class EditTimeSheet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(0),
      project: {
        ProjectId: this.props.timesheet.ProjectId,
        ProjectNaam: this.props.timesheet.ProjectNaam,
      },
      showProjects: false,
      showDatePicker: false,
      showBeginPicker: false,
      showEndPicker: false,
      projects: [],
      date: new Date(this.props.timesheet.Datum),
      begin: new Date(this.props.timesheet.Beginuur),
      end: new Date(this.props.timesheet.Einduur),

    }
    this.toggleShowProjects = this.toggleShowProjects.bind(this);
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 100,
      }
    ).start();                        // Starts the animation
    fetch('http://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/4') // DON'T FORGET TO CHANGE THIS
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .then((responseJson) => {
        this.setState({
          projects: responseJson,
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setDate = (newDate) => {
    this.setState({ date: newDate });
  }

  setBegin = (newBegin) => {
    this.setState({ begin: newBegin });
  }

  setEnd = (newEnd) => {
    this.setState({ end: newEnd });
  }

  //change the state of visibility of the selected dropdown
  ToggleTimePicker = (type) => {
    this.setState({
      showDatePicker: false,
      showBeginPicker: false,
      showEndPicker: false,
    })
    if (type == 'date') {
      this.setState({
        showDatePicker: !this.state.showDatePicker
      })
    }
    if (type == 'begin') {
      this.setState({
        showBeginPicker: !this.state.showBeginPicker
      })
    }
    if (type == 'end') {
      this.setState({
        showEndPicker: !this.state.showEndPicker
      })
    }
    else {
      console.log('invalid type or no type provided to showTimePicker function');
      console.log('used type was: ' + type);
    }
  }

  //show the correct timePicker in function of the clicked button
  showTimePicker() {
    if (this.state.showDatePicker) {
      return <DatePickerIOS
        date={this.state.date}
        onDateChange={this.setDate}
        mode="date"
        style={{ position: "relative", marginTop: -70, backgroundColor: "#F1F1F1" }}
      />
    }
    if (this.state.showBeginPicker) {
      return <DatePickerIOS
        date={this.state.begin}
        onDateChange={this.setBegin}
        mode="time"
        style={{ position: "relative", marginTop: -70, backgroundColor: "#F1F1F1" }}
      />
    }
    if (this.state.showEndPicker) {
      return <DatePickerIOS
        date={this.state.end}
        onDateChange={this.setEnd}
        mode="time"
        style={{ position: "relative", marginTop: -70, backgroundColor: "#F1F1F1" }}
      />
    }
  }

  //show or hide the dropdown
  toggleShowProjects() {

    if (!this.state.showProjects) {
      this.setState({
        showProjects: true
      })
    } else {
      this.setState({
        showProjects: false
      })
    }
  }

  //render the dropdown
  showProjects() {
    if (this.state.showProjects) {
      return <Dropdown options={this.state.projects} removeDropDown={this.toggleShowProjects} colorTheme={this.props.colorTheme} selected={this.selectedProject} />
    }
  }

  //selected project in the dropdown
  selectedProject = (project) => {
    this.setState({
      project: project
    })
  }

  cancel = () => {
    this.props.save();
  }

  //save all the selected data
  saveTimeLog = () => {
    console.log("save");
    fetch(`https://mobileapp-planning-services.azurewebsites.net/api/Timesheet/${this.props.timesheet.TimesheetId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          GebruikerId: 4,
          ProjectId: this.state.project.ProjectId,
          Datum: this.state.date,
          Beginuur: this.state.begin,
          Einduur: this.state.end,
          Opmerking: '',
          Overuur: false
        }
      ),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => {
        this.props.updateHome()
      });
    this.props.save();
  }

  render() {
    let { fadeAnim } = this.state;
    console.log(this.state.project)
    return (
      <Animated.View style={{ zIndex: 1, height: '90%', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#F1F1F1', opacity: fadeAnim }} behavior="padding" enabled>
        <View style={{ marginLeft: 10, marginRight: 10 }}>

          <Text style={{ textAlign: 'center', color: "#484848", fontSize: 22, paddingTop: 20, paddingBottom: 20, }}>Edit time</Text>

          <ShowLine />

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.toggleShowProjects()}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>{this.state.project.ProjectNaam}</Text>
          </TouchableOpacity>

          <ShowLine />

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.ToggleTimePicker('date')}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>{this.state.date.getDate() + " " + this.state.date.toLocaleString('en-us', { month: 'short' })}</Text>
          </TouchableOpacity>

          <ShowLine />

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.ToggleTimePicker('begin')} style={{ display: 'flex', flexDirection: 'row', }}>
            <Text style={{ color: "#959595", fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15, flex: 1, }}>Begin</Text>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15, flex: 1 }}>{this.state.begin.getHours() + ":" + this.state.begin.getMinutes()}</Text>
          </TouchableOpacity>

          <ShowLine />

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.ToggleTimePicker('end')} style={{ display: 'flex', flexDirection: 'row', }}>
            <Text style={{ color: "#959595", fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15, flex: 1, }}>End</Text>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15, flex: 1 }}>{this.state.end.getHours() + ":" + this.state.end.getMinutes()}</Text>
          </TouchableOpacity>

          <ShowLine />
          <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.saveTimeLog()} style={{flex:1}}>
              <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 25, paddingTop: 25, paddingBottom: 15}}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.cancel()} style={{flex:1}}>
              <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 25, paddingTop: 25, paddingBottom: 15,textAlign:"right" }}>Confirm</Text>
            </TouchableOpacity>
          </View>


          {this.showTimePicker()}

        </View>
        {this.showProjects()}
      </Animated.View>
    )
  }
}