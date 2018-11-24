//import liraries
import React from 'react';
import { Image, Linking, Text, StyleSheet, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const amazonURI = 'https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Ddigital-music&field-keywords=';

// create a component
const AlbumDetails = (props) => {
    const thumbnail = props.thumbnail_image !== null 
        ? { uri: props.thumbnail_image }
        // eslint-disable-next-line global-require
        : require('../../assets/No_Image.png');

    const link = `${amazonURI}${props.album.replace(/\s/g, '+')}`;
    return (
        <Card>
            <CardSection style={styles.header}>
                <View style={styles.centered}>
                    <Image 
                        source={thumbnail}
                        style={styles.thumbnail}     
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.album}>{props.album}</Text>
                    <Text style={styles.artist}>{props.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    resizeMode="contain"               
                    style={{ ...styles.albumArt, ...styles.centered }}
                    source={{ uri: props.albumArt }} 
                />
            </CardSection>
            <CardSection>
                <Button 
                    onPress={() => Linking.openURL(link)}
                    buttonTextStyle={styles.buttonText} 
                    buttonText='BUY NOW' 
                    iconName="amazon" 
                    iconSize={24} 
                    iconColor="cornflowerblue" 
                />
            </CardSection>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 15, 
        width: 300, 
        height: 300,
    },
    artist: {
        fontSize: 16,
    },
    album: {
        fontSize: 20,
        fontWeight: '600'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    thumbnail: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    albumArt: {        
        height: 350,
        width: null,
        flex: 1,
    },
    buttonText: {
        color: 'cornflowerblue',
        fontSize: 20,
        marginRight: 10
    }
});

//make this component available to the app
export default AlbumDetails;
