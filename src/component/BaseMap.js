import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer} from 'react-leaflet';
import {BaiduCRS} from '../constant/Constant';

class BaseMap extends Component {



    constructor(props) {
        super(props);
        this.state = {
            latlng: props.latlng,
            bounds: props.bounds,
        };
    }

    handleClick = (e) => {
        console.log(e.latlng)
    };

    render() {
        return (
            <Map
                animate={true}
                onClick={this.handleClick}
                center={this.state.latlng}
                crs={BaiduCRS}
                maxZoom={18}
                minZoom={15}
                zoom={18}
                bounds={this.state.bounds}
            >
                {/*<TileLayer url={"http://localhost:3005/map/{z}/{x}/{y}.png"} tms={true} subdomains={[0,1,2]}/>*/}
                <TileLayer url={"http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20150518"} tms={true} subdomains={[0,1,2]}/>
                {this.props.children}
            </Map>
        );
    }
}

BaseMap.propTypes = {
    latlng: PropTypes.object.isRequired,
    bounds:PropTypes.array
};

export default BaseMap;