import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import {CRS} from 'leaflet';
import * as projL from 'proj4leaflet';


class BaiduMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            isAnimate: props.isAnimate,
            latlng: props.latlng,
            antPolygon: [
                [39.908, 116.39],
                [39.902, 116.69],
                [39.908, 116.99]
            ],
        };
    }

    handleClick = (e) => {
        this.setState({
            latlng: e.latlng,
        })
    };

    initCRS=()=>{
        CRS.Baidu = new projL.CRS('EPSG:900913', '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
            resolutions: function () {
                let level = 19;
                let res = [];
                res[0] = Math.pow(2, 18);
                for (let i = 1; i < level; i++) {
                    res[i] = Math.pow(2, (18 - i))
                }
                return res;
            }(),
            origin: [0, 0],
            bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
        });
        console.log(333,CRS.Baidu);
        return CRS.Baidu;
    };

    render() {
        return (
            <Map
                animate={this.state.isAnimate}
                center={this.state.latlng}
                length={4}
                onClick={this.handleClick}
                crs={this.initCRS()}
                maxZoom={18}
                zoom={14}
            >
                <TileLayer url={this.state.url} tms={true}/>
            </Map>
        );
    }
}

BaiduMap.propTypes = {
    url: PropTypes.string,
    isAnimate: PropTypes.bool,
    latlng: PropTypes.object.isRequired
};

export default BaiduMap;