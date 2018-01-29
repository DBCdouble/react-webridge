import React from 'react';
import ModalCompo from '../../components/Modal/index';
export default class extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        //console.log(this.props.param);
    }
    render(){
        return(
            <div>
               <ModalCompo param={this.props.param}/>
            </div>
        )
    }
}