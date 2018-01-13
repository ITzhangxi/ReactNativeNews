import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

const createClass = require('create-react-class');
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');
//引用组件
const Home = require('./Component/Home');
const Set = require('./Component/Set')
const App = createClass({
    getInitialState() {
        return {
            activeTabBar: 'home'
        }
    },
    render() {
        return (
            <TabBarIOS
                barTintColor={'#2acc38'}
                tintColor={'#251ddd'}
                unselectedTintColor={'#fff'}
            >
                <TabBarIOS.Item
                    icon={{uri: 'home', scale: 7}}
                    title={'主页'}
                    selected={this.state.activeTabBar == 'home'}
                    onPress={() => this.setState({activeTabBar: 'home'})}
                >
                    <NavigatorIOS
                        barTintColor={'#b5b5b5'}
                        style={{flex: 1}}
                        initialRoute={{
                            component: Home,
                            title: 'Home'
                        }}
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri: 'set', scale: 7}}
                    title={'设置'}
                    selected={this.state.activeTabBar == 'set'}
                    onPress={() => this.setState({activeTabBar: 'set'})}
                >
                    <NavigatorIOS
                        barTintColor={'#b5b5b5'}
                        style={{flex: 1}}
                        initialRoute={{
                            component: Set,
                            title: 'Set',
                        }}
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
            {/*<View>*/}
                {/*<Text>21</Text>*/}
            {/*</View>*/}
        )
    }
});
module.exports = App;
const styles = StyleSheet.create({
    container: {},
})