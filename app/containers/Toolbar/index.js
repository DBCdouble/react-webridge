import React from 'react';
import ToolbarCompo from '../../components/Toolbar/index';
export default class extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){}
    render(){
        return(
            <div>
                <ToolbarCompo param={this.props.param}/>
            </div>
        )
    }
}