//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import firebase from 'firebase';
import config from '../config';

// create a component
class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header text="AUTH"/>
                <View style={styles.body}>                
                    <Text>An App</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    body: {
        flex: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }
});

//make this component available to the app
export default App;
