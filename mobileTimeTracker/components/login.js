import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,
TouchableWithoutFeedback, StatusBar,
TextInput, SafeAreaView, Keyboard, TouchableOpacity,
KeyboardAvoidingView, paddingHorizontal } from 'react-native'



export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:"",
      password:""
    }
  }
  

  onPress = () =>  {
    console.log(this.refs.txtEmail._lastNativeText)
    fetch('https://mobileapp-planning-services.azurewebsites.net/api/Login',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        Email: this.refs.txtEmail._lastNativeText,
        Wachtwoord:this.refs.txtPassword._lastNativeText
      })
    })
    .then((response) => response.json())
    .then((response) => {
      if (response != null){
        //console.log(response);
        this.props.setUser(response)
      } else {
        console.log(response);
      }
    })
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback style={styles.container}
          onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                <Text style={styles.title}> Please Log In to start! </Text>
              </View>
              
              <View style={styles.infoContainer}>
                <TextInput style={styles.input}
                  placeholder ="Enter Email"
                  placeholderTextColor='rgba(255,255,255,0.8)'
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoCorrect={false}
                  ref={"txtEmail"}
                  onSubmitEditing={()=> this.refs.txtPassword.focus()}
                />
                <TextInput style={styles.input}
                  placeholder ="Enter password"
                  returnKeyType='go'
                  //secureTextEntry
                  autoCorrect={false}
                  ref={"txtPassword"}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPress()}>
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
      
      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    flexDirection: 'column'
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    width: 128,
    height: 56
  },
  title: {
    color:'#f7c744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity:  0.9
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    marginBottom: 20,
    paddingHorizontal:10
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32,53,70)',
    fontWeight: 'bold',
    fontSize: 18
  }
})
