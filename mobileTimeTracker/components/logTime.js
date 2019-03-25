import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'
import Dropdown from './Inputs/dropdown'

//animaton from the React native documentation https://facebook.github.io/react-native/docs/animations


let testItems = [
  { key: 'Project 1',id:1 },
  { key: 'Project 2',id:2 },
  { key: 'Project 3',id:3 },
];

// This is like a <hr> in html
function ShowLine() {
  return (
    <View
      style={{
        borderBottomColor: '#959595',
        borderBottomWidth: 1,
        opacity:0.2
      }}
    />
  )
}


export default class LogTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(0),
      project: testItems[0],
      showProjects: false,
      projects:testItems
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
  }

  showBeginPicker = () => {
    console.log("begin");
  }

  showEndPicker = () => {
    console.log("end");
  }

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

  showProjects() {
    console.log('test')
    if (this.state.showProjects) {
      return <Dropdown options={testItems} removeDropDown={this.toggleShowProjects} colorTheme={this.props.colorTheme} selected={this.selectedProject}/>
    }
  }

  selectedProject = (project) => {
    this.setState({
      project:project
    })
  }

  saveTimeLog = () => {
    console.log("save");
  }

  render() {
    console.log('render logTime')
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ zIndex: 1, height: '90%', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#F1F1F1', opacity: fadeAnim }} behavior="padding" enabled>
        <View style={{ marginLeft: 10, marginRight: 10 }}>

          <Text style={{ textAlign: 'center', color: "#484848", fontSize: 22, paddingTop: 20, paddingBottom: 20, }}>Add time</Text>

          <ShowLine/>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.toggleShowProjects()}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>{this.state.project.key}</Text>
          </TouchableOpacity>

          <ShowLine/>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.showBeginPicker()}>
            <Text style={{ color: "#959595", fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>Begin</Text>
          </TouchableOpacity>

          <ShowLine/>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.showEndPicker()}>
            <Text style={{ color: "#959595", fontSize: 22, paddingLeft: 20, paddingTop: 15, paddingBottom: 15 }}>End</Text>
          </TouchableOpacity>

          <ShowLine/>

          <TouchableOpacity activeOpacity={0.5} onPress={() => this.saveTimeLog()}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 25, paddingLeft: 20, paddingTop: 25, paddingBottom: 15, textAlign: "center" }}>Confirm</Text>
          </TouchableOpacity>



        </View>
        {this.showProjects()}
      </Animated.View>
    )
  }
}

/*const styles = StyleSheet.create({
  line: {

  },
});*/
