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
        <Text style={{ fontSize: 35, flex: 2,textAlign:"center",color:"#484848" }}>My Timesheets</Text>
        <View style={{ flex: 2 ,marginLeft:'auto',marginRight:'auto',width:'70%'}}>
          <View style={styles.inputs}>
            <Text style={{flex:2,color:"#484848",fontSize:18}}>enterprise</Text>
            <View style={{flex:3}}>
              <Dropdown />
            </View>
          </View>
          <View style={styles.inputs}>
            <Text style={{flex:2,color:"#484848",fontSize:18}}>project</Text>
            <View style={{flex:3}}>
              <Dropdown />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{textAlign:'center',fontSize:32, color:this.props.colorTheme.lightColor}}>80h</Text>
        </View>
        <View style={{ flex: 7 }}>
          <Text>Test</Text>
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
  inputs:{
    flex:1 ,flexDirection: 'row', color:"#484848"
  }
});
