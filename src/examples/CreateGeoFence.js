import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GeoFence from "../component/GeoFence";
import {Layout, Row, Col, InputNumber, Input, Button, Typography, Select} from "antd";

import "../styles/create-geofence.css";

class CreateGeoFence extends Component {
    constructor(props) {
        super(props);
        this.MySearchInput = React.createRef();
        this.state = {
            latlng: props.latlng,
            options: [],
            marker: {},
            radius:0
        };
    }

    search=()=>{
        this.setState({options: [{value: JSON.stringify({lat:40.05549181144552,lng:116.30411570647766}), text: 'b'}]});
        this.MySearchInput.current.rcSelect.state.open=true;
    };

    getOptions=()=>{
        return this.state.options.map(d => <Select.Option key={d.value}>{d.text}</Select.Option>);
    };

    handleSelectChange = value => {
        this.setState({
            value,
            marker:JSON.parse(value)
        })

    };

    handleInputChange=value=>{
        this.setState({
            radius:parseFloat(value)
        })
    };

    render() {
        return (
            <Layout className="mfma-container">
                <Row className="mfma-topbar">
                    <Col span={1}>
                        <Typography.Text>位置1：</Typography.Text>
                    </Col>
                    <Col span={4}>
                        <Select
                            ref={this.MySearchInput}
                            showSearch
                            value={this.state.value}
                            placeholder={this.props.placeholder}
                            style={{width: '200px'}}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            onChange={this.handleSelectChange}
                            notFoundContent={null}
                        >
                            {this.getOptions()}
                        </Select>
                        <Button type="primary" icon="search" onClick={this.search}/>
                    </Col>
                    <Col span={1}>
                        <Typography.Text>半径：</Typography.Text>
                    </Col>
                    <Col span={2}>
                        <InputNumber min={0} max={100}
                                     disabled={this.state.disabled} defaultValue={0}
                        onChange={this.handleInputChange}/>
                    </Col>
                </Row>
                <Layout className="mfma-map-layout">
                    <GeoFence latlng={this.state.latlng}
                              radius={this.state.radius}
                              marker={this.state.marker}
                              color={"red"}/>
                </Layout>
            </Layout>
        );
    }
}

CreateGeoFence.propTypes = {
    latlng: PropTypes.object.isRequired,
    marker: PropTypes.object
};

export default CreateGeoFence;