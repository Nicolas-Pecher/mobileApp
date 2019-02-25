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
      menu: 'home'
    }
  }

  getDisplay() {
    if (this.state.menu == 'home') {
      return <Home />
    }
    if (this.state.menu == 'overview') {
      return <Overview />
    }
    if (this.state.menu == 'settings') {
      return <Settings />
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
        <View style={{ flex: 10,marginLeft:10 }}>
          {this.getDisplay()}
        </View>
        <View style={{ flex: 1 , backgroundColor: '#404040'}}>
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

