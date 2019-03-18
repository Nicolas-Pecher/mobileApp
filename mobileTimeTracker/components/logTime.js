import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'
import Dropdown from './Inputs/dropdown'

//animaton from the React native documentation https://facebook.github.io/react-native/docs/animations


let testItems = [
  { key: 'Project 1' },
  { key: 'Project 2' },
  { key: 'Project 3' },
];

export default class LogTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'this is a input field',
      fadeAnim: new Animated.Value(0),
      project: '',
      showProjects: false
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

  toggleShowProjects() {
    if(!this.state.showProjects) {
      this.setState({
        showProjects:true
      })
    } else {
      this.setState({
        showProjects:false
      })
    }
  }

  showProjects() {
    console.log('test')
    if (this.state.showProjects) {
      return <Dropdown options={testItems} toggleShowProjects= {this.toggleShowProjects} />
    }
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ zIndex: 1, height: '90%', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#F1F1F1', opacity: fadeAnim }} behavior="padding" enabled>
        <View style={{ marginLeft: 10, marginRight: 10 }}>

          <Text style={{ textAlign: 'center', color: "#484848", fontSize: 22, paddingTop: 20, paddingBottom: 20, }}>Add time</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.toggleShowProjects()}>
            <Text style={{ color: this.props.colorTheme.lightColor, fontSize: 16 }}>Project one</Text>
          </TouchableOpacity>
          
        </View>
        {this.showProjects()}
      </Animated.View>
    )
  }
}
