import React, { Component } from "react"
import { Text, View, StyleSheet, Image,
TouchableWithoutFeedback, StatusBar,
TextInput, SafeAreaView, Keyboard, TouchableOpacity,
KeyboardAvoidingView, PaddingHorizontal, Padding } from "react-native"

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View >
            <Text> This is the login </Text>
            <View>
              <TextInput 
                placeholder ="Enter Email"
                keyboardType="email=address"
                returnKeyType="next"
              />

            </View>
          </View>
        </TouchableWithoutFeedback>
          
      </KeyboardAvoidingView>
      
    )
  }
}

