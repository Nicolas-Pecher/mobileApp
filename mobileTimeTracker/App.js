import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/home.js';
import Overview from './components/overview.js';
import Settings from './components/settings.js';
import Menu from './components/menu.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: 'home',
      colorTheme:{theme:'red',lightColor:'#FF4646',darkColor:'#980000'}
    }
  }

  getDisplay() {

    if (this.state.menu == 'home') {
      return <Home colorTheme={this.state.colorTheme}/>
    }
    if (this.state.menu == 'overview') {
      return <Overview colorTheme={this.state.colorTheme}/>
    }
    if (this.state.menu == 'settings') {
      return <Settings colorTheme={this.state.colorTheme} changeColor={this.changeColor}/>
    }
  }

  changeColor = () => {
    console.log("color changed");
    if (this.state.colorTheme.theme == 'red') {
      this.setState({
        colorTheme: {theme:'blue',lightColor:'#53ACBE',darkColor:'#0E0055'}
      })
    } else{
      this.setState({
        colorTheme: {theme:'red',lightColor:'#FF4646',darkColor:'#980000'}
      })
    }
  }

  changeDisplay = (display) => {
    //console.log('display page: ' + display)
    this.setState({
      menu:display
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 19,marginLeft:10,marginRight:10 }}>
          {this.getDisplay()}
        </View>
        <View style={{ flex: 2 , backgroundColor: '#404040'}}>
          <Menu changeDisplay={this.changeDisplay}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
  },
});

