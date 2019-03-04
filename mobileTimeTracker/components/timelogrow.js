import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TimelogRow extends Component {

    render() {
        const fontsize = 16;
        return (
            <View style={{ borderTopColor: "#DEDEDE", borderTopWidth: 1, paddingTop: 15, paddingBottom: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 3, color: "#484848", fontSize: fontsize }}>designing mobile app</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={{ color: this.props.colorTheme.lightColor, fontSize: fontsize }}>8:00 - </Text>
                        <Text style={{ color: this.props.colorTheme.lightColor, fontSize: fontsize }}>12:00</Text>
                    </View>
                </View>
            </View>
        );
    }
}
