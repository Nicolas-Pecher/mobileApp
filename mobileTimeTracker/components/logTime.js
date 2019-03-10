import React, { Component } from 'react'
import { Text, View, TextInput,Animated } from 'react-native'

//animaton from the React native documentation https://facebook.github.io/react-native/docs/animations

export default class LogTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'this is a input field',
      fadeAnim : new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 100,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ zIndex: 1, height: '70%', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#F1F1F1' ,borderTopColor: "#DEDEDE", borderTopWidth: 1, opacity:fadeAnim}} behavior="padding" enabled>
        <View style={{marginLeft: 10, marginRight: 10}}>
          <Text style={{ textAlign: 'center', color: "#484848", fontSize: 18, paddingTop: 20,paddingBottom: 20, }}>Add time</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , paddingLeft:10}}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </View>
      </Animated.View>
    )
  }
}
