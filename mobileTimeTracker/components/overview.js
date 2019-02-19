import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text>This is the overview page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    },
  });