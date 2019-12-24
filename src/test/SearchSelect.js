import React, {Component} from 'react';
import {Button, Col, Select} from 'antd';

const {Option} = Select;


class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.MySearchInput = React.createRef();
    }


    state = {
        data: [],
        value: undefined,
    };

    handleSearch = value => {
        if (value) {
            this.setState({data: [{value: 1, text: 'a'}, {value: 2, text: 'b'}]});
        } else {
            this.setState({data: []});
        }
    };

    handleChange = value => {
        this.setState({value});
    };

    test = () => {
        this.setState({data: [{value: 1, text: 'a'}, {value: 2, text: 'b'}]});
        console.log(this.MySearchInput);
        this.MySearchInput.current.rcSelect.state.open=true;
    };

    render() {
        const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
        return (
            <div>
                <Select
                    ref={this.MySearchInput}
                    showSearch
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    style={{width: '200px'}}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onChange={this.handleChange}
                    notFoundContent={null}
                >
                    {options}
                </Select>
                <Button onClick={this.test} type="primary">
                    确定
                </Button>
            </div>

        );
    }
}

export default SearchInput;