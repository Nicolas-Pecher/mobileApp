import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Inputs/dropdown';

//temporary options for the dropdown menu
let options = ["test 1", "test 2", "tralala 3"]

export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, flex: 1,textAlign:"center" }}>My Timesheets</Text>
        <View style={{ flex: 1 }}>
          <View style={{flex:1 ,flexDirection:"row"}}>
            <Text style={{flex:1}}>Enterprise</Text>
            <Dropdown options={options} style={{flex:1}}></Dropdown>
          </View>
          <View style={{flex:1 ,flexDirection:"row",justifyContent: 'center',}}>
            <Text style={{flex:1}}>Project</Text>
            <Dropdown options={options} style={{flex:1}}></Dropdown>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>80h</Text>
        </View>
        <View style={{ flex: 1 }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});