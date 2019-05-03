import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';


//use this component to make dropdown boxes
//just pass an array of options
//and the selected one will be returned to the parent component via the select function

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.options[0].ProjectId
        };
    };

    cancel() {
        console.log("cancel")
        this.props.removeDropDown();
    }

    confirm() {
        console.log("selected: " + this.state.selected);

        //get the selected option with his id that was saved in the state
        this.props.options.forEach(option => {
            if (option.ProjectId == this.state.selected) {
                this.props.selected(option);
            }
        });
        this.props.removeDropDown();
    }

    changeSelected = (ProjectId) => {
        //console.log(id);
        this.setState({
            selected: ProjectId
        });
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
                    <ScrollView style={{ flex: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
                        {
                            this.props.options.map((option) => {
                                if (this.state.selected == option.ProjectId) {
                                    return (<TouchableOpacity key={option.ProjectId} ><Text style={{ color: this.props.colorTheme.lightColor, textAlign: 'center', paddingTop: 10, paddingBottom: 10, fontSize: 20 }}>{option.ProjectNaam}</Text></TouchableOpacity>);
                                }
                                const text = <Text style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 10, fontSize: 20 }}>{option.ProjectNaam}</Text>
                                return (<TouchableOpacity activeOpacity={0.5} onPress={() => this.changeSelected(option.ProjectId)} key={option.ProjectId}>{text}</TouchableOpacity>);
                            })
                        }
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
