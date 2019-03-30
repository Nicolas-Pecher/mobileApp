import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import Dropdown from './Inputs/dropdown';
import TimelogRow from './timelogrow';

//temporary options for the dropdown menu
let testItems = [];


export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    fetch('https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        id: this.props.user
      })
    })
    .then((response) => response.json())
    .then((response) => {
      if (response != null){
        //console.log(response);
        this.testItems = response;
      } else {
        console.log(response);
      }
    })
    this.state = {
      project: testItems[0],
      showProjects: false,
      projects: testItems
    }
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
      return <Dropdown options={testItems} removeDropDown={this.toggleShowProjects} colorTheme={this.props.colorTheme} selected={this.selectedProject} />
    }
  }

  //change the selected project
  selectedProject = (project) => {
    this.setState({
      project: project
    })
  }


  render() {
    const fontsize = 16;

    return (
      <View style={styles.container}>


        <View style={{ flex: 1, marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.toggleShowProjects()}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>{this.state.project.key}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 12 }}>
          <ScrollView >

            <View style={{ paddingTop: 15 }}>
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
