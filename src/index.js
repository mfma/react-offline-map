import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BaseMap from "./component/BaseMap";
import MarkersMap from "./component/MarkersMap";
import AntPathMap from "./component/AntPathMap";
import GeoFence from "./component/GeoFence";
import CreateGeoFence from "./examples/CreateGeoFence";
import SearchInput from "./test/SearchSelect";


import * as serviceWorker from './serviceWorker';
import './index.css';
import 'antd/dist/antd.css'
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import Leaflet from 'leaflet'

Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [
                {id: 1, name: "基础"},
                {id: 2, name: "标记"},
                {id: 3, name: "轨迹"},
                {id: 4, name: "地理围栏"},
                {id: 5, name: "创建地理围栏"}
            ],
            value: 5
        };
    }

    handleChange = e => {
        this.setState({
            value: parseInt(e.target.value)
        });


    };

    getMarkers = () => {
        return [
            {position: [39.908, 116.38], content: 'My first popup'},
            {position: [39.908, 116.39], content: 'My second popup'},
            {position: [39.908, 116.37], content: 'My third popup'},
        ]
    };

    getMarkers1 = () => {
        return [{lat: 39.90711, lng: 116.31487},
            {lat: 39.90163, lng: 116.31507},
            {lat: 39.89803, lng: 116.31507},
            {lat: 39.91018, lng: 116.30712},
            {lat: 39.91097, lng: 116.30442},
            {lat: 39.91179, lng: 116.30108},
            {lat: 39.91183, lng: 116.29891},
            {lat: 39.91182, lng: 116.29622}];
    };

    getGathers = () => {
        return [
            {lat: 39.90737, lng: 116.31486},
            {lat: 39.90711, lng: 116.31487},
            {lat: 39.90163, lng: 116.31507},
            {lat: 39.89964, lng: 116.31502},
            {lat: 39.89803, lng: 116.31507},
            {lat: 39.91003, lng: 116.30799},
            {lat: 39.91018, lng: 116.30712},
            {lat: 39.91045, lng: 116.30616},
            {lat: 39.91078, lng: 116.30509},
            {lat: 39.91097, lng: 116.30442},
            {lat: 39.91123, lng: 116.30347},
            {lat: 39.91146, lng: 116.30268},
            {lat: 39.91159, lng: 116.30223},
            {lat: 39.91179, lng: 116.30108},
            {lat: 39.91179, lng: 116.30108},
            {lat: 39.91183, lng: 116.29891},
            {lat: 39.91181, lng: 116.29749},
            {lat: 39.91182, lng: 116.29622}
        ];
    };

    GetComponent = () => {
        let selectedComponent = null;
        switch (this.state.value) {
            case 1:
                selectedComponent = <BaseMap latlng={{lat: 39.915378, lng: 116.404269}}/>;
                break;
            case 2:
                selectedComponent = <MarkersMap markers={this.getMarkers()}
                                                latlng={{lat: 39.908, lng: 116.39}}/>;
                break;
            case 3:
                selectedComponent =
                    <AntPathMap latlng={{lat: 39.915378, lng: 116.404269}} gathers={this.getGathers()} markers={this.getMarkers1()}/>;
                break;
            case 4:
                selectedComponent =
                    <GeoFence latlng={{lat: 40.05549181144552, lng: 116.30411570647766}}
                              marker={[40.05549181144552, 116.30411570647766]}
                              radius={50}
                              color={"red"}/>;
                break;
            case 5:
                selectedComponent =
                    <CreateGeoFence latlng={{lat: 40.05549181144552, lng: 116.30411570647766}}/>;
                break;
            default:
                break;
        }
        return selectedComponent;
    };

    render() {
        let options = this.state.options;
        return (
            <div className='home'>
                <div className='select-panel'>
                    <select className='selector'
                            defaultValue={this.state.value}
                            onChange={this.handleChange}
                    >
                        {options.length > 0 &&
                        options.map((item, i) => {
                            return (
                                <option key={i} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='map-panel'>
                    {this.GetComponent()}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    options: PropTypes.array,
    value: PropTypes.number
};


ReactDOM.render(<Home/>, document.getElementById('root'));
serviceWorker.unregister();
