import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text>This is the settings page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      
    },
  });