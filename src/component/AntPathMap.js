import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Marker} from "react-leaflet";
import BaseMap from "./BaseMap";
import AntPath from "react-leaflet-ant-path";

class AntPathMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latlng: props.latlng,
            gathers:props.gathers,
            markers: props.markers,
            options: {
                color: '#1a237e',
                weight: 8
            }
        };
    }

    getMarkers = () => {
        const items = this.state.markers.map((value, key) => {
            return  <Marker key={key} position={value}/>
        });
        return <Fragment>{items}</Fragment>
    };


    render() {
        return (
            <BaseMap
                latlng={this.state.latlng}
                bounds={this.state.gathers}>
                <AntPath positions={this.state.gathers} options={this.state.options}/>
                {this.getMarkers()}
            </BaseMap>
        );
    }
}

AntPathMap.propTypes = {
    latlng: PropTypes.object.isRequired,
    gathers:PropTypes.array.isRequired,
    markers:PropTypes.array.isRequired
};


export default AntPathMap;