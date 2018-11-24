//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import FormInput from './FormInput';

// create a component
class LoginForm extends Component {
    
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <FormInput 
                            value={this.state.username}
                            label="Email"
                            inputStyle={styles.label}
                            labelStyle={styles.label}
                            onChangeText={email => this.setState({ email })}
                            keyboard="email-address"
                            placeholder="user@example.com"
                        />
                    </CardSection>
                    <CardSection>
                        <FormInput 
                            value={this.state.password}
                            label="Password"
                            inputStyle={styles.label}
                            labelStyle={styles.label}
                            onChangeText={password => this.setState({ password })}
                            secure
                            iconColor="darkslategrey"
                            placeholder="Abc12345*"                            
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            buttonText="LOG IN"
                            buttonTextStyle={styles.buttonText}
                            containerStyle={styles.button}
                            iconName="sign-in-alt"
                            iconSize={22}
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'lightslategrey',
        marginRight: 15,
        marginLeft: 15
    },
    button: {
        borderColor: 'darkslategrey',
    },
    label: {
        color: 'darkslategrey',
        fontSize: 18
    },
    buttonText: {
        fontSize: 18,
        marginRight: 10,
        color: 'darkslategrey'
    }
});

//make this component available to the app
export default LoginForm;
