import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,FlatList } from 'react-native';

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    };

    cancel() {
        console.log("cancel")
        this.props.toggleShowProjects();
    }

    confirm() {
        console.log("confirm")
    }

    render() {


        return (
            <View style={{ zIndex: 1, height: '50%', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#F1F1F1' }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#636363', paddingLeft: 15, paddingRight: 15, }}>

                    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.5} onPress={() => this.cancel()}>
                        <Text style={{ flex: 1, color: 'white', lineHeight: 34, fontSize: 18 }}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} activeOpacity={0.5} onPress={() => this.confirm()}>
                        <Text style={{ flex: 1, color: 'white', lineHeight: 34, fontSize: 18 }}>Confirm</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 6 }}>
                    <ScrollView style={{ flex: 1, paddingLeft: 15, paddingRight: 15 ,paddingTop:15}}>
                        <FlatList data={this.props.options}
                          renderItem={({item}) => <Text style={{textAlign:'center',paddingTop: 10,paddingBottom: 10,fontSize:18}}>{item.key}</Text>}
                        />
                       
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    dropdown: {
    }
});
