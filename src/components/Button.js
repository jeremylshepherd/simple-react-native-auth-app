//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// create a component
const Button = props => (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}> 
            <Text style={props.buttonTextStyle}>{props.buttonText}</Text>
            {props.iconName !== undefined 
                ? <Icon 
                    name={props.iconName} 
                    size={props.iconSize} 
                    color={props.iconColor} 
                />
                : null
            }
        </View>
    </TouchableOpacity>
);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'cornflowerblue',
        borderWidth: 1,
        borderRadius: 5,        
    },
    text: {
        color: 'cornflowerblue',
    }
});

//make this component available to the app
export default Button;
