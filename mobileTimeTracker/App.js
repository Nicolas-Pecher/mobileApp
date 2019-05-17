import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Home from './components/home.js';
import Overview from './components/overview.js';
import Settings from './components/settings.js';
import Menu from './components/menu.js';
import Login from './components/login';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: 'home',
      colorTheme: { theme: 'red', lightColor: '#FF4646', darkColor: '#980000' },
      loggedIn: false, // if true user is logged in
      user: {}
    }
  }



  
  //show the page that has to be displayed
  getDisplay() {
    if (this.state.menu == 'home') {
      return <Home colorTheme={this.state.colorTheme} />
    }
    if (this.state.menu == 'overview') {

      return <Overview colorTheme={this.state.colorTheme} />

    }
    if (this.state.menu == 'settings') {
      return <Settings colorTheme={this.state.colorTheme} changeColor={this.changeColor} />
    }
  }

  //change the color theme of the app
  changeColor = () => {
    console.log("color changed");
    if (this.state.colorTheme.theme == 'red') {
      this.setState({
        colorTheme: { theme: 'blue', lightColor: '#53ACBE', darkColor: '#0E0055' }
      })
      this.saveColorLocally('blue');
    } else {
      this.setState({
        colorTheme: { theme: 'red', lightColor: '#FF4646', darkColor: '#980000' }
      })
      this.saveColorLocally('red');
    }
  }

  //save the color theme to local storage
  saveColorLocally = async (color) => {
    try {
      await AsyncStorage.setItem('color', JSON.stringify(color));
    } catch (error) {
      console.log('data could not be saved')
    }
  }

  saveUserLocally = async (user) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.log('data could not be saved')
    }
  }

  componentDidMount() {
    this.getColorLocally()
    /*if(this.getUserLocally()) {
      this.setState({
        loggedIn:true
      })
    }*/
    //console.log(this.state.colorTheme.theme)
  }

  getUserLocally = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      console.log("user: "+value)
      return true
    } catch (error) {
      console.log('user can not be fetched')
    }
  }

  getColorLocally = async () => {
    //console.log('getting the color')
    try {
      const value = await AsyncStorage.getItem('color');
      if (JSON.parse(value) == 'blue') {
        this.setState({
          colorTheme: { theme: 'blue', lightColor: '#53ACBE', darkColor: '#0E0055' }
        })
      } else {
        this.setState({
          colorTheme: { theme: 'red', lightColor: '#FF4646', darkColor: '#980000' }
        })
      }
    } catch (error) {
      console.log('color can not be fetched')
    }
  }

  //change the page that is displayed
  changeDisplay = (display) => {
    this.setState({
      menu: display
    })
  }

  //set the user that is logged in
  setUser = (user) => {
    this.saveUserLocally(user);
    this.setState({
      user: user,
      loggedIn: true
    })

  }

  render() {
    //console.log(this.state.colorTheme.theme)
    if (this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 19 }}>
            {this.getDisplay()}
          </View>
          <View style={{ flex: 2, backgroundColor: '#404040' }}>
            <Menu changeDisplay={this.changeDisplay} />
          </View>
        </View>
      );
    } else { // if the isLogged state is false this is displayed
      return (
        <Login setUser={this.setUser} />
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
  },
});

