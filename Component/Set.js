import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const createClass = require('create-react-class');
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
const Set = createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>I am Set</Text>
            </View>
        )
    },
});
const styles = StyleSheet.create({
    container: {
        paddingTop: 65
    }
});
module.exports = Set;