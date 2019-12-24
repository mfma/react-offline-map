import React, {Component, Fragment} from 'react';
import BaseMap from "./BaseMap";
import {Circle, Marker} from 'react-leaflet';
import PropTypes from 'prop-types';

class GeoFence extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latlng: props.latlng,
            marker: props.marker,
            radius: props.radius ? props.radius : 0,
            color: props.color
        };
    }

   static getDerivedStateFromProps(props,state){
        return {
            marker: props.marker,
            radius: props.radius ? props.radius : 0,
        };
    }


    render() {
        return (
            <BaseMap latlng={this.state.latlng}>
                {Object.keys(this.state.marker).length!==0?
                    <Fragment>
                        <Circle center={this.state.marker} color={"blue"} fillColor={this.state.color} fillOpacity={0.4}
                                radius={this.state.radius}/>
                        <Marker position={this.state.marker}/>
                    </Fragment>
                    : null}
                }
            </BaseMap>
        );
    }
}

GeoFence.propTypes = {
    latlng: PropTypes.object.isRequired,
    marker: PropTypes.object.isRequired,
    radius: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default GeoFence;