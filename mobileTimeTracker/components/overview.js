import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import Dropdown from './Inputs/dropdown';
import TimelogRow from './timelogrow';


export default class Overview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      project: {},
      showProjects: true,
      projects: [],
      timesheets: []
    }
  }

 componentDidMount() {
  fetch('https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/7')
  .then((response) => response.json())
  .then((response) => {
    if (response != null){
      console.log(response);
      this.setState({
        project:response[0],
        projects:response
      })
    } else {
      console.log(response);
    }
  })
 }
 
  //show or hide dropdown component
  toggleShowProjects = () => {
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

  //show dropdown component
  showProjects() {
    if (this.state.showProjects) {
      return <Dropdown options={this.state.projects} removeDropDown={this.toggleShowProjects} colorTheme={this.props.colorTheme} selected={this.selectedProject} />
    }
    
  }

  //change the selected project
  selectedProject = (project) => {
    this.setState({
      project: project
    })
  }

  showTimesheets(){
    fetch('https://mobileapp-planning-services.azurewebsites.net/api/TimesheetsPerProjectEnGebruiker',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        IdEen: 7,
        IdTwee: 3
      })
    })
    .then((response) => response.json())
    .then((response) => {
      if (response != null){
        console.log(response);
        this.state.timesheets = response
      } else {
        console.log(response);
      }
    })
  }

  render() {
    const fontsize = 16;

    return (
      <View style={styles.container}>


        <View style={{ flex: 1, marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.toggleShowProjects()}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>{this.state.project.ProjectNaam}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 12 }}>
          <ScrollView >
            {this.showTimesheets()}
            

          </ScrollView>
        </View>
        {this.showProjects()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  timeLog: {
    borderTopColor: "#484848"
  }
});
