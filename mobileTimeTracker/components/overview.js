import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Dropdown from './Inputs/dropdown';
import TimelogRow from './timelogrow';

//temporary options for the dropdown menu
let options = ["test 1", "test 2", "tralala 3"]



export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const fontsize = 16;

    return (
      <View style={styles.container}>
        

        <View style={{ flex: 1, marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
          
          <View style={styles.inputs}>
            <Text style={{ flex: 2, color: "#484848", fontSize: 18, textAlignVertical: 'center' }}>project</Text>
            <View style={{ flex: 3 }}>
             
            </View>
          </View>
        </View>


        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 32, color: this.props.colorTheme.lightColor, paddingTop: 7, }}>80h</Text>
        </View>

        <View style={{ flex: 12 }}>
          <ScrollView >

            <View style={{ paddingTop: 15 }}>
              <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: fontsize }}>1 Jan</Text>
              <TimelogRow colorTheme={this.props.colorTheme} />
              <TimelogRow colorTheme={this.props.colorTheme} />
              <TimelogRow colorTheme={this.props.colorTheme} />
            </View>

            <View style={{ paddingTop: 15 }}>
              <Text style={{ color: this.props.colorTheme.lightColor, marginBottom: 10, fontSize: fontsize }}>31 Dec</Text>
              <TimelogRow colorTheme={this.props.colorTheme} />
              <TimelogRow colorTheme={this.props.colorTheme} />
              <TimelogRow colorTheme={this.props.colorTheme} />
              <TimelogRow colorTheme={this.props.colorTheme} />
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft:10,
    marginRight:10,
    marginTop: 10,
  },
  inputs: {
    flex: 1, flexDirection: 'row', color: "#484848"
  },
  timeLog: {
    borderTopColor: "#484848"
  }
});
