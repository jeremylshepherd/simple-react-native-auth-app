//import liraries
import React, { Component } from 'react';
import firebase from 'firebase';
import config from '../config';
import { View, StyleSheet } from 'react-native';
import { Header, Spinner } from './components/Elements';
import LoginForm from './components/LoginForm';
import UserForm from './components/UserForm';
import { bg } from './commonStyles';


// create a component
class App extends Component {    
    
    state = {
        auth: null,
        email: null
    }

    componentWillMount() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ auth: true, email: user.email })
            } else {
                this.setState({ auth: false, email: null})
            }            
        });
    }

    renderBody = () => {
        switch(this.state.auth) {
            case true:
                return  <UserForm email={this.state.email} logout={this.logout} />
            case false: 
                return <LoginForm />
            default:
            return <View style={styles.spinner}><Spinner /></View>
        }
    }

    logout = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header text="AUTH"/>
                <View style={styles.body}>
                    {this.renderBody()}
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
    },
    cardContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: bg,
        marginRight: 15,
        marginLeft: 15
    },
    spinner: { 
        flex: 1,
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: bg
    },
    body: {
        flex: 17,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: bg
    },
});

//make this component available to the app
export default App;
