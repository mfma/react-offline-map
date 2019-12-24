import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer} from 'react-leaflet';
import TextPath from 'react-leaflet-textpath';


class TextPathMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            isAnimate: props.isAnimate,
            latlng: props.latlng,
            positions: [
                [51.505, -0.09],
                [58.505, -1.02],
                [53.505, -2.09],
                [54.505, -3.02],
                [55.505, -4.09],
                [56.505, -5.02],
                [57.505, -6.09],
                [58.505, -7.02]
            ]
        };

    }

    handleClick = (e) => {
        this.setState({
            latlng: e.latlng,
        })
    };

    toggleisAnimate = () => {
        this.setState({
            isAnimate: !this.state.isAnimate,
        })
    };

    render() {
        return (
            <Map
                animate={this.state.isAnimate}
                center={this.state.latlng}
                length={4}
                onClick={this.handleClick}
                zoom={6}>
                <TileLayer url={this.state.url}/>
                <TextPath
                    positions={this.state.positions}
                    center
                    offset={10}/>
            </Map>
        );
    }
}

TextPathMap.propTypes = {
    url: PropTypes.string,
    isAnimate: PropTypes.bool,
    latlng: PropTypes.object.isRequired
};

export default TextPathMap;