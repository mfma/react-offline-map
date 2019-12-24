import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Marker, Popup} from 'react-leaflet';
import BaseMap from "./BaseMap";


class MarkersMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latlng: props.latlng,
            markers: props.markers
        };
    }

    getBounds=(markers)=>{
        return markers.map((value, key) => {
            return value.position;
        });
    };

    getMarkers = () => {
        const items = this.state.markers.map((value, key) => {
           return  <Marker key={key} position={value.position}>
               <Popup>{value.content}</Popup>
           </Marker>
        });
        return <Fragment>{items}</Fragment>
    };


    render() {
        return (
            <BaseMap
                latlng={this.state.latlng}
                bounds={this.getBounds(this.state.markers)}>
                {this.getMarkers()}
            </BaseMap>
        );
    }
}

MarkersMap.propTypes = {
    latlng: PropTypes.object.isRequired,
    markers:PropTypes.array.isRequired
};

export default MarkersMap;