import React from 'react';
import { Table, Input, Icon, Button, Popconfirm, AutoComplete, InputNumber } from 'antd';
import './index.css'
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable: false,
            value:this.props.value
          }
    }
    componentWillReceiveProps(nextProps,nextState) {
        if(nextProps.value!=this.props.value){
            this.setState({
                value: nextProps.value
            })
        }
    }
  handleChange(e) {
        var value;
        if(this.props.editableFlag=='name'){
            value = e.target.value;
        }else if(this.props.editableFlag=='year'){
            value = e;   
        }else if(this.props.editableFlag=='grape'){
            value = e;   
        }
    
        this.setState({ value });
  }
  check(){
        this.setState({ editable: false });
        if (this.props.onChange) {
          
        this.props.onChange(this.state.value);
        }
  }
  edit(){
        this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    const autocomplete = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
                {this.props.editableFlag=='name'?
                <Input
                    value={value}
                    onChange={this.handleChange.bind(this)}
                    onPressEnter={this.check.bind(this)}
                />:
                (this.props.editableFlag=='year'?
                <InputNumber 
                min={1900} 
                max={2020}
                value={value}
                onChange={this.handleChange.bind(this)}
                />:
                    <AutoComplete
                    style={{ width: 200 }}
                    dataSource={autocomplete}
                    placeholder="自动补全，尝试输入字母b"
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    value={value}
                    onChange={this.handleChange.bind(this)}
                />
                )
                }      
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check.bind(this)}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit.bind(this)}
              />
            </div>
        }
      </div>
    );
  }
}