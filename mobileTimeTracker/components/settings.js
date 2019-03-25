import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  onClick() {
    this.props.changeColor();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.onClick()}>
          <Text style={{textAlign:'center',fontSize:20,marginTop: 25,}}>change color theme</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      
    },
  });