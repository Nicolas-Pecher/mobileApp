import React from 'react';
import { StyleSheet, Text, View, ScrollView,AsyncStorage } from 'react-native';


export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalHours: '',
      overhours: '',
      projects: [],
    }
  }

  componentDidMount() {
    this.getUserLocally();
  }

  getUserLocally = async () => {
    try {
      let value = await AsyncStorage.getItem('user');
      value = JSON.parse(value)
      console.log(value.GebruikerId)
      this.getProjects(value.GebruikerId)
      this.getOverhours(value.GebruikerId)
      this.getTotalHours(value.GebruikerId)
    } catch (error) {
      console.log(error)
    }
  }

  getProjects = (userId) => {
    fetch('https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/' + userId)
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .then((response) => {
        this.setState({
          projects: response
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getTotalHours = (userId) => {
    fetch('https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/' + userId)
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .then((response) => {
        this.setState({
          totalHours: response.TotaalUren
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getOverhours = (userId) => {
    fetch('https://mobileapp-planning-services.azurewebsites.net/api/TotaalOverurenConsultant/' + userId)
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .then((response) => {
        this.setState({
          overhours: response.TotaalUren
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  hours = (hour) => {
    console.log(hour)
    if (hour == '' || hour == undefined) {
      return '00:00:00'
    }
    return hour.substring(11, 19);
  }

  render() {
    let fontsize = 22;
    return (
      <ScrollView style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 15, }}>
        <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 30 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: fontsize, color: "#484848" }}>Worked hours</Text>
            <Text style={{ textAlign: 'center', fontSize: fontsize, color: this.props.colorTheme.lightColor }}>{this.hours(this.state.totalHours)}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: fontsize, color: "#484848" }}>Overhours</Text>
            <Text style={{ textAlign: 'center', fontSize: fontsize, color: this.props.colorTheme.lightColor }}>{this.hours(this.state.overhours)}</Text>
          </View>
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: fontsize, color: "#484848", paddingBottom: 15 }}>My Projects</Text>
          {
            this.state.projects.map(project => {
              return (
                <View key={project.ProjectId} style={{ paddingBottom: 15 }}>
                  <Text style={{ textAlign: 'center', fontSize: fontsize, color: this.props.colorTheme.lightColor }}>{project.ProjectNaam}</Text>
                  <Text style={{ textAlign: 'center', fontSize: 15, color: "#484848" }}>{project.KlantNaam}</Text>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}
