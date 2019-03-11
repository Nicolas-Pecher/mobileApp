import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'
//import {select} from 'react-native-picker-select'

//animaton from the React native documentation https://facebook.github.io/react-native/docs/animations

export default class LogTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'this is a input field',
      fadeAnim: new Animated.Value(0)
    }
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

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ zIndex: 1, height: '70%', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#FBFBFB', opacity: fadeAnim }} behavior="padding" enabled>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={{ textAlign: 'center', color: "#484848", fontSize: 22, paddingTop: 20, paddingBottom: 20, }}>Add time</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.onPress()}>
            <Text style={{ color: this.props.colorTheme.lightColor,fontSize:16 }}>Project one</Text>
          </TouchableOpacity>
          
        </View>
      </Animated.View>
    )
  }
}
