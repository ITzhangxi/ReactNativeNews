import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image
} from 'react-native';

const createClass = require('create-react-class');
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
const Home = createClass({
    getInitialState() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    },
    componentDidMount() {
        this.loadData();
    },
    loadData() {
        fetch('http://api.avatardata.cn/TouTiao/Query?key=ebee8d2dc3c7485a970384386a124171&type=top')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error_code == 0) {
                    const data = responseJson.result.data;
                    console.log(data);
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(data)
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    },
    // 渲染ListView页面
    renderRow(rowData, sectionID, rowID, hightlightRow) {
        console.log(rowData);
        return (
            <View style={styles.listViewStyle}>
                <Image source={{uri: rowData.thumbnail_pic_s}} style={styles.ImageStyle}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Text>这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍这里在暂时没有介绍</Text>
                </View>
            </View>
        )

    }
});
const styles = StyleSheet.create({
    container: {
        // paddingTop: 65
    },
    listViewStyle: {
        flexDirection: 'row',
        marginBottom: 10
    },
    ImageStyle: {
        width: width * 0.3,
    },
    content: {
        padding: 10,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
});
module.exports = Home;