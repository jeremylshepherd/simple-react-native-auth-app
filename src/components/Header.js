//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';


// create a component
const Header = props => (
    <View style={styles.container}>
        <Text 
            style={{ ...styles.banner, ...sanFranciscoWeights.black }}
        >
            {props.text}
        </Text>
    </View>
);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 20,
        paddingTop: 45,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
    },
    banner: {
        fontSize: 28,
        color: 'red',
        fontFamily: 'Roboto'
    }
});

//make this component available to the app
export default Header;
