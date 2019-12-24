import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer} from 'react-leaflet'
import {Curve} from 'react-leaflet-curve/src/index'


class CurveMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            isAnimate: props.isAnimate,
            latlng: props.latlng,
            path: ['M', [46.86019101567027, -29.047851562500004],
                'Q', [50.48547354578499, -23.818359375000004],
                [46.70973594407157, -19.907226562500004],
                'T', [46.6795944656402, -11.0302734375]]
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
                zoom={4}>
                <TileLayer url={this.state.url}/>
                <Curve positions={this.state.path} option={{dashArray: 5, animate: {duration: 3000, iterations: Infinity}}}/>
            </Map>
        );
    }
}

CurveMap.propTypes = {
    url: PropTypes.string,
    isAnimate: PropTypes.bool,
    latlng: PropTypes.object.isRequired
};

export default CurveMap;