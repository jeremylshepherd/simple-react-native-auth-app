//import liraries
import React, { Component } from 'react';
import { FlatList } from 'react-native';

import AlbumDetails from './AlbumDetails';

const apiEndPoint = 'https://jeremylshepherd.github.io/rollingStoneTop500/index.json';

// create a component
class AlbumList extends Component {
    constructor() {
        super();
        
        this.state = {
            albums: []
        };

        this.getAlbums = this.getAlbums.bind(this);
    }

    componentDidMount() {
        this.getAlbums();
    }

    getAlbums() {
        // eslint-disable-next-line no-undef
        fetch(apiEndPoint)
            .then(response => response.json())
            .then(res => this.setState({ albums: res }));
    }

    render() {
        return (
            <FlatList
                 data={this.state.albums}
                 keyExtractor={(item) => (
                     `${item.album.replace(' ', '_')}${item.artist.replace(' ', '_')}`
                 )}
                 renderItem={({ item }) => { 
                     console.log(item);
                     return <AlbumDetails {...item} />;
                    }
                 }
            />
        );
    }
}

//make this component available to the app
export default AlbumList;
