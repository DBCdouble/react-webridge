import React from 'react';
import ListTaskCompo from '../../components/ListTask/index';
export default class extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){}
    render(){
        return(
            <div>
               <ListTaskCompo param={this.props.param}/>
            </div>
        )
    }
}