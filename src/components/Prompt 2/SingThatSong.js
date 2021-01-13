import React, { Component } from 'react';

class SingThatSong extends Component {
    render() {
        let { title, artist, lyrics, releaseYear } = this.props
        return (
            <div>
                <h1>{title}</h1>
                <h2>{lyrics}</h2>
                <p>{artist}</p>
                <p>{releaseYear}</p>
            </div>
        );
    }
}

export default SingThatSong;