//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const bg = 'lightslategrey';
const color = 'darkslategrey';

// create a component
const UserForm = ({ email, logout }) => {
    return (
        <View style={styles.container}>
            <Card>
                {
                    email
                    ?<CardSection>
                        <Text style={styles.text}>{email}</Text>
                    </CardSection>
                    :null
                }
                <CardSection>
                    <Button
                        buttonText="LOG OUT"
                        buttonTextStyle={styles.buttonText}
                        containerStyle={styles.button}
                        iconName="sign-out-alt"
                        iconSize={22}
                        iconColor={color}
                        onPress={logout}
                    />
                </CardSection>
            </Card>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: bg,
        marginRight: 15,
        marginLeft: 15
    },
    button: {
        borderColor: color,
    },
    text: {        
        width: '100%',
        fontFamily: 'system font',
        fontSize: 22,
        padding: 5,
        textAlign: 'center',
        color: color
    },
    buttonText: {
        fontSize: 18,
        marginRight: 10,
        color: color
    },
});

//make this component available to the app
export default UserForm;
